"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Download, Trash2, Eye } from "lucide-react"

interface ContactSubmission {
  id: string
  name: string
  phone: string
  carBrand: string
  service: string
  message: string
  status: string
  createdAt: string
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("all")
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetchContacts()
  }, [filter, search])

  const fetchContacts = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/admin/contacts?status=${filter}&search=${search}`)
      const data = await response.json()
      setContacts(data)
    } catch (error) {
      console.error("Failed to fetch contacts:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this submission?")) return

    try {
      await fetch(`/api/admin/contacts/${id}`, { method: "DELETE" })
      setContacts(contacts.filter(c => c.id !== id))
    } catch (error) {
      console.error("Failed to delete contact:", error)
    }
  }

  const handleMarkAsRead = async (id: string) => {
    try {
      await fetch(`/api/admin/contacts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "read" }),
      })
      fetchContacts()
    } catch (error) {
      console.error("Failed to update contact:", error)
    }
  }

  const handleExportCSV = () => {
    const headers = ["Name", "Phone", "Car Brand", "Service", "Message", "Status", "Date"]
    const rows = contacts.map(c => [
      c.name,
      c.phone,
      c.carBrand,
      c.service,
      c.message.replace(/"/g, '""'),
      c.status,
      new Date(c.createdAt).toLocaleDateString(),
    ])

    const csv = [
      headers.join(","),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(",")),
    ].join("\n")

    const blob = new Blob([csv], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `contacts-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
  }

  return (
    <div className="min-h-screen bg-steel-dark p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-primary hover:text-primary/80">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-4xl font-bold text-white">Contact Submissions</h1>
          </div>
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-steel-dark font-semibold rounded-lg hover:bg-primary/90 transition"
          >
            <Download size={20} />
            Export CSV
          </button>
        </div>

        <div className="flex gap-4 mb-8">
          <input
            type="text"
            placeholder="Search by name or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 bg-steel-mid text-white rounded-lg border border-primary/30 focus:border-primary outline-none"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 bg-steel-mid text-white rounded-lg border border-primary/30 focus:border-primary outline-none"
          >
            <option value="all">All Status</option>
            <option value="new">New</option>
            <option value="read">Read</option>
            <option value="replied">Replied</option>
            <option value="archived">Archived</option>
          </select>
        </div>

        {loading ? (
          <div className="text-center text-steel-light py-12">Loading...</div>
        ) : contacts.length === 0 ? (
          <div className="text-center text-steel-light py-12">No submissions found</div>
        ) : (
          <div className="overflow-x-auto bg-steel-mid rounded-lg border border-primary/20">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary/20 bg-steel-dark/50">
                  <th className="px-6 py-4 text-left text-primary font-semibold">Name</th>
                  <th className="px-6 py-4 text-left text-primary font-semibold">Phone</th>
                  <th className="px-6 py-4 text-left text-primary font-semibold">Service</th>
                  <th className="px-6 py-4 text-left text-primary font-semibold">Status</th>
                  <th className="px-6 py-4 text-left text-primary font-semibold">Date</th>
                  <th className="px-6 py-4 text-left text-primary font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.id} className="border-b border-primary/10 hover:bg-steel-dark/50 transition">
                    <td className="px-6 py-4 text-white font-medium">{contact.name}</td>
                    <td className="px-6 py-4 text-steel-light">
                      <a href={`tel:${contact.phone}`} className="text-primary hover:underline">
                        {contact.phone}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-steel-light">{contact.service}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        contact.status === "new" ? "bg-primary/20 text-primary" :
                        contact.status === "read" ? "bg-blue-500/20 text-blue-400" :
                        contact.status === "replied" ? "bg-green-500/20 text-green-400" :
                        "bg-gray-500/20 text-gray-400"
                      }`}>
                        {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-steel-light text-sm">
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Link
                          href={`/admin/contacts/${contact.id}`}
                          className="p-2 bg-primary/20 text-primary rounded hover:bg-primary/30 transition"
                          title="View details"
                        >
                          <Eye size={18} />
                        </Link>
                        {contact.status === "new" && (
                          <button
                            onClick={() => handleMarkAsRead(contact.id)}
                            className="p-2 bg-blue-500/20 text-blue-400 rounded hover:bg-blue-500/30 transition"
                            title="Mark as read"
                          >
                            ✓
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(contact.id)}
                          className="p-2 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

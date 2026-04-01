'use client';

import { useEffect, useState } from 'react';
import { Trash2, Archive } from 'lucide-react';

interface ContactSubmission {
  id: string;
  name: string;
  phone: string;
  carBrand: string;
  service: string;
  message: string;
  status: string;
  createdAt: string;
}

export default function ContactsPage() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const res = await fetch('/api/admin/contacts');
      const data = await res.json();
      setSubmissions(data);
    } catch (error) {
      console.error('Failed to fetch submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, status: string) => {
    try {
      await fetch(`/api/admin/contacts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      setSubmissions(
        submissions.map((s) => (s.id === id ? { ...s, status } : s))
      );
    } catch (error) {
      console.error('Failed to update submission:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;

    try {
      await fetch(`/api/admin/contacts/${id}`, { method: 'DELETE' });
      setSubmissions(submissions.filter((s) => s.id !== id));
    } catch (error) {
      console.error('Failed to delete submission:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-500/10 text-blue-400';
      case 'read':
        return 'bg-yellow-500/10 text-yellow-400';
      case 'replied':
        return 'bg-green-500/10 text-green-400';
      case 'archived':
        return 'bg-gray-500/10 text-gray-400';
      default:
        return 'bg-steel-light/10 text-steel-light';
    }
  };

  return (
    <div className="min-h-screen bg-steel-dark p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Contact Submissions</h1>

        {loading ? (
          <div className="text-steel-light">Loading...</div>
        ) : (
          <div className="space-y-4">
            {submissions.map((submission) => (
              <div
                key={submission.id}
                className="bg-steel-mid rounded-lg p-6 border border-steel-light/10 hover:border-steel-light/20 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{submission.name}</h3>
                    <p className="text-steel-light text-sm">
                      {new Date(submission.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(submission.status)}`}>
                    {submission.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-steel-light text-sm">Phone</div>
                    <a href={`tel:${submission.phone}`} className="text-primary hover:underline">
                      {submission.phone}
                    </a>
                  </div>
                  <div>
                    <div className="text-steel-light text-sm">Car Brand</div>
                    <p className="text-white">{submission.carBrand}</p>
                  </div>
                  <div className="col-span-2">
                    <div className="text-steel-light text-sm">Service</div>
                    <p className="text-white">{submission.service}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-steel-light text-sm mb-2">Message</div>
                  <p className="text-white bg-steel-dark/50 p-3 rounded-lg">{submission.message}</p>
                </div>

                <div className="flex justify-between items-center">
                  <select
                    value={submission.status}
                    onChange={(e) => handleStatusChange(submission.id, e.target.value)}
                    className="px-3 py-2 bg-steel-dark text-white border border-steel-light/20 rounded-lg focus:outline-none focus:border-primary"
                  >
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="replied">Replied</option>
                    <option value="archived">Archived</option>
                  </select>

                  <button
                    onClick={() => handleDelete(submission.id)}
                    className="p-2 hover:bg-red-500/10 rounded-lg transition-colors"
                  >
                    <Trash2 size={18} className="text-red-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

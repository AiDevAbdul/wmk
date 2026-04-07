"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, TrendingUp, Phone, MessageSquare, BarChart3 } from "lucide-react"

interface AnalyticsData {
  dateRange: { startDate: string; endDate: string }
  metrics: {
    pageViews: number
    phoneClicks: number
    whatsappClicks: number
    formSubmissions: number
    contactSubmissions: number
    conversionRate: number
  }
  eventsByType: Record<string, number>
  pageStats: Record<string, number>
  topPages: Array<{ page: string; count: number }>
}

export default function AnalyticsDashboard() {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [range, setRange] = useState("30d")

  useEffect(() => {
    fetchAnalytics()
  }, [range])

  const fetchAnalytics = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/admin/analytics?range=${range}`)
      const analyticsData = await response.json()
      setData(analyticsData)
    } catch (error) {
      console.error("Failed to fetch analytics:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-steel-dark p-8 flex items-center justify-center">
        <div className="text-steel-light">Loading analytics...</div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-steel-dark p-8 flex items-center justify-center">
        <div className="text-steel-light">Failed to load analytics</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-steel-dark p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-primary hover:text-primary/80">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-4xl font-bold text-white">Analytics Dashboard</h1>
          </div>
          <select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="px-4 py-2 bg-steel-mid text-white rounded-lg border border-primary/30 focus:border-primary outline-none"
          >
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
            <option value="1y">Last Year</option>
          </select>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Page Views */}
          <div className="bg-steel-mid border border-primary/20 rounded-lg p-6 hover:border-primary/60 transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-steel-light font-semibold">Page Views</h3>
              <BarChart3 className="text-primary" size={24} />
            </div>
            <p className="text-4xl font-bold text-white">{data.metrics.pageViews.toLocaleString()}</p>
            <p className="text-sm text-steel-light/70 mt-2">Total page views</p>
          </div>

          {/* Phone Clicks */}
          <div className="bg-steel-mid border border-primary/20 rounded-lg p-6 hover:border-primary/60 transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-steel-light font-semibold">Phone Clicks</h3>
              <Phone className="text-primary" size={24} />
            </div>
            <p className="text-4xl font-bold text-white">{data.metrics.phoneClicks}</p>
            <p className="text-sm text-steel-light/70 mt-2">Call button clicks</p>
          </div>

          {/* WhatsApp Clicks */}
          <div className="bg-steel-mid border border-primary/20 rounded-lg p-6 hover:border-primary/60 transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-steel-light font-semibold">WhatsApp Clicks</h3>
              <MessageSquare className="text-primary" size={24} />
            </div>
            <p className="text-4xl font-bold text-white">{data.metrics.whatsappClicks}</p>
            <p className="text-sm text-steel-light/70 mt-2">WhatsApp button clicks</p>
          </div>

          {/* Conversion Rate */}
          <div className="bg-steel-mid border border-primary/20 rounded-lg p-6 hover:border-primary/60 transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-steel-light font-semibold">Conversion Rate</h3>
              <TrendingUp className="text-primary" size={24} />
            </div>
            <p className="text-4xl font-bold text-white">{data.metrics.conversionRate.toFixed(2)}%</p>
            <p className="text-sm text-steel-light/70 mt-2">Form submissions / page views</p>
          </div>
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Form Submissions */}
          <div className="bg-steel-mid border border-primary/20 rounded-lg p-6">
            <h3 className="text-steel-light font-semibold mb-4">Form Submissions</h3>
            <p className="text-3xl font-bold text-white">{data.metrics.formSubmissions}</p>
            <p className="text-sm text-steel-light/70 mt-2">Contact form submissions</p>
          </div>

          {/* Contact Submissions */}
          <div className="bg-steel-mid border border-primary/20 rounded-lg p-6">
            <h3 className="text-steel-light font-semibold mb-4">Contact Submissions</h3>
            <p className="text-3xl font-bold text-white">{data.metrics.contactSubmissions}</p>
            <p className="text-sm text-steel-light/70 mt-2">Total submissions</p>
          </div>

          {/* Total Conversions */}
          <div className="bg-steel-mid border border-primary/20 rounded-lg p-6">
            <h3 className="text-steel-light font-semibold mb-4">Total Conversions</h3>
            <p className="text-3xl font-bold text-white">
              {data.metrics.phoneClicks + data.metrics.whatsappClicks + data.metrics.formSubmissions}
            </p>
            <p className="text-sm text-steel-light/70 mt-2">Phone + WhatsApp + Form</p>
          </div>
        </div>

        {/* Top Pages */}
        <div className="bg-steel-mid border border-primary/20 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-6">Top Pages</h3>
          <div className="space-y-4">
            {data.topPages.length > 0 ? (
              data.topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between pb-4 border-b border-primary/10 last:border-b-0">
                  <div className="flex-1">
                    <p className="text-white font-medium truncate">{page.page || "/"}</p>
                    <p className="text-sm text-steel-light/70">{page.count} views</p>
                  </div>
                  <div className="w-32 bg-steel-dark rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{
                        width: `${(page.count / Math.max(...data.topPages.map(p => p.count))) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-steel-light/70">No page data available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

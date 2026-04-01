'use client';

import { useEffect, useState } from 'react';
import { BarChart3, TrendingUp, Users, Eye } from 'lucide-react';

interface AnalyticsData {
  totalVisitors: number;
  pageViews: number;
  phoneClicks: number;
  whatsappClicks: number;
  contactSubmissions: number;
  topPages: Array<{ page: string; views: number }>;
}

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData>({
    totalVisitors: 0,
    pageViews: 0,
    phoneClicks: 0,
    whatsappClicks: 0,
    contactSubmissions: 0,
    topPages: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const res = await fetch('/api/admin/analytics');
      const analyticsData = await res.json();
      setData(analyticsData);
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-steel-dark p-8 flex items-center justify-center">
        <div className="text-steel-light">Loading analytics...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-steel-dark p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Analytics</h1>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-steel-mid rounded-lg p-6 border border-steel-light/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-steel-light text-sm mb-1">Total Visitors</div>
                <div className="text-3xl font-bold text-white">{data.totalVisitors}</div>
              </div>
              <Users className="text-primary" size={32} />
            </div>
          </div>

          <div className="bg-steel-mid rounded-lg p-6 border border-steel-light/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-steel-light text-sm mb-1">Page Views</div>
                <div className="text-3xl font-bold text-white">{data.pageViews}</div>
              </div>
              <Eye className="text-primary" size={32} />
            </div>
          </div>

          <div className="bg-steel-mid rounded-lg p-6 border border-steel-light/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-steel-light text-sm mb-1">Phone Clicks</div>
                <div className="text-3xl font-bold text-primary">{data.phoneClicks}</div>
              </div>
              <TrendingUp className="text-primary" size={32} />
            </div>
          </div>

          <div className="bg-steel-mid rounded-lg p-6 border border-steel-light/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-steel-light text-sm mb-1">WhatsApp Clicks</div>
                <div className="text-3xl font-bold text-primary">{data.whatsappClicks}</div>
              </div>
              <TrendingUp className="text-primary" size={32} />
            </div>
          </div>

          <div className="bg-steel-mid rounded-lg p-6 border border-steel-light/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-steel-light text-sm mb-1">Contact Forms</div>
                <div className="text-3xl font-bold text-primary">{data.contactSubmissions}</div>
              </div>
              <BarChart3 className="text-primary" size={32} />
            </div>
          </div>
        </div>

        {/* Top Pages */}
        <div className="bg-steel-mid rounded-lg p-6 border border-steel-light/10">
          <h2 className="text-xl font-bold text-white mb-4">Top Pages</h2>
          <div className="space-y-3">
            {data.topPages.length === 0 ? (
              <p className="text-steel-light">No page view data yet</p>
            ) : (
              data.topPages.map((page, idx) => (
                <div key={idx} className="flex justify-between items-center pb-3 border-b border-steel-light/10 last:border-b-0">
                  <span className="text-white">{page.page}</span>
                  <span className="text-primary font-semibold">{page.views} views</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

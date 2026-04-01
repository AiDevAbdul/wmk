'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  createdAt: string;
  published?: boolean;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['News', 'ECM Tips', 'Hybrid Battery', 'Maintenance'];

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    let filtered = posts.filter((p) => p.published !== false);

    if (search) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    setFilteredPosts(filtered);
  }, [posts, search, selectedCategory]);

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/blog');
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-steel-dark">
      {/* Hero */}
      <div className="bg-gradient-to-b from-steel-mid to-steel-dark py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
          <p className="text-steel-light text-lg">
            Expert insights on car repair, maintenance, and programming
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="mb-12 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-3 text-steel-light" size={20} />
            <input
              type="text"
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-steel-mid text-white border border-steel-light/20 rounded-lg focus:outline-none focus:border-primary"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === ''
                  ? 'bg-primary text-steel-dark'
                  : 'bg-steel-mid text-steel-light hover:bg-steel-mid/80'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-primary text-steel-dark'
                    : 'bg-steel-mid text-steel-light hover:bg-steel-mid/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        {loading ? (
          <div className="text-steel-light text-center py-12">Loading...</div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-steel-light text-center py-12">No posts found</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-steel-mid rounded-lg overflow-hidden border border-steel-light/10 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-xs text-steel-light">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-steel-light text-sm line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Read More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Calendar, Zap, Wrench, Battery, TrendingUp } from 'lucide-react';
import { useParams } from 'next/navigation';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  createdAt: string;
  published?: boolean;
}

const categoryIcons: Record<string, React.ReactNode> = {
  'News': <Zap size={18} />,
  'ECM Tips': <Wrench size={18} />,
  'Hybrid Battery': <Battery size={18} />,
  'Maintenance': <Wrench size={18} />,
};

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'News': { bg: 'bg-blue-500/10', text: 'text-blue-300', border: 'border-blue-500/30' },
  'ECM Tips': { bg: 'bg-amber-500/10', text: 'text-amber-300', border: 'border-amber-500/30' },
  'Hybrid Battery': { bg: 'bg-green-500/10', text: 'text-green-300', border: 'border-green-500/30' },
  'Maintenance': { bg: 'bg-purple-500/10', text: 'text-purple-300', border: 'border-purple-500/30' },
};

export default function BlogPage() {
  const params = useParams();
  const locale = params.locale as string;
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
    if (!Array.isArray(posts)) {
      setFilteredPosts([]);
      return;
    }

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
      setPosts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-steel-dark">
      {/* Animated background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-red/2 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-20 pb-16 px-4 md:px-8 z-10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-6 text-steel-light/60 text-sm"
          >
            <span>Home</span>
            <span className="text-primary/40">•</span>
            <span className="text-primary font-medium">Technical Hub</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-4">
              Technical Knowledge Hub
            </h1>
            <p className="text-lg md:text-xl text-steel-light/80 leading-relaxed max-w-3xl font-light">
              Expert insights on ECM repair, hybrid battery services, car programming, and automotive maintenance. Stay informed with industry-leading technical knowledge.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex gap-8 mt-10 flex-wrap"
          >
            {[
              { label: 'Articles', value: posts.length, icon: TrendingUp },
              { label: 'Categories', value: categories.length, icon: Zap },
              { label: 'Updated', value: 'Weekly', icon: Calendar },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-white block">{stat.value}</span>
                    <span className="text-xs text-steel-light/60 uppercase tracking-wide">{stat.label}</span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Search & Filter Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative max-w-7xl mx-auto px-4 md:px-8 mb-16 z-10"
      >
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-all duration-500" />
            <div className="relative flex items-center bg-steel-mid/30 backdrop-blur-xl border border-steel-light/10 rounded-2xl hover:border-steel-light/20 transition-all duration-300 group-focus-within:border-primary/40 group-focus-within:bg-steel-mid/50">
              <Search className="absolute left-6 text-steel-light/40 group-focus-within:text-primary transition-colors duration-300" size={20} />
              <input
                type="text"
                placeholder="Search articles, topics, solutions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-16 pr-6 py-4 bg-transparent text-white text-base focus:outline-none placeholder-steel-light/30"
              />
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 items-center">
          <span className="text-steel-light/60 text-sm font-semibold uppercase tracking-wide">Filter by:</span>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory('')}
            className={`px-5 py-2 rounded-lg font-medium transition-all text-sm ${
              selectedCategory === ''
                ? 'bg-primary text-steel-dark shadow-lg shadow-primary/40'
                : 'bg-steel-mid/40 text-steel-light/80 hover:bg-steel-mid/60 border border-steel-light/10'
            }`}
          >
            All Articles
          </motion.button>

          {categories.map((cat, idx) => {
            const colors = categoryColors[cat] || { bg: 'bg-steel-mid/50', text: 'text-steel-light/80', border: 'border-steel-light/20' };
            return (
              <motion.button
                key={cat}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * idx, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-lg font-medium transition-all text-sm flex items-center gap-2 border ${
                  selectedCategory === cat
                    ? `${colors.bg} ${colors.text} ${colors.border} bg-opacity-30 border-opacity-100`
                    : 'bg-steel-mid/40 text-steel-light/80 hover:bg-steel-mid/60 border-steel-light/10'
                }`}
              >
                {categoryIcons[cat]}
                {cat}
              </motion.button>
            );
          })}
        </div>
      </motion.section>

      {/* Posts Grid */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-8 pb-24 z-10">
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center py-32"
          >
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 bg-linear-to-r from-primary to-primary/50 rounded-full blur-lg opacity-50 animate-pulse" />
              <div className="absolute inset-2 border-2 border-transparent border-t-primary border-r-primary rounded-full animate-spin" />
            </div>
          </motion.div>
        ) : filteredPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-32"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-steel-mid/30 mb-6">
              <Search size={32} className="text-steel-light/40" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
            <p className="text-steel-light/60">Try adjusting your search or filters</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
              >
                <Link href={`/${locale}/blog/${post.slug}`}>
                  <motion.article
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group relative h-full bg-steel-mid/40 backdrop-blur-sm rounded-xl overflow-hidden border border-steel-light/10 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 cursor-pointer flex flex-col"
                  >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-primary/0 transition-all duration-500 pointer-events-none" />

                    {/* Content */}
                    <div className="relative p-6 flex flex-col h-full z-10">
                      {/* Category Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border ${
                            categoryColors[post.category]?.bg || 'bg-steel-mid/50'
                          } ${categoryColors[post.category]?.text || 'text-steel-light/80'} ${
                            categoryColors[post.category]?.border || 'border-steel-light/20'
                          }`}
                        >
                          {categoryIcons[post.category]}
                          <span>{post.category}</span>
                        </motion.div>
                        <span className="text-xs text-steel-light/50 font-medium">
                          {new Date(post.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-steel-light/70 text-sm leading-relaxed line-clamp-3 flex-grow mb-4">
                        {post.excerpt}
                      </p>

                      {/* Read More Link */}
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                      >
                        <span>Read More</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </div>
                  </motion.article>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      {/* CTA Section */}
      {filteredPosts.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 mb-12 z-10"
        >
          <div className="relative bg-linear-to-r from-steel-mid/50 to-steel-mid/30 backdrop-blur-xl rounded-2xl border border-primary/20 p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                  Need Expert Help?
                </h3>
                <p className="text-steel-light/80 text-base">
                  Contact our technical team for professional solutions and support.
                </p>
              </div>
              <motion.a
                href="tel:+971554762284"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-linear-to-r from-primary to-primary/90 text-steel-dark font-bold rounded-lg shadow-lg shadow-primary/40 hover:shadow-primary/60 transition-all whitespace-nowrap"
              >
                Call Now
              </motion.a>
            </div>
          </div>
        </motion.section>
      )}
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ArrowRight, BookOpen, Zap, Wrench, Battery } from 'lucide-react';
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
  'News': <Zap size={16} />,
  'ECM Tips': <Wrench size={16} />,
  'Hybrid Battery': <Battery size={16} />,
  'Maintenance': <Wrench size={16} />,
};

const categoryColors: Record<string, string> = {
  'News': 'from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-300',
  'ECM Tips': 'from-amber-500/20 to-amber-600/10 border-amber-500/30 text-amber-300',
  'Hybrid Battery': 'from-green-500/20 to-green-600/10 border-green-500/30 text-green-300',
  'Maintenance': 'from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-300',
};

export default function BlogPageEnhanced() {
  const params = useParams();
  const locale = params.locale as string;
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-steel-dark overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/2 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-red/2 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Section - Premium Luxury */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-32 pb-24 px-4 md:px-8"
      >
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-8 text-steel-light/60 text-sm"
          >
            <span>Knowledge</span>
            <span className="text-primary/40">•</span>
            <span className="text-primary">Technical Hub</span>
          </motion.div>

          {/* Main heading with premium typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-8"
          >
            <div className="flex items-baseline gap-4 mb-4">
              <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight">
                Technical
              </h1>
              <div className="h-1 w-16 bg-linear-to-r from-primary to-primary/50 rounded-full" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent tracking-tight">
              Knowledge Hub
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-steel-light/80 leading-relaxed max-w-3xl font-light tracking-wide"
          >
            Expert insights on ECM repair, hybrid battery services, car programming, and automotive maintenance. Stay informed with industry-leading technical knowledge.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex gap-8 mt-12 flex-wrap"
          >
            {[
              { label: 'Articles', value: filteredPosts.length },
              { label: 'Categories', value: categories.length },
              { label: 'Updated', value: 'Weekly' },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl font-bold text-primary tracking-tight">{stat.value}</span>
                <span className="text-sm text-steel-light/60 tracking-wide uppercase">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Search & Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative max-w-6xl mx-auto px-4 md:px-8 mb-20"
      >
        {/* Premium search bar with glassmorphism */}
        <div className="mb-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-all duration-500" />
            <div className="relative flex items-center bg-steel-mid/30 backdrop-blur-xl border border-steel-light/10 rounded-2xl hover:border-steel-light/20 transition-all duration-300 group-focus-within:border-primary/40 group-focus-within:bg-steel-mid/50">
              <Search className="absolute left-6 text-steel-light/40 group-focus-within:text-primary transition-colors duration-300" size={22} />
              <input
                type="text"
                placeholder="Search articles, topics, solutions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-16 pr-6 py-5 bg-transparent text-white text-lg focus:outline-none placeholder-steel-light/30 tracking-wide"
              />
            </div>
          </div>
        </div>

        {/* Category filters with premium styling */}
        <div className="flex flex-wrap gap-3 items-center">
          <span className="text-steel-light/60 text-sm font-semibold tracking-wide uppercase">Filter:</span>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory('')}
            className={`px-6 py-2.5 rounded-xl font-semibold transition-all tracking-wide text-sm ${
              selectedCategory === ''
                ? 'bg-gradient-to-r from-primary to-primary/90 text-steel-dark shadow-lg shadow-primary/40'
                : 'bg-steel-mid/40 text-steel-light/80 hover:bg-steel-mid/60 border border-steel-light/10 hover:border-steel-light/20'
            }`}
          >
            All Articles
          </motion.button>

          {categories.map((cat, idx) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * idx, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-xl font-semibold transition-all tracking-wide text-sm flex items-center gap-2 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-primary to-primary/90 text-steel-dark shadow-lg shadow-primary/40'
                  : 'bg-steel-mid/40 text-steel-light/80 hover:bg-steel-mid/60 border border-steel-light/10 hover:border-steel-light/20'
              }`}
            >
              {categoryIcons[cat]}
              {cat}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Posts Grid - Premium Cards */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-24">
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center py-32"
          >
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 rounded-full blur-lg opacity-50 animate-pulse" />
              <div className="absolute inset-2 border-2 border-transparent border-t-primary border-r-primary rounded-full animate-spin" />
            </div>
          </motion.div>
        ) : filteredPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-32"
          >
            <BookOpen size={56} className="mx-auto text-steel-light/20 mb-6" />
            <p className="text-steel-light/60 text-lg tracking-wide">No articles found. Try adjusting your filters.</p>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max"
          >
            {filteredPosts.map((post, idx) => (
              <motion.div key={post.id} variants={itemVariants}>
                <Link href={`/${locale}/blog/${post.slug}`}>
                  <motion.div
                    whileHover={{ y: -12, transition: { duration: 0.3 } }}
                    className="group relative min-h-96 bg-gradient-to-br from-steel-mid/80 via-steel-mid/70 to-steel-dark/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-steel-light/20 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer"
                  >
                    {/* Premium glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/15 group-hover:via-primary/5 group-hover:to-primary/0 transition-all duration-500 rounded-2xl" />

                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl" />

                    <div className="relative p-8 h-full flex flex-col z-10">
                      {/* Category Badge with icon */}
                      <div className="flex items-center justify-between mb-6">
                        <motion.div
                          whileHover={{ scale: 1.08 }}
                          className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg border bg-gradient-to-r ${categoryColors[post.category] || 'from-steel-mid/50 to-steel-dark/50 border-steel-light/20 text-steel-light/80'}`}
                        >
                          {categoryIcons[post.category]}
                          {post.category}
                        </motion.div>
                        <span className="text-xs text-steel-light/50 font-medium tracking-wide">
                          {new Date(post.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                      </div>

                      {/* Title with premium typography */}
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2 tracking-tight leading-tight">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-steel-light/70 text-sm leading-relaxed line-clamp-3 grow mb-6 font-light tracking-wide">
                        {post.excerpt}
                      </p>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 mb-6" />

                      {/* Read More Link with premium styling */}
                      <motion.div
                        whileHover={{ x: 6 }}
                        className="flex items-center gap-3 text-primary font-semibold text-sm group-hover:gap-4 transition-all"
                      >
                        <span>Read Article</span>
                        <motion.div
                          whileHover={{ x: 3 }}
                          className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors"
                        >
                          <ArrowRight size={16} />
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      {filteredPosts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto px-4 md:px-8 py-20 mb-12"
        >
          <div className="relative bg-gradient-to-r from-steel-mid/40 via-steel-mid/20 to-steel-dark/40 backdrop-blur-xl rounded-2xl border border-primary/20 p-12 overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                  Need Expert Assistance?
                </h3>
                <p className="text-steel-light/80 text-lg font-light tracking-wide">
                  Contact our technical team for personalized solutions and support.
                </p>
              </div>
              <motion.a
                href="tel:+971554762284"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-steel-dark font-bold rounded-xl shadow-lg shadow-primary/40 hover:shadow-primary/60 transition-all whitespace-nowrap tracking-wide"
              >
                Call Now
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

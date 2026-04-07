'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ArrowRight, BookOpen } from 'lucide-react';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-steel-dark">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-b from-steel-mid via-steel-dark to-steel-dark py-20 px-4"
      >
        {/* Glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full"
          >
            <BookOpen size={16} className="text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide">Expert Insights</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Technical Knowledge Hub
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-steel-light/90 leading-relaxed max-w-2xl mx-auto"
          >
            Expert insights on ECM repair, hybrid battery services, car programming, and automotive maintenance
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition duration-300" />
            <div className="relative flex items-center">
              <Search className="absolute left-4 text-steel-light/60 group-focus-within:text-primary transition" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-steel-mid/50 backdrop-blur-sm text-white border border-steel-light/20 rounded-xl focus:outline-none focus:border-primary/50 focus:bg-steel-mid/80 transition-all placeholder-steel-light/50"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory('')}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all tracking-wide ${
                selectedCategory === ''
                  ? 'bg-gradient-to-r from-primary to-primary/90 text-steel-dark shadow-lg shadow-primary/30'
                  : 'bg-steel-mid/50 text-steel-light/80 hover:bg-steel-mid/70 border border-steel-light/10'
              }`}
            >
              All Articles
            </motion.button>
            {categories.map((cat, idx) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * idx }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all tracking-wide ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-primary to-primary/90 text-steel-dark shadow-lg shadow-primary/30'
                    : 'bg-steel-mid/50 text-steel-light/80 hover:bg-steel-mid/70 border border-steel-light/10'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Posts Grid */}
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-steel-light/60 text-center py-20"
          >
            <div className="inline-block">
              <div className="w-12 h-12 border-4 border-steel-mid border-t-primary rounded-full animate-spin" />
            </div>
          </motion.div>
        ) : filteredPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <BookOpen size={48} className="mx-auto text-steel-light/30 mb-4" />
            <p className="text-steel-light/60 text-lg">No articles found. Try adjusting your filters.</p>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <Link href={`/blog/${post.slug}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group relative h-full bg-gradient-to-br from-steel-mid to-steel-dark rounded-xl overflow-hidden border border-primary/40 hover:border-primary/80 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 cursor-pointer"
                  >
                    {/* Glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300 rounded-xl" />

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-xl" />

                    <div className="relative p-6 h-full flex flex-col z-10">
                      {/* Category Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className="text-xs font-bold text-steel-dark uppercase tracking-widest bg-primary px-3 py-1 rounded-full border border-primary/50"
                        >
                          {post.category}
                        </motion.span>
                        <span className="text-xs text-steel-light/70 font-medium">
                          {new Date(post.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 tracking-tight">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-steel-light/90 text-sm leading-relaxed line-clamp-3 flex-grow mb-4">
                        {post.excerpt}
                      </p>

                      {/* Read More Link */}
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                      >
                        Read More
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

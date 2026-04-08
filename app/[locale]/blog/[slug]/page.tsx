'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';
import { useParams } from 'next/navigation';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  author: string;
  createdAt: string;
}

export default function BlogPostPage() {
  const params = useParams();
  const locale = params.locale as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [params.slug]);

  const fetchPost = async () => {
    try {
      const res = await fetch(`/api/blog/${params.slug}`);
      if (res.ok) {
        const data = await res.json();
        setPost(data);
      }
    } catch (error) {
      console.error('Failed to fetch post:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-steel-dark flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block"
        >
          <div className="w-12 h-12 border-4 border-steel-mid border-t-primary rounded-full animate-spin" />
        </motion.div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-steel-dark flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">Post not found</h1>
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
        </motion.div>
      </div>
    );
  }

  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-steel-dark">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 pt-8"
      >
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Articles
        </Link>
      </motion.div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full"
          >
            <Tag size={14} className="text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-widest">{post.category}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
          >
            {post.title}
          </motion.h1>

          {/* Excerpt */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-steel-light/90 leading-relaxed mb-8"
          >
            {post.excerpt}
          </motion.p>

          {/* Meta Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 pt-8 border-t border-steel-light/10"
          >
            <div className="flex items-center gap-2 text-steel-light/80">
              <Calendar size={16} className="text-primary" />
              <span className="text-sm font-medium">{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2 text-steel-light/80">
              <User size={16} className="text-primary" />
              <span className="text-sm font-medium">By {post.author}</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-auto flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    text: post.excerpt,
                    url: window.location.href,
                  });
                }
              }}
            >
              <Share2 size={16} />
              <span className="text-sm font-medium">Share</span>
            </motion.button>
          </motion.div>
        </motion.header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="prose prose-invert max-w-none mb-12"
        >
          <div className="text-white/90 whitespace-pre-wrap leading-relaxed text-lg space-y-6">
            {post.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-steel-light/90">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-12 border-t border-steel-light/10"
        >
          <div className="bg-linear-to-r from-steel-mid/50 to-steel-mid/30 backdrop-blur-sm rounded-xl p-8 border border-steel-light/10">
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Need Expert Help?</h3>
            <p className="text-steel-light/80 mb-6 leading-relaxed">
              Contact our technical team for professional ECM repair, hybrid battery services, and car programming solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+971554762284"
                className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-primary to-primary/90 text-steel-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                Call Now
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/971554762284"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-steel-mid/50 text-white font-semibold rounded-lg border border-steel-light/20 hover:border-primary/50 hover:bg-steel-mid/70 transition-all"
              >
                WhatsApp
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Back to Blog */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 pt-8"
        >
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-primary to-primary/90 text-steel-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>
        </motion.div>
      </article>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, X, Eye, Code } from 'lucide-react';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  published: boolean;
}

export default function BlogEditPage() {
  const router = useRouter();
  const params = useParams();
  const isNew = params.id === 'new';

  const [post, setPost] = useState<BlogPost>({
    id: '',
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    category: 'News',
    published: false,
  });
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isNew) {
      fetchPost();
    }
  }, [isNew]);

  const fetchPost = async () => {
    try {
      const res = await fetch(`/api/admin/blog/${params.id}`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setPost(data);
    } catch (error) {
      console.error('Failed to fetch post:', error);
      setError('Failed to load post');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!post.title.trim()) {
      setError('Title is required');
      return;
    }
    if (!post.slug.trim()) {
      setError('Slug is required');
      return;
    }

    setSaving(true);
    setError('');
    try {
      const method = isNew ? 'POST' : 'PUT';
      const url = isNew ? '/api/admin/blog' : `/api/admin/blog/${params.id}`;

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
      });

      if (!res.ok) throw new Error('Failed to save');
      router.push('/admin/blog');
    } catch (error) {
      console.error('Failed to save post:', error);
      setError('Failed to save post. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border-2 border-primary/30 border-t-primary animate-spin mx-auto mb-4" />
          <p className="text-steel-light">Loading post...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <Link
            href="/admin/blog"
            className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-steel-mid transition-colors text-steel-light hover:text-white"
          >
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              {isNew ? 'Create New Post' : 'Edit Post'}
            </h1>
            <p className="text-steel-light mt-1">
              {isNew ? 'Write and publish your content' : 'Update your blog post'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setPreviewMode(!previewMode)}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all ${
              previewMode
                ? 'bg-primary/20 border-primary text-primary'
                : 'bg-steel-mid border-primary/20 text-steel-light hover:border-primary/50'
            }`}
          >
            {previewMode ? <Code size={18} /> : <Eye size={18} />}
            {previewMode ? 'Edit' : 'Preview'}
          </button>
        </div>
      </motion.div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-between"
        >
          <span>{error}</span>
          <button onClick={() => setError('')} className="text-red-400 hover:text-red-300">
            <X size={18} />
          </button>
        </motion.div>
      )}

      {previewMode ? (
        // Preview Mode
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-xl border border-primary/10 bg-steel-mid/50 backdrop-blur-sm p-8 prose prose-invert max-w-none"
        >
          <div className="mb-8 pb-8 border-b border-primary/10">
            <h1 className="text-4xl font-bold text-white mb-2">{post.title}</h1>
            <p className="text-steel-light">{post.excerpt}</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-steel-light">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {post.category}
              </span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
          </div>
          <div className="text-white whitespace-pre-wrap">{post.content}</div>
        </motion.div>
      ) : (
        // Edit Mode
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Post Title <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              placeholder="Enter post title"
              className="w-full px-4 py-3 bg-steel-mid border border-primary/20 rounded-lg text-white placeholder-steel-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              URL Slug <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={post.slug}
              onChange={(e) => setPost({ ...post, slug: e.target.value })}
              placeholder="post-url-slug"
              className="w-full px-4 py-3 bg-steel-mid border border-primary/20 rounded-lg text-white placeholder-steel-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all font-mono text-sm"
            />
            <p className="text-xs text-steel-light mt-1">Used in the URL: /blog/{post.slug}</p>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">Excerpt</label>
            <textarea
              value={post.excerpt}
              onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
              placeholder="Brief summary of your post"
              rows={2}
              className="w-full px-4 py-3 bg-steel-mid border border-primary/20 rounded-lg text-white placeholder-steel-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all resize-none"
            />
          </div>

          {/* Category & Status */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Category</label>
              <select
                value={post.category}
                onChange={(e) => setPost({ ...post, category: e.target.value })}
                className="w-full px-4 py-3 bg-steel-mid border border-primary/20 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all cursor-pointer"
              >
                <option>News</option>
                <option>ECM Tips</option>
                <option>Hybrid Battery</option>
                <option>Maintenance</option>
              </select>
            </div>

            <div className="flex items-end">
              <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-steel-dark/50 transition-colors w-full">
                <input
                  type="checkbox"
                  checked={post.published}
                  onChange={(e) => setPost({ ...post, published: e.target.checked })}
                  className="w-5 h-5 rounded border-primary/30 bg-steel-mid cursor-pointer accent-primary"
                />
                <span className="font-semibold text-white">Publish immediately</span>
              </label>
            </div>
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Content <span className="text-red-400">*</span>
            </label>
            <textarea
              value={post.content}
              onChange={(e) => setPost({ ...post, content: e.target.value })}
              placeholder="Write your post content here... (Markdown supported)"
              rows={16}
              className="w-full px-4 py-3 bg-steel-mid border border-primary/20 rounded-lg text-white placeholder-steel-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all resize-none font-mono text-sm"
            />
            <p className="text-xs text-steel-light mt-2">
              💡 Tip: Markdown formatting is supported (bold, italic, links, code blocks, etc.)
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-primary/10">
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-steel-dark font-bold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save size={20} />
              {saving ? 'Saving...' : 'Save Post'}
            </button>
            <Link
              href="/admin/blog"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-steel-mid border border-primary/20 text-white font-semibold rounded-lg hover:border-primary/50 transition-all"
            >
              Cancel
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}

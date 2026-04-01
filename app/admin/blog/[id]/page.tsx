'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
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

  useEffect(() => {
    if (!isNew) {
      fetchPost();
    }
  }, [isNew]);

  const fetchPost = async () => {
    try {
      const res = await fetch(`/api/admin/blog/${params.id}`);
      const data = await res.json();
      setPost(data);
    } catch (error) {
      console.error('Failed to fetch post:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const method = isNew ? 'POST' : 'PUT';
      const url = isNew ? '/api/admin/blog' : `/api/admin/blog/${params.id}`;

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
      });

      if (res.ok) {
        router.push('/admin/blog');
      }
    } catch (error) {
      console.error('Failed to save post:', error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-steel-dark p-8 text-steel-light">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-steel-dark p-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/admin/blog"
          className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </Link>

        <h1 className="text-3xl font-bold text-white mb-8">
          {isNew ? 'New Post' : 'Edit Post'}
        </h1>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white mb-2">Title</label>
            <input
              type="text"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              className="w-full px-4 py-2 bg-steel-mid text-white border border-steel-light/20 rounded-lg focus:outline-none focus:border-primary"
              placeholder="Post title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Slug</label>
            <input
              type="text"
              value={post.slug}
              onChange={(e) => setPost({ ...post, slug: e.target.value })}
              className="w-full px-4 py-2 bg-steel-mid text-white border border-steel-light/20 rounded-lg focus:outline-none focus:border-primary"
              placeholder="post-slug"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Excerpt</label>
            <textarea
              value={post.excerpt}
              onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
              className="w-full px-4 py-2 bg-steel-mid text-white border border-steel-light/20 rounded-lg focus:outline-none focus:border-primary"
              placeholder="Short excerpt"
              rows={2}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Category</label>
              <select
                value={post.category}
                onChange={(e) => setPost({ ...post, category: e.target.value })}
                className="w-full px-4 py-2 bg-steel-mid text-white border border-steel-light/20 rounded-lg focus:outline-none focus:border-primary"
              >
                <option>News</option>
                <option>ECM Tips</option>
                <option>Hybrid Battery</option>
                <option>Maintenance</option>
              </select>
            </div>

            <div className="flex items-end">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={post.published}
                  onChange={(e) => setPost({ ...post, published: e.target.checked })}
                  className="w-4 h-4"
                />
                <span className="text-white">Published</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Content</label>
            <textarea
              value={post.content}
              onChange={(e) => setPost({ ...post, content: e.target.value })}
              className="w-full px-4 py-2 bg-steel-mid text-white border border-steel-light/20 rounded-lg focus:outline-none focus:border-primary font-mono text-sm"
              placeholder="Post content (markdown supported)"
              rows={12}
            />
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-6 py-2 bg-primary text-steel-dark font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save Post'}
            </button>
            <Link
              href="/admin/blog"
              className="px-6 py-2 bg-steel-mid text-white font-semibold rounded-lg hover:bg-steel-mid/80 transition-colors"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

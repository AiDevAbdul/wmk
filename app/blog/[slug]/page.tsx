'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
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
        <div className="text-steel-light">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-steel-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Post not found</h1>
          <Link href="/blog" className="text-primary hover:text-primary/80">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-steel-dark">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link
          href="/blog"
          className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                {post.category}
              </span>
              <span className="text-steel-light text-sm">
                {new Date(post.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
            <p className="text-xl text-steel-light">{post.excerpt}</p>
            <div className="mt-6 pt-6 border-t border-steel-light/10">
              <p className="text-steel-light text-sm">By {post.author}</p>
            </div>
          </header>

          <div className="prose prose-invert max-w-none">
            <div className="text-white whitespace-pre-wrap leading-relaxed">
              {post.content}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-steel-light/10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-steel-dark font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

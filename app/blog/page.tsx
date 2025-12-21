import { getAllPosts } from '@/lib/api';
import BlogIndex from '@/components/blog-index';

export const metadata = {
  title: 'Articles | Faizaaan Sidiq',
  description: 'All blogs.',
};

export default async function BlogPage() {
  const postsData = await getAllPosts();
  const posts = Array.isArray(postsData) ? postsData : [];

  return (
    <main className="min-h-screen bg-blue-950 font-sans">
      {/* Header */}
      <div className="bg-blue-950 py-20">
        <div className="container mx-auto px- text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-white">
            All Blogs
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            A complete archive of blogs.
          </p>
        </div>
      </div>

      <BlogIndex posts={posts} />
    </main>
  );
}


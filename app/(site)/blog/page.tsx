import { getAllPosts } from '@/lib/api';
import BlogIndex from '@/components/blog-index';

export const metadata = {
    title: 'Articles | The Agora',
    description: 'All philosophical essays and musings.',
};

export default async function BlogPage() {
    const postsData = await getAllPosts();
    const posts = Array.isArray(postsData) ? postsData : [];

    return (
        <main className="min-h-screen bg-white dark:bg-neutral-950 font-sans">
            <div className="bg-neutral-50 dark:bg-neutral-900 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-neutral-900 dark:text-neutral-100">All Essays</h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        A complete archive of our explorations into ethics, metaphysics, and the human condition.
                    </p>
                </div>
            </div>

            <BlogIndex posts={posts} />
        </main>
    );
}

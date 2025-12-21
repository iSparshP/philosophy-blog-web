import { getPostBySlug } from '@/lib/api';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ShareButtons from '@/components/share-buttons';
import Comments from '@/components/comments';

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = await getPostBySlug(params.slug);

    if (!post) notFound();

    return (
        <article className="min-h-screen bg-blue-50 font-sans">
            <nav className="border-b border-blue-100 sticky top-0 bg-white/80 backdrop-blur-md z-10">
                <div className="container mx-auto px-4 max-w-3xl h-16 flex items-center">
                    <Link href="/" className="text-sm font-medium text-slate-500 hover:text-blue-900 transition-colors flex items-center gap-2">
                        ← Back to Home
                    </Link>
                </div>
            </nav>

            <div className="container mx-auto px-4 py-16 max-w-3xl">
                <header className="mb-12">
                    <div className="flex gap-2 mb-6">
                        {post.tags?.map(tag => (
                            <span key={tag} className="text-xs font-semibold tracking-wider uppercase text-blue-600">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif leading-tight text-blue-900">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 text-slate-500 text-lg">
                        <div className="flex flex-col">
                            <span className="font-semibold text-blue-900">{post.author}</span>
                            <span className="text-sm">{new Date(post.publishDate).toLocaleDateString('en-US', { dateStyle: 'full' })}</span>
                        </div>
                    </div>
                </header>

                {post.image && (
                    <figure className="mb-12 rounded-xl overflow-hidden shadow-lg">
                        <img src={post.image} alt={post.title} className="w-full h-auto object-cover max-h-[500px]" />
                    </figure>
                )}

                <div className="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:leading-relaxed prose-a:text-blue-600 hover:prose-a:text-blue-500">
                    <ReactMarkdown>{post.body}</ReactMarkdown>
                </div>

                <ShareButtons title={post.title} slug={post.slug} />
                <Comments />
            </div>
        </article>
    );
}

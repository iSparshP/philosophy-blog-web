'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Post } from '@/lib/api';

interface BlogIndexProps {
    posts: Post[];
}

export default function BlogIndex({ posts }: BlogIndexProps) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = posts.filter((post) => {
        const query = searchQuery.toLowerCase();
        return (
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query) ||
            post.tags?.some((tag) => tag.toLowerCase().includes(query))
        );
    });

    return (
        <div className="container mx-auto px-4 py-16 max-w-6xl">
            {/* Search Bar */}
            <div className="flex justify-center mb-12">
                <div className="relative w-full max-w-xl">
                    <input
                        type="text"
                        placeholder="Search essays by title, tag, or topic..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-6 py-4 pl-12 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                    <svg
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
            </div>

            {/* Results Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <article
                            key={post.slug}
                            className="group cursor-pointer flex flex-col h-full bg-white dark:bg-neutral-950 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-800"
                        >
                            {post.image && (
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            )}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex gap-2 mb-3">
                                    {post.tags?.slice(0, 2).map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-bold px-2 py-1 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 uppercase tracking-wider"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold mb-3 font-serif text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 transition-colors">
                                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4 flex-grow">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center text-xs text-neutral-500 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                                    <span className="font-semibold text-neutral-900 dark:text-neutral-200">
                                        {post.author}
                                    </span>
                                    <span className="mx-2">•</span>
                                    <span>
                                        {new Date(post.publishDate).toLocaleDateString('en-US', {
                                            dateStyle: 'medium',
                                        })}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))
                ) : (
                    <div className="col-span-3 text-center py-20">
                        <p className="text-neutral-500 text-lg">No articles found matching "{searchQuery}".</p>
                    </div>
                )}
            </div>
        </div>
    );
}

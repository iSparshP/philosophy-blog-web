import { createReader } from '@keystatic/core/reader';
import config from '../keystatic.config';
import fs from 'fs';
import path from 'path';

const reader = createReader(process.cwd(), config);

export interface Post {
    title: string;
    excerpt: string;
    author: string;
    tags: readonly string[];
    publishDate: string;
    image?: string;
    slug: string;
    body: string;
}

export async function getAllPosts(): Promise<Post[]> {
    const posts = await reader.collections.blog.all();
    return posts.map(post => ({
        slug: post.slug,
        title: post.entry.title,
        excerpt: post.entry.excerpt,
        author: post.entry.author,
        tags: post.entry.tags,
        publishDate: post.entry.publishDate || new Date().toISOString(),
        image: post.entry.image || undefined,
        body: '',
    }));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    const post = await reader.collections.blog.read(slug);
    if (!post) return null;

    // Read raw file to get body string for React Markdown
    const contentDir = path.join(process.cwd(), 'content/blog');
    let rawContent = '';

    // Check possible extensions
    const extensions = ['.md', '.mdx'];
    for (const ext of extensions) {
        const filePath = path.join(contentDir, `${slug}${ext}`);
        if (fs.existsSync(filePath)) {
            rawContent = fs.readFileSync(filePath, 'utf-8');
            break;
        }
    }

    // Strip frontmatter
    const body = rawContent.replace(/^---[\s\S]+?---\s*/, '');

    return {
        slug,
        title: post.title,
        excerpt: post.excerpt,
        author: post.author,
        tags: post.tags,
        publishDate: post.publishDate || new Date().toISOString(),
        image: post.image || undefined,
        body: body || ''
    };
}

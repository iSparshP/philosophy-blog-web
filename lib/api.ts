export interface Post {
    title: string;
    excerpt: string;
    author: string;
    tags: string[];
    publishDate: string;
    image?: string;
    slug: string;
    body: string;
}

const API_URL = process.env.CMS_URL || 'http://localhost:4321/api';

export async function getAllPosts(): Promise<Post[]> {
    try {
        const res = await fetch(`${API_URL}/posts`, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch posts');
        return res.json();
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    try {
        const res = await fetch(`${API_URL}/posts/${slug}`, { cache: 'no-store' });
        if (!res.ok) return null;
        return res.json();
    } catch (error) {
        console.error(`Error fetching post ${slug}:`, error);
        return null;
    }
}

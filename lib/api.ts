import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

const postsDirectory = path.join(process.cwd(), '_posts');

export async function getAllPosts(): Promise<Post[]> {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get slug
        const slug = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const { data, content } = matter(fileContents);

        return {
            slug,
            body: content,
            ...(data as any),
        } as Post;
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.publishDate < b.publishDate) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`);
        
        if (!fs.existsSync(fullPath)) {
            return null;
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            body: content,
            ...(data as any),
        } as Post;
    } catch (error) {
        console.error(`Error fetching post ${slug}:`, error);
        return null;
    }
}

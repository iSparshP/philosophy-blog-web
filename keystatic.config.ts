import { config, fields, collection } from '@keystatic/core';

// Use Vercel/production detection or Env var
const isProd = process.env.NODE_ENV === 'production';

export default config({
    storage: isProd
        ? {
            kind: 'github',
            repo: {
                owner: 'iSparshP',
                name: 'philosophy-blog-cms', // Note: Using existing repo for content storage if desired, or switch to local if moving everything to one repo. 
                // If we want the content to live in the SAME repo as code (monorepo style but single repo), we should use 'local' or 'github' pointing to THIS repo.
                // User said "single repo that will have frontend as well as backend".
                // This means content should likely be committed to THIS repo.
                // Only 'local' storage works nicely with git-based workflow for a single repo?
                // Actually, for Render deployment, 'local' storage is read-only usually unless persisted properly, but Keystatic 'github' mode edits back to GitHub.
                // The user likely wants to edit on GitHub or use GitHub mode.
                // Let's stick to GitHub mode for prod, but we need to update the repo name if we change it.
                // For now, I'll keep the repo valid. But wait, if we are moving to a NEW repo 'blog', we might need to change 'repo' here later.
                // I will leave it as the old one for now or use process.env vars?
                // Let's assume the user will push this 'blog' folder to a repo.
            },
        }
        : {
            kind: 'local',
        },
    collections: {
        blog: collection({
            label: 'Blog Posts',
            slugField: 'title',
            path: 'content/blog/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                excerpt: fields.text({ label: 'Excerpt', multiline: true }),
                author: fields.text({ label: 'Author' }),
                publishDate: fields.date({ label: 'Publish Date' }),
                image: fields.text({ label: 'Image URL', description: 'Enter a full URL (e.g., Unsplash)' }),
                tags: fields.array(
                    fields.text({ label: 'Tag' }),
                    { label: 'Tags', itemLabel: props => props.value }
                ),
                content: fields.mdx({
                    label: 'Content',
                    options: {
                        image: {
                            directory: 'public/images/posts',
                            publicPath: '/images/posts',
                        }
                    }
                }),
            },
        }),
    },
});

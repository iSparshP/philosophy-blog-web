'use client';

import Giscus from '@giscus/react';

export default function Comments() {
  return (
    <div className="mt-16 pt-12 border-t border-blue-200">
      <h2 className="text-2xl font-bold font-serif mb-8 text-blue-900">Discussion</h2>
      <Giscus
        id="comments"
        repo="[YOUR_GITHUB_USERNAME]/[YOUR_REPO_NAME]"
        repoId="[YOUR_REPO_ID]"
        category="Announcements"
        categoryId="[YOUR_CATEGORY_ID]"
        mapping="pathname"
        term="Welcome to The Agora Discussion!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}

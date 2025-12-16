import { getAllPosts } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {
  const postsData = await getAllPosts();
  console.log("Posts fetched raw:", postsData);
  const posts = Array.isArray(postsData) ? postsData : [];


  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 font-sans">
      {/* Hero Section: Understanding Current World Order */}
      <section className="bg-neutral-900 text-white dark:bg-neutral-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
          <span className="inline-block py-1 px-3 border border-neutral-600 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 text-neutral-400">Featured Series</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-serif leading-tight">
            Understanding the Current <br /> <span className="text-blue-500">World Order</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            We live in an age of rapid fragmentation. Our mission is to analyze the metaphysical and ethical underpinnings of our shifting geopolitical landscape.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-neutral-900 px-8 py-3 rounded-md font-semibold hover:bg-neutral-200 transition-colors">Start Reading</button>
            <button className="border border-neutral-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-neutral-800 transition-colors">About Mission</button>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold font-serif text-neutral-900 dark:text-neutral-100 mb-2">Editor's Picks</h2>
              <p className="text-neutral-600 dark:text-neutral-400">Curated essays on contemporary thought.</p>
            </div>
            <Link href="/blog" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">View All →</Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Use the first post as featured if available, or placeholder */}
            {posts.length > 0 ? (
              posts.map(post => (
                <article key={post.slug} className="group cursor-pointer flex flex-col h-full bg-white dark:bg-neutral-950 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-800">
                  {post.image && (
                    <div className="h-48 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex gap-2 mb-3">
                      {post.tags?.slice(0, 2).map(tag => (
                        <span key={tag} className="text-xs font-bold px-2 py-1 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-serif text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.slug}`} className="hover:underline">{post.title}</Link>
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-neutral-500 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                      <span className="font-semibold text-neutral-900 dark:text-neutral-200">{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(post.publishDate).toLocaleDateString('en-US', { dateStyle: 'medium' })}</span>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-3 text-center py-20">
                <p className="text-neutral-500">No content available to display.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-neutral-900 dark:text-neutral-100">Why Philosophy Matters Now</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
            In a world driven by algorithms and instantaneous reaction, the slow, deliberate work of philosophy is more urgent than ever. We strive to bring clarity to chaos, questioning the assumptions that govern our lives.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left mt-16">
            <div className="p-6 rounded-lg bg-neutral-50 dark:bg-neutral-900">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
              </div>
              <h3 className="font-bold mb-2">Critical Inquiry</h3>
              <p className="text-sm text-neutral-500">Questioning foundations rather than accepting surface-level truths.</p>
            </div>
            <div className="p-6 rounded-lg bg-neutral-50 dark:bg-neutral-900">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              </div>
              <h3 className="font-bold mb-2">Historical Context</h3>
              <p className="text-sm text-neutral-500">Connecting modern problems to centuries of accumulated wisdom.</p>
            </div>
            <div className="p-6 rounded-lg bg-neutral-50 dark:bg-neutral-900">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="font-bold mb-2">Ethical Living</h3>
              <p className="text-sm text-neutral-500">Applying abstract principles to the concrete decisions of daily life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-neutral-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold font-serif mb-4">Join the Dialectic</h2>
          <p className="text-neutral-400 mb-8">Get the latest essays and philosophical prompts delivered to your inbox every Sunday.</p>
          <form className="flex flex-col md:flex-row gap-4">
            <input type="email" placeholder="Enter your email address" className="flex-grow px-6 py-4 rounded-md bg-white text-neutral-900 outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="submit" className="bg-blue-600 text-white px-8 py-4 rounded-md font-bold hover:bg-blue-700 transition-colors">Subscribe</button>
          </form>
        </div>
      </section>
    </main>
  );
}

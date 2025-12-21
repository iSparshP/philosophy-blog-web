import { getAllPosts } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {
  const postsData = await getAllPosts();
  const posts = Array.isArray(postsData) ? postsData : [];


  return (
   <main className="min-h-screen bg-blue-950 font-sans">
  {/* Hero Section: Understanding Current World Order */}
  <section className="bg-blue-950 text-white py-24 relative overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

    <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 font-serif leading-tight text-white">
        Understanding the Current <br />
        <span className="text-white">World Order</span>
      </h1>
          <p className="text-xl text-blue-800 max-w-2xl mx-auto mb-12 leading-relaxed">
           
          </p>
          <div className="flex gap-4 justify-center">
           <Link href="/blog">  <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">Start Reading</button> </Link>
            <Link href="/about#our-mission"><button className="bg-white text-blue-900 border border-blue-200 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors">Our Mission</button></Link>
          

          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold font-serif text-blue-900 mb-2">Editor's Picks</h2>
            
            </div>
            <Link href="/blog" className="text-blue-600 font-medium hover:underline">View All →</Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Use the first post as featured if available, or placeholder */}
            {posts.length > 0 ? (
              posts.map(post => (
                <article key={post.slug} className="group cursor-pointer flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-blue-100">
                  {post.image && (
                    <div className="h-48 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex gap-2 mb-3">
                      {post.tags?.slice(0, 2).map(tag => (
                        <span key={tag} className="text-xs font-bold px-2 py-1 rounded bg-blue-100 text-blue-700 uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-serif text-blue-900 group-hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.slug}`} className="hover:underline">{post.title}</Link>
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-slate-500 pt-4 border-t border-slate-100">
                      <span className="font-semibold text-blue-900">{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(post.publishDate).toLocaleDateString('en-US', { dateStyle: 'medium' })}</span>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-3 text-center py-20">
                <p className="text-slate-500">No content available to display.</p>
              </div>
            )}
          </div>
        </div>
      </section>

     
     

      
    </main>
  );
}

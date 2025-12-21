import React from 'react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-blue-50 font-sans py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-8 text-blue-900 text-center">
          Contact Us
        </h1>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
          <p className="text-slate-600 mb-8 text-center leading-relaxed">
            Have a question, a topic suggestion, or just want to say hello? 
            We'd love to hear from you. Fill out the form below or send us an email.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-blue-900 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-blue-50/50"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-blue-50/50"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-blue-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-blue-50/50 resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-blue-100 text-center">
            <p className="text-slate-500 text-sm">
              Or email us directly at <br />
              <a href="mailto:contact@faizaansidiq.com" className="text-blue-600 font-medium hover:underline mt-1 inline-block">
               Cricfaizaan229@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

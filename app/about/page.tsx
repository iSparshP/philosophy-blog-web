import Image from 'next/image';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-neutral-950 font-sans">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 bg-neutral-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
                    <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight">
                        Seeking Truth in a <br /> <span className="text-blue-500">Complex World</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light">
                        "The unexamined life is not worth living." — Socrates
                    </p>
                </div>
            </section>

            {/* Content Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        {/* Image Side */}
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
                                    alt="Portrait of the author"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-neutral-200 dark:border-neutral-800 rounded-2xl -z-0"></div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-2xl"></div>
                        </div>

                        {/* Text Side */}
                        <div className="space-y-8">
                            <div>
                                <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm mb-2 block">The Author</span>
                                <h2 className="text-4xl font-bold font-serif text-neutral-900 dark:text-neutral-100 mb-6">Hello, I'm Sophia.</h2>
                                <div className="prose prose-lg prose-neutral dark:prose-invert text-neutral-600 dark:text-neutral-400">
                                    <p>
                                        I am a philosopher, writer, and technologist obsessed with the intersection of ancient wisdom and modern problems.
                                    </p>
                                    <p>
                                        For the past decade, I've researched how exponential technology challenges our fundamental definitions of humanity, ethics, and consciousness. My work aims to bridge the gap between the academic ivory tower and the chaotic reality of the digital age.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-100 dark:border-neutral-800">
                                    <h3 className="font-bold text-neutral-900 dark:text-neutral-100 mb-1">Education</h3>
                                    <p className="text-sm text-neutral-500">PhD, Ethics & AI<br />Oxford University</p>
                                </div>
                                <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-100 dark:border-neutral-800">
                                    <h3 className="font-bold text-neutral-900 dark:text-neutral-100 mb-1">Focus</h3>
                                    <p className="text-sm text-neutral-500">Digital Humanism<br />Tech Policy</p>
                                </div>
                            </div>

                            <div className="pt-4">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg"
                                    alt="Signature"
                                    className="h-12 opacity-50 dark:invert"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy / Values Section */}
            <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold font-serif mb-12 text-neutral-900 dark:text-neutral-100">Core Principles</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group p-8 bg-white dark:bg-neutral-950 rounded-xl shadow-sm hover:shadow-md transition-all">
                            <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">🏛️</span>
                            <h3 className="font-bold mb-3 text-lg">Stoic Resilience</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed">Focusing only on what we can control, accepting what we cannot with grace.</p>
                        </div>
                        <div className="group p-8 bg-white dark:bg-neutral-950 rounded-xl shadow-sm hover:shadow-md transition-all">
                            <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">⚖️</span>
                            <h3 className="font-bold mb-3 text-lg">Rational Ethics</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed">Applying reason to moral dilemmas rather than relying on dogma or emotion.</p>
                        </div>
                        <div className="group p-8 bg-white dark:bg-neutral-950 rounded-xl shadow-sm hover:shadow-md transition-all">
                            <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">🔍</span>
                            <h3 className="font-bold mb-3 text-lg">Radical Curiosity</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed">Always asking "why" and never being satisfied with surface-level answers.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

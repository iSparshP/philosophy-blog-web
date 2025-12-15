import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-bold font-serif text-neutral-900 dark:text-neutral-100">The Agora</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Exploring the depths of human thought, from ancient wisdom to modern dilemmas. Join the dialectic.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">Navigation</h4>
                        <nav className="flex flex-col gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                            <Link href="/" className="hover:text-neutral-900 dark:hover:text-neutral-100">Home</Link>
                            <Link href="/blog" className="hover:text-neutral-900 dark:hover:text-neutral-100">Articles</Link>
                            <Link href="/about" className="hover:text-neutral-900 dark:hover:text-neutral-100">About</Link>
                            <Link href="/contact" className="hover:text-neutral-900 dark:hover:text-neutral-100">Contact</Link>
                        </nav>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">Topics</h4>
                        <nav className="flex flex-col gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                            <Link href="/tag/ethics" className="hover:text-neutral-900 dark:hover:text-neutral-100">Ethics</Link>
                            <Link href="/tag/metaphysics" className="hover:text-neutral-900 dark:hover:text-neutral-100">Metaphysics</Link>
                            <Link href="/tag/politics" className="hover:text-neutral-900 dark:hover:text-neutral-100">Political Philosophy</Link>
                            <Link href="/tag/aesthetics" className="hover:text-neutral-900 dark:hover:text-neutral-100">Aesthetics</Link>
                        </nav>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">Newsletter</h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            Weekly philosophical musings delivered to your inbox.
                        </p>
                        <form className="flex gap-2">
                            <input type="email" placeholder="email@example.com" className="bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded px-3 py-2 text-sm w-full" />
                            <button type="button" className="bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-4 py-2 rounded text-sm font-medium">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 border-t border-neutral-200 pt-8 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
                    <p>© {new Date().getFullYear()} The Agora. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

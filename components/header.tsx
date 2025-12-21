import Link from 'next/link';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-blue-100 bg-white/90 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold font-serif text-blue-900">Faizaan Sidiq</span>
                </Link>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="/" className="text-slate-600 hover:text-blue-600 transition-colors">
                        Home
                    </Link>
                    <Link href="/blog" className="text-slate-600 hover:text-blue-600 transition-colors">
                        Articles
                    </Link>
                    <Link href="/about" className="text-slate-600 hover:text-blue-600 transition-colors">
                        About
                    </Link>
                    <Link href="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">
                        Contact
                    </Link>
                </nav>
                <div className="md:hidden">
                    {/* Mobile menu placeholder */}
                    <span className="text-sm text-blue-900">Menu</span>
                </div>
            </div>
        </header>
    );
}

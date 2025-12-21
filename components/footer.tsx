import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t border-blue-200 bg-blue-50">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-bold font-serif text-blue-900">Faizaan Sidiq</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                           Through our blog we seek to unite different communities with the primary focus being on the Muslim - Christian alliance as we move along this historical process where truth shall prevail over all rivals..
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-900">Navigation</h4>
                        <nav className="flex flex-col gap-2 text-sm text-slate-600">
                            <Link href="/" className="hover:text-blue-600">Home</Link>
                            <Link href="/blog" className="hover:text-blue-600">Articles</Link>
                            <Link href="/about" className="hover:text-blue-600">About</Link>
                            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
                        </nav>
                    </div>

                

                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-900">Newsletter</h4>
                        <p className="text-sm text-slate-600">
                            Blogs delivered to your inbox.
                        </p>
                        <form className="flex gap-2">
                            <input type="email" placeholder="email@example.com" className="bg-white border border-blue-200 rounded px-3 py-2 text-sm w-full text-slate-900 placeholder-slate-400" />
                            <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 border-t border-blue-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Faizaan Sidiq. All rights reserved.</p>
                    <div className="flex gap-4">
                       
                    </div>
                </div>
            </div>
        </footer>
    );
}

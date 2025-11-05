import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-rose-500 to-rose-700 shadow-lg" />
          <span className="font-semibold tracking-tight text-slate-900">Collab Cart</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#benefits" className="text-slate-700 hover:text-slate-900 transition-colors">Benefits</a>
          <a href="#how" className="text-slate-700 hover:text-slate-900 transition-colors">How it works</a>
          <a href="#pricing" className="text-slate-700 hover:text-slate-900 transition-colors">Pricing</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#login" className="px-4 py-2 rounded-md text-slate-700 hover:text-slate-900">Log in</a>
          <a href="#get-started" className="px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors">Get started</a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-white/50"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/80 backdrop-blur-md">
          <div className="px-4 py-3 space-y-2">
            <a href="#benefits" className="block py-2">Benefits</a>
            <a href="#how" className="block py-2">How it works</a>
            <a href="#pricing" className="block py-2">Pricing</a>
            <div className="pt-2 flex items-center gap-3">
              <a href="#login" className="px-4 py-2 rounded-md text-slate-700 hover:text-slate-900">Log in</a>
              <a href="#get-started" className="px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors">Get started</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="size-8 rounded-md bg-gradient-to-br from-cyan-500 to-violet-500"></div>
          <span className="font-semibold tracking-tight text-white">Studio Nova</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#offres" className="hover:text-white transition-colors">Offres</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#contact" className="ml-2 inline-flex items-center rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 font-medium text-white shadow-lg shadow-cyan-500/20 hover:opacity-95 transition">
            Démarrer
          </a>
        </nav>
        <button className="md:hidden text-slate-200" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-slate-200 bg-slate-900/80 border-t border-white/10">
          <a href="#offres" className="block" onClick={() => setOpen(false)}>Offres</a>
          <a href="#contact" className="block" onClick={() => setOpen(false)}>Contact</a>
          <a href="#contact" className="inline-flex items-center rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 font-medium text-white" onClick={() => setOpen(false)}>
            Démarrer
          </a>
        </div>
      )}
    </header>
  );
}

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goHome = () => {
    window.location.hash = '';
    setOpen(false);
  };

  const goTo = (hash) => {
    window.location.hash = hash;
    setOpen(false);
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={goHome} className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500" />
          <span className="font-semibold text-white">Studio Web</span>
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <button onClick={goHome} className="hover:text-white transition">Accueil</button>
          <button onClick={() => goTo('#/portfolio')} className="hover:text-white transition">Portfolio</button>
          <button onClick={() => goTo('#offres')} className="hover:text-white transition">Offres</button>
          <button onClick={() => goTo('#contact')} className="hover:text-white transition">Contact</button>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black/80 border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4 text-white/90">
            <button onClick={goHome}>Accueil</button>
            <button onClick={() => goTo('#/portfolio')}>Portfolio</button>
            <button onClick={() => goTo('#offres')}>Offres</button>
            <button onClick={() => goTo('#contact')}>Contact</button>
          </div>
        </div>
      )}
    </header>
  );
}

import React from 'react';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 grid place-items-center text-white shadow-lg">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight">BlueForge Studio</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#services" className="hover:text-slate-900 transition">Services</a>
          <a href="#process" className="hover:text-slate-900 transition">Process</a>
          <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
        </nav>

        <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm shadow hover:shadow-md transition">
          Démarrer
        </a>
      </div>
    </header>
  );
};

export default Navbar;

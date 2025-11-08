import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">Parlons de votre projet</h3>
            <p className="mt-2 text-slate-400 text-sm">Envoyez-nous un message et nous revenons vers vous sous 24h.</p>
            <form className="mt-6 grid gap-3">
              <input className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400/40" placeholder="Votre nom" />
              <input type="email" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400/40" placeholder="Email" />
              <textarea rows="4" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400/40" placeholder="Message" />
              <button type="button" className="mt-1 inline-flex w-max items-center justify-center rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-900 font-semibold px-5 py-3">Envoyer</button>
            </form>
          </div>
          <div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 h-full">
              <p className="text-sm text-slate-300">
                Studio spécialisé en conception d'interfaces épurées et animées. Nous créons des expériences digitales modernes avec une palette bleue et gris clair, et des interactions soignées.
              </p>
              <div className="mt-6 text-sm text-slate-400">
                © {new Date().getFullYear()} BlueForge Studio · Tous droits réservés
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

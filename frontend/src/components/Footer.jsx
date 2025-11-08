import { useState } from 'react';

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
      source: 'website',
    };

    try {
      const res = await fetch(`${BACKEND}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Erreur réseau');
      const data = await res.json();
      if (!data.success) throw new Error('Erreur serveur');
      setSuccess(true);
      e.currentTarget.reset();
    } catch (err) {
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer id="contact" className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-semibold text-white">Parlons de votre projet</h3>
          <p className="mt-3 text-slate-300 max-w-md">
            Dites-nous en plus et nous revenons vers vous sous 24h.
          </p>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-300">Nom</label>
              <input name="name" required className="mt-1 w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-cyan-500" placeholder="jane@mail.com" />
            </div>
          </div>
          <div>
            <label className="text-sm text-slate-300">Message</label>
            <textarea name="message" required rows="4" className="mt-1 w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Décrivez votre besoin..." />
          </div>
          {success && <p className="text-sm text-emerald-400">Merci ! Votre message a bien été envoyé.</p>}
          {error && <p className="text-sm text-rose-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 font-medium text-white shadow-lg shadow-cyan-500/20 hover:opacity-95 transition disabled:opacity-50"
          >
            {loading ? 'Envoi en cours…' : 'Envoyer'}
          </button>
        </form>
      </div>
      <div className="py-6 text-center text-xs text-slate-500 border-t border-white/10">© {new Date().getFullYear()} Studio Nova — Tous droits réservés.</div>
    </footer>
  );
}

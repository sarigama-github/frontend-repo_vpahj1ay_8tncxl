import { useState } from 'react';

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Request failed');
      setSuccess('Message envoyé avec succès');
      e.currentTarget.reset();
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer id="contact" className="bg-black border-t border-white/10 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="text-2xl font-semibold text-white">Parlons de votre projet</h3>
          <p className="text-white/70 mt-2">Décrivez votre besoin, nous revenons vers vous rapidement.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-white/70">Nom</label>
            <input name="name" required className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Votre nom" />
          </div>
          <div>
            <label className="block text-sm text-white/70">Email</label>
            <input name="email" type="email" required className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="vous@exemple.com" />
          </div>
          <div>
            <label className="block text-sm text-white/70">Message</label>
            <textarea name="message" rows="4" required className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Votre message" />
          </div>
          <button disabled={loading} className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition disabled:opacity-50">
            {loading ? 'Envoi…' : 'Envoyer'}
          </button>

          {success && <p className="text-sm text-emerald-400">{success}</p>}
          {error && <p className="text-sm text-red-400">{error}</p>}
        </form>
      </div>
      <p className="mt-10 text-center text-xs text-white/40">© {new Date().getFullYear()} Studio Web. Tous droits réservés.</p>
    </footer>
  );
}

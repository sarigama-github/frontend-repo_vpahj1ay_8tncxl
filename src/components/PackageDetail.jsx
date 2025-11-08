import { useEffect, useMemo } from 'react';
import { ArrowLeft, Rocket, Layout, ShoppingBag, Check } from 'lucide-react';

const MAP = {
  onepage: {
    title: 'Onepage',
    icon: Rocket,
    intro: 'Une page unique impactante pour présenter l’essentiel et convertir rapidement.',
    bullets: [
      'Héro animé et section accroche',
      '3 à 5 sections de contenu',
      'Formulaire de contact relié au serveur',
      'Responsive & rapide',
    ],
  },
  vitrine: {
    title: 'Vitrine',
    icon: Layout,
    intro: 'Un site multi‑pages élégant pour raconter votre histoire et votre offre.',
    bullets: [
      'Jusqu’à 6 pages structurées',
      'Blog/Actualités optionnel',
      'Animations Framer Motion',
      'SEO technique de base',
    ],
  },
  ecommerce: {
    title: 'E‑commerce',
    icon: ShoppingBag,
    intro: 'Une boutique performante et sécurisée pour vendre en ligne.',
    bullets: [
      "Catalogue, panier, commande",
      'Intégration paiements sécurisés',
      'Tableau de bord et analytics',
      'Optimisations performances',
    ],
  },
};

export default function PackageDetail({ slug }) {
  const data = useMemo(() => MAP[slug] || null, [slug]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!data) return null;
  const Icon = data.icon;

  const goBack = () => {
    window.location.hash = '';
  };

  return (
    <section className="min-h-[80vh] bg-black text-white pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={goBack} className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6">
          <ArrowLeft size={18} />
          Retour
        </button>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center"><Icon /></div>
            <h1 className="text-3xl font-bold">{data.title}</h1>
          </div>
          <p className="mt-4 text-white/80">{data.intro}</p>

          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {data.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-white/80">
                <Check className="mt-0.5 text-cyan-400" size={18} />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition">Demander un devis</a>
            <button onClick={goBack} className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">Revenir à l’accueil</button>
          </div>
        </div>
      </div>
    </section>
  );
}

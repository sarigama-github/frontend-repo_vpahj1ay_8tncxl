import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Footer from './components/Footer';

const PACKS = [
  {
    slug: 'onepage',
    name: 'Onepage',
    price: 'à partir de 499€',
    description:
      "Une page unique, rapide et percutante pour présenter l'essentiel avec un design ultra soigné.",
    features: [
      'Section héro animée',
      'Design sur‑mesure',
      'Optimisé mobile',
      'Déploiement express',
    ],
  },
  {
    slug: 'vitrine',
    name: 'Vitrine',
    price: 'à partir de 1290€',
    description:
      'Jusqu’à 5 pages élégantes pour raconter votre histoire, présenter vos services et vous contacter.',
    features: ['Navigation multi‑pages', 'CMS léger', 'SEO de base', 'Formulaire de contact'],
  },
  {
    slug: 'ecommerce',
    name: 'E‑commerce',
    price: 'sur devis',
    description:
      'Une boutique en ligne complète avec paiement sécurisé, gestion de produits et commandes.',
    features: [
      'Catalogue & panier',
      'Paiements sécurisés',
      'Dashboard commandes',
      'Intégrations tierces',
    ],
  },
];

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return hash.replace('#', '').replace(/^\/+/, '');
}

function PackageDetail({ slug, onBack }) {
  const pack = useMemo(() => PACKS.find((p) => p.slug === slug), [slug]);
  if (!pack) return null;
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
        >
          <span>← Retour</span>
        </button>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
          Offre {pack.name}
        </h1>
        <p className="mt-4 max-w-3xl text-slate-300">{pack.description}</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl p-6 bg-slate-900/60 ring-1 ring-white/10">
            <h2 className="text-xl font-medium text-white/90">Ce qui est inclus</h2>
            <ul className="mt-4 space-y-2 text-slate-300 list-disc pl-5">
              {pack.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-6 bg-slate-900/60 ring-1 ring-white/10">
            <div className="text-sm text-slate-400">Tarif</div>
            <div className="mt-1 text-2xl font-semibold text-white">{pack.price}</div>
            <a
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-3 font-medium text-white shadow-lg shadow-cyan-500/20 hover:opacity-95 transition"
            >
              Démarrer mon projet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const route = useHashRoute();
  const currentSlug = route.startsWith('onepage')
    ? 'onepage'
    : route.startsWith('vitrine')
    ? 'vitrine'
    : route.startsWith('ecommerce')
    ? 'ecommerce'
    : null;

  if (currentSlug) {
    return (
      <>
        <Navbar />
        <PackageDetail slug={currentSlug} onBack={() => (window.location.hash = '')} />
      </>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <Hero />
      <Packages />
      <Footer />
    </div>
  );
}

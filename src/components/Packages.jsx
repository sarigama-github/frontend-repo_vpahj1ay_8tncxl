import { motion } from 'framer-motion';
import { Rocket, Layout, ShoppingBag } from 'lucide-react';

const packages = [
  {
    slug: 'onepage',
    title: 'Onepage',
    desc: 'Une page unique impactante, idéale pour lancer rapidement votre présence.',
    icon: Rocket,
    features: ['Section héro animée', '3 blocs de contenu', 'Formulaire de contact', 'Optimisé mobile'],
  },
  {
    slug: 'vitrine',
    title: 'Vitrine',
    desc: 'Un site multi‑pages élégant pour présenter votre activité en détail.',
    icon: Layout,
    features: ['Jusqu’à 6 pages', 'Blog/Actualités', 'Animations avancées', 'SEO de base'],
  },
  {
    slug: 'ecommerce',
    title: 'E‑commerce',
    desc: 'Une boutique performante pour vendre en ligne avec confiance.',
    icon: ShoppingBag,
    features: ['Catalogue produits', 'Paiements sécurisés', 'Panier et commande', 'Suivi analytics'],
  },
];

export default function Packages() {
  return (
    <section id="offres" className="relative py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Nos offres</h2>
          <p className="mt-2 text-white/70">Choisissez la formule adaptée à vos objectifs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 flex flex-col"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-white mb-4">
                  <Icon />
                </div>
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-white/70">{p.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`#/${p.slug}`}
                  className="mt-6 inline-flex justify-center items-center px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition"
                >
                  Voir les détails
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

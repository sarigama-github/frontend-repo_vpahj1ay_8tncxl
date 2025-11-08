import { motion } from 'framer-motion';
import { Rocket, Layout, ShoppingBag } from 'lucide-react';

const cards = [
  {
    slug: 'onepage',
    title: 'Onepage',
    price: 'à partir de 499€',
    icon: Rocket,
    features: [
      'Héro animé',
      'Design sur‑mesure',
      'Optimisé mobile',
      'Déploiement express',
    ],
  },
  {
    slug: 'vitrine',
    title: 'Vitrine',
    price: 'à partir de 1290€',
    icon: Layout,
    features: ['Navigation multi‑pages', 'CMS léger', 'SEO de base', 'Formulaire de contact'],
  },
  {
    slug: 'ecommerce',
    title: 'E‑commerce',
    price: 'sur devis',
    icon: ShoppingBag,
    features: ['Catalogue & panier', 'Paiements sécurisés', 'Dashboard commandes', 'Intégrations tierces'],
  },
];

export default function Packages() {
  return (
    <section id="offres" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-white"
        >
          Trois offres simples et efficaces
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-2 text-slate-300 max-w-2xl"
        >
          Choisissez la formule adaptée à votre projet. Chaque offre est pensée pour être rapide, performante et esthétique.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.article
              key={c.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6 hover:ring-cyan-400/30 hover:bg-slate-900/80 transition"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/0 via-violet-500/0 to-transparent opacity-0 group-hover:opacity-20 transition pointer-events-none" />

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-300 ring-1 ring-white/10">
                  <c.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-white">{c.title}</h3>
              </div>
              <div className="mt-3 text-sm text-slate-300">{c.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {c.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-cyan-400"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`#${c.slug}`}
                className="mt-6 inline-flex items-center justify-center w-full rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-2 text-white transition"
              >
                Voir les détails
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

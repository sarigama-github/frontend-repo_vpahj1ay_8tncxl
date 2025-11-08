import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'NeoBank UI',
    tag: 'Fintech',
    desc: 'Interface de banque en ligne, animations fluides et dark mode.',
    img: 'https://images.unsplash.com/photo-1551281044-8d8e5f1f42d4?q=80&w=1600&auto=format&fit=crop',
    live: '#',
    repo: '#',
  },
  {
    title: 'Studio Portfolio',
    tag: 'Créatif',
    desc: 'Site portfolio avec 3D Spline, transitions soignées et grid responsive.',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    live: '#',
    repo: '#',
  },
  {
    title: 'Shop Minimal',
    tag: 'E-commerce',
    desc: 'Boutique minimaliste, parcours d’achat optimisé et pages rapides.',
    img: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1600&auto=format&fit=crop',
    live: '#',
    repo: '#',
  },
  {
    title: 'Dashboard Pro',
    tag: 'SaaS',
    desc: 'Dashboard analytique avec charts et thèmes adaptatifs.',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop',
    live: '#',
    repo: '#',
  },
];

export default function ProjectGrid() {
  return (
    <section id="works" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Projets sélectionnés</h2>
            <p className="text-white/70 mt-2">Échantillon de travaux — plus sur demande.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="aspect-video overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70">{p.tag}</span>
                </div>
                <p className="text-sm text-white/70 mt-1">{p.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.live} className="inline-flex items-center gap-1 text-white/80 hover:text-white">
                    <ExternalLink size={16} /> Live
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-1 text-white/60 hover:text-white">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

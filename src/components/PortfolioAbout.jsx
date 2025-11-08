import { motion } from 'framer-motion';
import { Sparkles, Code2, Layers } from 'lucide-react';

export default function PortfolioAbout() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-white mb-3">
            <Sparkles size={18} />
          </div>
          <h3 className="text-white font-semibold">Design soigné</h3>
          <p className="text-white/70 text-sm mt-2">Typographies nettes, layout équilibré, motion pour guider l’œil sans distraire.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-white mb-3">
            <Code2 size={18} />
          </div>
          <h3 className="text-white font-semibold">Code fiable</h3>
          <p className="text-white/70 text-sm mt-2">Stack moderne, accessibilité, performance et déploiements robustes.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-white mb-3">
            <Layers size={18} />
          </div>
          <h3 className="text-white font-semibold">Expériences 3D</h3>
          <p className="text-white/70 text-sm mt-2">Objets Spline interactifs et légers, intégrés sans sacrifier l’UX.</p>
        </motion.div>
      </div>
    </section>
  );
}

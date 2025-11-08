import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function PortfolioHero() {
  return (
    <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden bg-black" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
          >
            Portfolio — Projets modernes et interactifs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-lg text-white/80"
          >
            Une sélection de réalisations alliant design épuré, performance et expériences 3D ludiques.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#works" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition">Voir les projets</a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">Me contacter</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

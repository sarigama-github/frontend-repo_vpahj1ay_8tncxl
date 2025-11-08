import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950" id="hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[600px] bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 right-1/2 translate-x-1/2 size-[600px] bg-violet-500/10 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/90" />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 sm:pt-40 sm:pb-28">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent drop-shadow"
          >
            Sites web futuristes pour marques ambitieuses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-2xl text-lg text-slate-300"
          >
            Design épuré, animations fluides, et une intégration 3D interactive pour une expérience premium.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#offres" className="inline-flex items-center rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 font-medium text-white shadow-lg shadow-cyan-500/20 hover:opacity-95 transition">
              Découvrir les offres
            </a>
            <a href="#contact" className="inline-flex items-center rounded-xl border border-white/15 px-5 py-3 font-medium text-white/90 backdrop-blur hover:bg-white/5 transition">
              Parler de votre projet
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

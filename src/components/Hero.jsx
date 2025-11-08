import React from 'react';
import Spline from '@splinetool/react-spline';
import { MotionConfig, motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(1000px_circle_at_80%_30%,rgba(79,70,229,0.2),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <MotionConfig reducedMotion="user">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              Studio de développement web</div>
            <h1 className="mt-5 text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.1]">
              Conception de sites élégants, performants et immersifs
            </h1>
            <p className="mt-6 text-slate-300 text-base sm:text-lg">
              Trois offres adaptées à vos besoins: Onepage, Vitrine et E‑commerce. Des interfaces épurées, des animations fluides et une expérience moderne.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-900 font-medium px-5 py-3 shadow-lg shadow-cyan-500/20">
                Découvrir nos offres
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-white/90 hover:bg-white/5">
                Obtenir un devis
              </a>
            </div>
          </motion.div>
        </MotionConfig>
      </div>
    </section>
  );
};

export default Hero;

import { ArrowRight } from 'lucide-react';

export default function PortfolioCTA() {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-black/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-white">Vous avez un projet en tête ?</h3>
        <p className="text-white/70 mt-2">Parlons-en et transformons vos idées en une expérience mémorable.</p>
        <a href="#contact" className="mt-6 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition">
          Me contacter <ArrowRight className="ml-2" size={18} />
        </a>
      </div>
    </section>
  );
}

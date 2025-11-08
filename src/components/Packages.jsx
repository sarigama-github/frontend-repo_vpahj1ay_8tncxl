import React from 'react';
import { motion } from 'framer-motion';
import { Layout, MonitorSmartphone, ShoppingBag, Check } from 'lucide-react';

const plans = [
  {
    id: 'onepage',
    title: 'Site Onepage',
    icon: Layout,
    price: 'à partir de 690€',
    desc: "Un site unique et percutant sur une page pour présenter l'essentiel.",
    features: ['Design sur‑mesure', 'Section contact', 'Optimisé mobile', 'Animations fluides'],
    color: 'from-cyan-400 to-blue-500',
  },
  {
    id: 'vitrine',
    title: 'Site Vitrine',
    icon: MonitorSmartphone,
    price: 'à partir de 1290€',
    desc: 'Présentez votre activité avec plusieurs pages, blog et formulaires.',
    features: ['5‑8 pages', 'Blog/Actualités', 'SEO de base', 'Hébergement & domaine'],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'ecommerce',
    title: 'Site E‑commerce',
    icon: ShoppingBag,
    price: 'à partir de 2490€',
    desc: 'Vendez en ligne avec un catalogue, panier et paiement sécurisé.',
    features: ['Catalogue & Panier', 'Paiement sécurisé', 'Gestion commandes', 'Suivi & analytics'],
    color: 'from-indigo-600 to-violet-600',
  },
];

const Packages = () => {
  return (
    <section id="services" className="relative bg-gradient-to-b from-slate-50 to-white py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Nos offres</h2>
          <p className="mt-3 text-slate-600">Trois formules claires pour lancer votre projet rapidement.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${plan.color} text-white grid place-items-center shadow-md`}>
                {React.createElement(plan.icon, { size: 22 })}
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{plan.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{plan.desc}</p>
              <div className="mt-4 text-sm font-medium text-slate-900">{plan.price}</div>
              <ul className="mt-6 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="h-5 w-5 rounded-full bg-slate-100 text-cyan-600 grid place-items-center">
                      <Check size={14} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 text-white py-2.5 text-sm font-medium hover:bg-slate-800">
                Demander un devis
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;

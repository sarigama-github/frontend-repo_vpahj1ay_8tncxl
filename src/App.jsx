import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Footer from './components/Footer';
import PackageDetail from './components/PackageDetail';
import PortfolioHero from './components/PortfolioHero';
import ProjectGrid from './components/ProjectGrid';
import PortfolioAbout from './components/PortfolioAbout';
import PortfolioCTA from './components/PortfolioCTA';

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash || '');
  useEffect(() => {
    const onHash = () => setHash(window.location.hash || '');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return hash;
}

export default function App() {
  const hash = useHashRoute();

  const slug = useMemo(() => {
    if (hash.startsWith('#/')) return hash.replace('#/', '');
    return null;
  }, [hash]);

  const isDetail = slug === 'onepage' || slug === 'vitrine' || slug === 'ecommerce';
  const isPortfolio = slug === 'portfolio';

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {isPortfolio ? (
        <>
          <PortfolioHero />
          <ProjectGrid />
          <PortfolioAbout />
          <PortfolioCTA />
          <Footer />
        </>
      ) : isDetail ? (
        <PackageDetail slug={slug} />
      ) : (
        <>
          <Hero />
          <Packages />
          <Footer />
        </>
      )}
    </div>
  );
}

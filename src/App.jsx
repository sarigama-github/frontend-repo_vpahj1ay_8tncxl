import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Footer from './components/Footer';
import PackageDetail from './components/PackageDetail';

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

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {isDetail ? (
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

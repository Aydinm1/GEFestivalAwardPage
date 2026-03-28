import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'motion/react';

import Footer from './components/layout/Footer.tsx';
import HomePage from './pages/HomePage.tsx';
import ImpactPage from './pages/ImpactPage.tsx';
import LegacyPage from './pages/LegacyPage.tsx';
import SustainabilityPage from './pages/SustainabilityPage.tsx';
import type { View } from './types.ts';

export default function App() {
  const [view, setView] = useState<View>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/20 selection:text-primary">
      <AnimatePresence mode="wait">
        {view === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <HomePage setView={setView} />
          </motion.div>
        )}

        {view === 'impact' && <ImpactPage onBack={() => setView('home')} />}
        {view === 'legacy' && <LegacyPage onBack={() => setView('home')} />}
        {view === 'sustainability' && <SustainabilityPage onBack={() => setView('home')} />}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

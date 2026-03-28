import { motion } from 'motion/react';

import Footer from './components/layout/Footer.tsx';
import HomePage from './pages/HomePage.tsx';

export default function App() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/20 selection:text-primary">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <HomePage onNavigate={scrollToSection} />
      </motion.div>
      <Footer />
    </div>
  );
}

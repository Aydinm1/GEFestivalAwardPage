import { motion } from 'motion/react';

type HeroSectionProps = {
  onNavigate: (sectionId: string) => void;
};

const heroLinks = [
  { id: 'impact-section', label: 'Impact' },
  { id: 'legacy-section', label: 'Legacy' },
  { id: 'sustainability-section', label: 'Sustainability' },
];

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-secondary">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/impact-image.jpeg"
          className="absolute inset-0 h-full w-full object-cover object-[center_92%] scale-[1.04]"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-crowd-at-a-concert-40291-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-secondary/48" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/82 via-secondary/20 to-transparent" />
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute left-10 top-0 z-30 flex items-center justify-center rounded-b-xl bg-transparent px-0 transition-transform hover:scale-[1.02] md:left-20"
      >
        <img
          src="/logo.png"
          alt="Global Encounters Logo"
          className="h-65 w-65 object-contain drop-shadow-[0_8px_16px_rgba(35,118,188,0.35)]"
          referrerPolicy="no-referrer"
        />
      </button>

      <div className="absolute left-6 right-6 top-64 z-20 flex flex-wrap items-center justify-center gap-6 md:top-10 md:justify-end md:gap-8">
        {heroLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => onNavigate(link.id)}
            className="font-headline text-sm font-bold uppercase tracking-[0.22em] text-white transition-colors hover:text-primary"
          >
            {link.label}
          </button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl px-6 pt-80 text-center md:pt-64"
      >
        <h1 className="mb-8 font-headline text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Unforgettable Encounters <br />
          <span className="text-3xl font-normal italic text-yellow-200 sm:text-4xl md:text-5xl lg:text-6xl">That Light the Human Spirit</span>
        </h1>
      </motion.div>
    </section>
  );
}

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
        <div className="absolute inset-0 bg-secondary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute left-1/2 top-0 z-30 flex -translate-x-1/2 items-center justify-center rounded-b-[2rem] bg-white px-0 shadow-md transition-transform hover:scale-[1.02]"
      >
        <img
          src="/logo.png"
          alt="Global Encounters Logo"
          className="h-65 w-65 object-contain drop-shadow-[0_8px_16px_rgba(35,118,188,0.35)]"
          referrerPolicy="no-referrer"
        />
      </button>

      <div className="absolute left-6 right-6 top-64 z-20 flex flex-wrap items-center justify-center gap-3 md:top-6 md:justify-end">
          {heroLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="rounded-full border border-white/25 bg-white/12 px-6 py-3 font-headline text-sm font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md transition-all hover:border-primary hover:bg-primary hover:shadow-[0_20px_40px_rgba(35,118,188,0.35)]"
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
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          Celebrating A Legacy of Excellence
        </div>
        <h1 className="mb-8 font-headline text-5xl font-extrabold leading-[1.1] tracking-tight text-white md:text-8xl">
          The Global Stage for <span className="text-primary">Human Potential</span>
        </h1>
        <p className="mx-auto max-w-2xl text-xl font-light leading-relaxed text-slate-200 md:text-2xl">
          Where culture, sports, and knowledge converge to create unprecedented social impact.
        </p>
      </motion.div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

type HeroSectionProps = {
  onNavigate: (sectionId: string, storyIndex?: number) => void;
};

const heroLinks = [
  { id: 'net-promoter-section', label: 'Impact' },
  { id: 'vision-section', label: 'Sustainability', storyIndex: 6 },
];

const heroVideoSrc = `${import.meta.env.BASE_URL}hero-video.mp4`;
const heroPosterSrc = `${import.meta.env.BASE_URL}impact-image.jpeg`;
const heroLogoSrc = `${import.meta.env.BASE_URL}logo.png`;

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasVideoError, setHasVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || hasVideoError) {
      return;
    }

    const startPlayback = async () => {
      try {
        video.muted = true;
        video.defaultMuted = true;
        await video.play();
      } catch {
        // Let the browser show the poster if autoplay is blocked in dev.
      }
    };

    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      void startPlayback();
      return;
    }

    video.addEventListener('canplay', startPlayback, { once: true });
    return () => video.removeEventListener('canplay', startPlayback);
  }, [hasVideoError]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-secondary">
      <div className="absolute inset-0 z-0">
        {hasVideoError ? (
          <img
            src={heroPosterSrc}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-[center_92%] scale-[1.04]"
          />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={heroPosterSrc}
            className="absolute inset-0 h-full w-full object-cover object-[center_92%] scale-[1.04]"
            onError={() => setHasVideoError(true)}
          >
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-secondary/48" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/82 via-secondary/20 to-transparent" />
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute left-6 top-0 z-30 flex items-center justify-center rounded-b-xl bg-transparent px-0 transition-transform hover:scale-[1.02] md:left-20"
      >
        <img
          src={heroLogoSrc}
          alt="Global Encounters Logo"
          loading="eager"
          decoding="async"
          className="h-32 w-auto object-contain drop-shadow-[0_8px_16px_rgba(35,118,188,0.35)] md:h-56"
          referrerPolicy="no-referrer"
        />
      </button>

      <div className="absolute left-6 right-6 top-32 z-20 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:top-10 md:justify-end md:gap-8">
        {heroLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => onNavigate(link.id, link.storyIndex)}
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
        className="relative z-10 mx-auto max-w-5xl px-6 pt-48 text-center md:pt-64"
      >
        <h1 className="mb-8 font-headline text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Unforgettable Encounters <br />
          <span className="text-3xl font-normal italic text-yellow-200 sm:text-4xl md:text-5xl lg:text-6xl">That Light the Human Spirit</span>
        </h1>
      </motion.div>
    </section>
  );
}

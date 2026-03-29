import { AnimatePresence, motion } from 'motion/react';

export type ImpactStory = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  fallbackSrc: string;
  glowClass: string;
  badgeClass: string;
  points: Array<{
    title: string;
    description: string;
  }>;
};

type ImpactStoryPanelProps = {
  story: ImpactStory;
  onImageClick?: () => void;
};

export default function ImpactStoryPanel({ story, onImageClick }: ImpactStoryPanelProps) {
  return (
    <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row lg:gap-24">
      <div className="relative w-full lg:w-1/2">
        <AnimatePresence mode="wait">
          <motion.div
            key={story.imageSrc}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="group relative"
          >
            <div className={`absolute -inset-4 rounded-2xl blur-3xl transition-all ${story.glowClass}`} />
            <button
              type="button"
              onClick={onImageClick}
              className="relative block w-full cursor-zoom-in text-left"
              aria-label={`Open ${story.title} image`}
            >
              <img
                alt={story.title}
                className="shadow-3xl relative aspect-[4/5] w-full rounded-2xl object-cover grayscale-[10%] transition-all duration-1000 hover:grayscale-0"
                src={story.imageSrc}
                onError={(event) => {
                  (event.target as HTMLImageElement).src = story.fallbackSrc;
                }}
                referrerPolicy="no-referrer"
              />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="w-full space-y-8 md:space-y-10 lg:w-1/2">
        <AnimatePresence mode="wait">
          <motion.div
            key={story.eyebrow}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`inline-flex rounded-full border px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] md:text-xs ${story.badgeClass}`}
          >
            {story.eyebrow}
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div
            key={story.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="space-y-8 md:space-y-10"
          >
            <div>
              <h2 className="font-headline text-3xl font-extrabold leading-[1.1] tracking-tight drop-shadow-[0_12px_24px_rgba(0,0,0,0.16)] md:text-6xl">
                {story.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/88 md:text-xl">
                {story.description}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 py-4 sm:grid-cols-2 md:py-6">
              {story.points.map((point) => (
                <div key={point.title}>
                  <h4 className="mb-2 text-lg font-bold text-white">{point.title}</h4>
                  <p className="text-sm leading-relaxed text-white/76">{point.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

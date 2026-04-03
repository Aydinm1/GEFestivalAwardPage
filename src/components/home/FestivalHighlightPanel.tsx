import { AnimatePresence, motion } from 'motion/react';

export type FestivalHighlight = {
  eyebrow: string;
  title: string;
  description: string;
  videoSrc: string;
  posterSrc: string;
  glowClass: string;
  badgeClass: string;
  points: Array<{
    title: string;
    description: string;
  }>;
  bottomImageSrc?: string;
};

type FestivalHighlightPanelProps = {
  highlight: FestivalHighlight;
  isTheaterMode: boolean;
  onPlay: () => void;
  onPause: () => void;
};

export default function FestivalHighlightPanel({
  highlight,
  isTheaterMode,
  onPlay,
  onPause,
}: FestivalHighlightPanelProps) {
  return (
    <div
      className={`relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24 ${
        isTheaterMode ? 'z-40' : 'z-10'
      }`}
    >
      <AnimatePresence mode="popLayout">
        {!isTheaterMode && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="space-y-8 text-center md:space-y-10 lg:col-span-5 lg:text-left"
          >
            <div className="flex justify-center lg:justify-start">
              <div
                className={`inline-flex rounded-full border px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] md:text-xs ${highlight.badgeClass}`}
              >
                {highlight.eyebrow}
              </div>
            </div>
            <div className="space-y-8 md:space-y-10">
              <div>
                <h2 className="font-headline text-3xl font-extrabold leading-[1.1] tracking-tight drop-shadow-[0_12px_24px_rgba(0,0,0,0.16)] sm:text-4xl md:text-5xl lg:text-6xl">
                  {highlight.title}
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-white/88 sm:text-lg md:text-xl lg:mx-0">
                  {highlight.description}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 py-4 sm:grid-cols-2 md:py-6">
                {highlight.points.map((point) => (
                  <div key={point.title}>
                    <h4 className="mb-2 text-lg font-bold text-white">{point.title}</h4>
                    <p className="text-sm leading-relaxed text-white/76">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        layout
        transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        className={
          isTheaterMode
            ? 'w-full lg:col-span-12'
            : 'relative w-full lg:col-span-7'
        }
      >
        <div
          className={`relative w-full overflow-hidden rounded-2xl border-4 border-white/10 bg-black/20 aspect-video ${
            isTheaterMode ? 'max-w-screen-lg mx-auto' : ''
          }`}
        >
          <video
            key={highlight.videoSrc}
            playsInline
            controls
            poster={highlight.posterSrc}
            className="h-full w-full object-cover"
            onPlay={onPlay}
            onPause={onPause}
            onEnded={onPause}
          >
            <source src={highlight.videoSrc} type="video/mp4" />
          </video>
        </div>
        {highlight.bottomImageSrc && !isTheaterMode && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex justify-center px-4"
          >
            <img src={highlight.bottomImageSrc} alt="" className="h-auto w-full max-w-2xl object-contain opacity-90 drop-shadow-md" />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

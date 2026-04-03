import { useEffect } from 'react';

import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export type LightboxItem = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  fallbackSrc?: string;
};

type PhotoLightboxProps = {
  items: LightboxItem[];
  activeIndex: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export default function PhotoLightbox({
  items,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
}: PhotoLightboxProps) {
  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        onPrevious();
      } else if (event.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, onClose, onNext, onPrevious]);

  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  return (
    <AnimatePresence>
      {activeItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-secondary/88 px-4 py-8 backdrop-blur-sm md:px-8"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onClose();
            }}
            className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-white/20 md:right-8 md:top-8"
            aria-label="Close image viewer"
          >
            <X size={22} />
          </button>
          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onPrevious();
                }}
                className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-white/20 md:flex"
                aria-label="Show previous image"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onNext();
                }}
                className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-white/20 md:flex"
                aria-label="Show next image"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
          <motion.div
            key={activeItem.src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="relative mx-auto flex max-h-full w-full max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="overflow-hidden rounded-[1.5rem] bg-white/6 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
              <img
                src={activeItem.src}
                alt={activeItem.alt}
                className="max-h-[72vh] w-full object-contain"
                onError={(event) => {
                  if (activeItem.fallbackSrc) {
                    (event.target as HTMLImageElement).src = activeItem.fallbackSrc;
                  }
                }}
                referrerPolicy="no-referrer"
              />
            </div>
            {(activeItem.title || activeItem.description) && (
              <div className="mt-5 max-w-3xl text-center text-white">
                {activeItem.title && (
                  <h3 className="font-headline text-2xl font-bold tracking-tight md:text-3xl">
                    {activeItem.title}
                  </h3>
                )}
                {activeItem.description && (
                  <p className="mt-2 text-sm leading-relaxed text-white/78 md:text-base">
                    {activeItem.description}
                  </p>
                )}
              </div>
            )}
            {items.length > 1 && (
              <div className="mt-5 flex items-center gap-4 md:hidden">
                <button
                  type="button"
                  onClick={onPrevious}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-white/20"
                  aria-label="Show previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="min-w-[4rem] text-center text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                  {activeIndex + 1} / {items.length}
                </div>
                <button
                  type="button"
                  onClick={onNext}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-white/20"
                  aria-label="Show next image"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

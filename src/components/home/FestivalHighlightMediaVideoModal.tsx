import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import { type FestivalHighlightMediaItem } from './FestivalHighlightPanel.tsx';

type FestivalHighlightMediaVideoModalProps = {
  item: FestivalHighlightMediaItem | null;
  isNativeFullscreen: boolean;
  onClose: () => void;
  onNativeFullscreenChange: (isFullscreen: boolean) => void;
};

export default function FestivalHighlightMediaVideoModal({
  item,
  isNativeFullscreen,
  onClose,
  onNativeFullscreenChange,
}: FestivalHighlightMediaVideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!item || !video) {
      return;
    }

    const syncNativeFullscreenState = () => {
      const fullscreenDocument = document as Document & {
        webkitFullscreenElement?: Element | null;
      };
      const webkitVideo = video as HTMLVideoElement & {
        webkitDisplayingFullscreen?: boolean;
      };
      const fullscreenElement =
        document.fullscreenElement ?? fullscreenDocument.webkitFullscreenElement ?? null;

      onNativeFullscreenChange(
        fullscreenElement === video || Boolean(webkitVideo.webkitDisplayingFullscreen),
      );
    };

    syncNativeFullscreenState();

    document.addEventListener('fullscreenchange', syncNativeFullscreenState);
    document.addEventListener(
      'webkitfullscreenchange',
      syncNativeFullscreenState as EventListener,
    );
    video.addEventListener(
      'webkitbeginfullscreen',
      syncNativeFullscreenState as EventListener,
    );
    video.addEventListener(
      'webkitendfullscreen',
      syncNativeFullscreenState as EventListener,
    );

    return () => {
      document.removeEventListener('fullscreenchange', syncNativeFullscreenState);
      document.removeEventListener(
        'webkitfullscreenchange',
        syncNativeFullscreenState as EventListener,
      );
      video.removeEventListener(
        'webkitbeginfullscreen',
        syncNativeFullscreenState as EventListener,
      );
      video.removeEventListener(
        'webkitendfullscreen',
        syncNativeFullscreenState as EventListener,
      );
      onNativeFullscreenChange(false);
    };
  }, [item, onNativeFullscreenChange]);

  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-50 flex items-center justify-center bg-black/85 px-6 py-12"
          onClick={() => {
            if (!isNativeFullscreen) {
              onClose();
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-screen-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/60">
                  Related Media
                </p>
                <h3 className="mt-1 font-headline text-2xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/20 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10"
              >
                Close
              </button>
            </div>
            <div className="overflow-hidden rounded-2xl border-4 border-white/10 bg-black/30 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
              <video
                ref={videoRef}
                key={item.href}
                autoPlay
                playsInline
                controls
                preload="metadata"
                poster={item.thumbnailSrc}
                className="aspect-video h-full w-full object-cover"
              >
                <source src={item.href} type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

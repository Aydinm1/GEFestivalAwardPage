import { motion } from 'motion/react';
import { type FestivalHighlightMediaItem } from './FestivalHighlightPanel.tsx';

const mediaTypeLabel: Record<FestivalHighlightMediaItem['type'], string> = {
  pdf: 'PDF',
  doc: 'DOC',
  link: 'Article',
  video: 'Video',
  image: 'Gallery',
};

const mediaTypeSymbol: Record<FestivalHighlightMediaItem['type'], string> = {
  pdf: 'PDF',
  doc: 'DOC',
  link: 'LINK',
  video: 'PLAY',
  image: 'IMG',
};

const mediaTypeActionLabel: Record<FestivalHighlightMediaItem['type'], string> = {
  pdf: 'Read report',
  doc: 'Open document',
  link: 'Visit resource',
  video: 'Watch video',
  image: 'View gallery',
};

type SecondaryMediaCardProps = {
  item: FestivalHighlightMediaItem;
  isActive?: boolean;
  onSelect?: (item: FestivalHighlightMediaItem) => void;
};

export default function SecondaryMediaCard({
  item,
  isActive = false,
  onSelect,
}: SecondaryMediaCardProps) {
  const cardClassName = `group relative flex h-full min-h-[11rem] flex-col overflow-hidden rounded-[18px] border shadow-[0_16px_28px_rgba(8,15,36,0.16)] ring-1 ring-white/6 backdrop-blur-md transition-colors duration-300 ${
    isActive
      ? 'border-white/34 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.12))] ring-2 ring-white/20'
      : 'border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.08))] hover:border-white/22 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.1))]'
  }`;

  const cardBody = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden bg-black/20">
        {item.thumbnailSrc ? (
          <img
            src={item.thumbnailSrc}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))]">
            <span className="font-headline text-lg font-bold uppercase tracking-[0.22em] text-white/80">
              {mediaTypeSymbol[item.type]}
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,15,36,0.06)_0%,rgba(8,15,36,0.14)_46%,rgba(8,15,36,0.68)_100%)]" />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-2.5">
          <span className="rounded-full border border-white/18 bg-black/30 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.2em] text-white/92 backdrop-blur-sm">
            {mediaTypeLabel[item.type]}
          </span>
          {isActive ? (
            <span className="rounded-full border border-emerald-200/20 bg-emerald-300/18 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.16em] text-emerald-50 backdrop-blur-sm">
              Active
            </span>
          ) : null}
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-2.5 p-3 text-left">
        <h3 className="font-headline text-[0.95rem] font-bold leading-tight text-white">
          {item.title}
        </h3>
        <div className="flex items-center justify-between gap-2 border-t border-white/10 pt-2">
          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/68 transition-colors group-hover:text-white/92">
            {item.type === 'video'
              ? isActive
                ? 'Watching'
                : 'Watch video'
              : mediaTypeActionLabel[item.type]}
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/14 bg-white/10 text-white/88 transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-white/26 group-hover:bg-white/14">
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="h-3 w-3 fill-none stroke-current"
            >
              <path d="M5 10h10" strokeWidth="1.75" strokeLinecap="round" />
              <path
                d="m10.5 5 4.5 5-4.5 5"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );

  if (item.type === 'video' && onSelect) {
    return (
      <motion.button
        type="button"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        onClick={() => onSelect(item)}
        className={cardClassName}
      >
        {cardBody}
      </motion.button>
    );
  }

  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={cardClassName}
    >
      {cardBody}
    </motion.a>
  );
}

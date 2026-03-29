import { useState } from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import ColorPaletteCard, { type ColorPanel } from './ColorPaletteCard.tsx';
import { galleryItems } from './galleryItems.ts';

const colorPanels: ColorPanel[] = [
  {
    name: 'Festival Blue',
    token: 'primary',
    hex: '#2376BC',
    bgClass: 'bg-primary',
    textClass: 'text-white',
    accentClass: 'bg-white/22',
    description: 'The core event identity color used across primary calls to action and key wayfinding.',
  },
  {
    name: 'Deep Atlantic',
    token: 'secondary',
    hex: '#003258',
    bgClass: 'bg-secondary',
    textClass: 'text-white',
    accentClass: 'bg-white/16',
    description: 'A grounded anchor tone that gives the brighter accents structure and contrast.',
  },
  {
    name: 'Sunrise Orange',
    token: 'accent-orange',
    hex: '#F3A11F',
    bgClass: 'bg-accent-orange',
    textClass: 'text-secondary',
    accentClass: 'bg-secondary/12',
    description: 'Warmth, energy, and hospitality for moments that need motion and human connection.',
  },
  {
    name: 'Light Blue',
    token: 'guide-light-blue',
    hex: '#2CACE3',
    bgClass: 'bg-guide-light-blue',
    textClass: 'text-secondary',
    accentClass: 'bg-secondary/12',
    description: 'Used for freshness, openness, and modernity without overpowering the page.',
  },
  {
    name: 'Guide Yellow',
    token: 'guide-yellow',
    hex: '#FFD200',
    bgClass: 'bg-guide-yellow',
    textClass: 'text-secondary',
    accentClass: 'bg-secondary/12',
    description: 'A bright note reserved for high-visibility emphasis and celebratory accents.',
  },
  {
    name: 'Guide Purple',
    token: 'guide-purple',
    hex: '#8E2A8B',
    bgClass: 'bg-guide-purple',
    textClass: 'text-white',
    accentClass: 'bg-white/16',
    description: 'Adds ceremonial richness and a more elevated tone to special moments.',
  },
  {
    name: 'Guide Magenta',
    token: 'guide-magenta',
    hex: '#E9088A',
    bgClass: 'bg-guide-magenta',
    textClass: 'text-white',
    accentClass: 'bg-white/16',
    description: 'A vivid accent for expressive highlights, cultural vibrancy, and emotional punch.',
  },
  {
    name: 'Guide Teal',
    token: 'guide-teal',
    hex: '#00A19C',
    bgClass: 'bg-guide-teal',
    textClass: 'text-white',
    accentClass: 'bg-white/16',
    description: 'Balanced and contemporary, ideal for collaborative, optimistic, and future-facing moments.',
  },
];

const PANELS_PER_PAGE = 4;

export default function ColorAccordionSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const visiblePanels = Array.from({ length: PANELS_PER_PAGE }, (_, offset) => {
    const panelIndex = (startIndex + offset) % colorPanels.length;

    return {
      panel: colorPanels[panelIndex],
      panelIndex,
    };
  });

  const showPreviousPage = () => {
    setStartIndex((current) => (current === 0 ? colorPanels.length - 1 : current - 1));
  };

  const showNextPage = () => {
    setStartIndex((current) => (current + 1) % colorPanels.length);
  };

  return (
    <section className="overflow-hidden bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl md:mb-14">
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-primary">
            Style Guide Palette
          </div>
          <h2 className="font-headline text-4xl font-extrabold tracking-tight text-secondary md:text-5xl">
            Eight Colors, One Visual Language
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 md:text-lg">
            Four palette cards are shown at a time. Use the arrows to rotate through the full set
            one card at a time.
          </p>
        </div>

        <div className="relative md:px-12">
          <div className="mb-4 flex justify-center md:hidden">
            <div className="min-w-[4.5rem] text-center text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              {startIndex + 1} - {((startIndex + PANELS_PER_PAGE - 1) % colorPanels.length) + 1}
            </div>
          </div>
          <button
            type="button"
            onClick={showPreviousPage}
            className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-secondary shadow-[0_12px_30px_rgba(15,23,42,0.12)] transition-all hover:border-primary hover:bg-primary hover:text-white md:flex"
            aria-label="Show previous palette set"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={showNextPage}
            className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-secondary shadow-[0_12px_30px_rgba(15,23,42,0.12)] transition-all hover:border-primary hover:bg-primary hover:text-white md:flex"
            aria-label="Show next palette set"
          >
            <ChevronRight size={20} />
          </button>
          <div className="mb-4 flex items-center justify-center gap-3 md:hidden">
            <button
              type="button"
              onClick={showPreviousPage}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-secondary transition-all hover:border-primary hover:bg-primary hover:text-white"
              aria-label="Show previous palette card set"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="min-w-[4.5rem] text-center text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              {startIndex + 1} - {((startIndex + PANELS_PER_PAGE - 1) % colorPanels.length) + 1}
            </div>
            <button
              type="button"
              onClick={showNextPage}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-secondary transition-all hover:border-primary hover:bg-primary hover:text-white"
              aria-label="Show next palette card set"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {visiblePanels.map(({ panel, panelIndex }) => {
              const isActive = activeIndex === panelIndex;

              return (
                <div key={panel.token}>
                  <ColorPaletteCard
                    panel={panel}
                    isActive={isActive}
                    onClick={() =>
                      setActiveIndex((current) => (current === panelIndex ? null : panelIndex))
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-out ${
            activeIndex !== null
              ? 'mt-8 grid-rows-[1fr] opacity-100 md:mt-10'
              : 'mt-0 grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:p-8">
              {activeIndex !== null && (
                <>
                  <div className="mb-6 flex flex-col gap-3 md:mb-8 md:flex-row md:items-end md:justify-between">
                    <div>
                      <div className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
                        {colorPanels[activeIndex].name}
                      </div>
                      <h3 className="mt-2 font-headline text-3xl font-extrabold tracking-tight text-secondary">
                        Image Gallery Preview
                      </h3>
                    </div>
                    <p className="max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
                      This currently opens the existing four gallery images regardless of which
                      palette card is selected.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {galleryItems.map((item) => (
                      <div
                        key={item.title}
                        className="group relative aspect-[4/3] overflow-hidden rounded-[1.25rem] lg:aspect-[3/4]"
                      >
                        <img
                          alt={item.alt}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          src={item.src}
                          onError={(event) => {
                            (event.target as HTMLImageElement).src = item.fallbackSrc;
                          }}
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-secondary/78 to-transparent p-5">
                          <h4 className="text-lg font-bold text-white">{item.title}</h4>
                          <p className="mt-1 text-sm text-white/78">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

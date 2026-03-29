import { useRef } from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems } from './galleryItems.ts';

export default function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) {
      return;
    }

    const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
    const nextLeft =
      direction === 'right'
        ? scrollLeft + clientWidth >= scrollWidth - 50
          ? 0
          : scrollLeft + clientWidth
        : scrollLeft <= 50
          ? scrollWidth
          : scrollLeft - clientWidth;

    scrollRef.current.scrollTo({ left: nextLeft, behavior: 'smooth' });
  };

  return (
    <section className="overflow-hidden bg-slate-50 py-20 md:py-32">
      <div className="mx-auto mb-12 flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:mb-16 md:flex-row md:items-end">
        <div>
          <h2 className="font-headline text-4xl font-extrabold leading-tight tracking-tight text-secondary md:text-5xl">
            The Picture Section
          </h2>
          <p className="mt-4 text-base text-slate-500 md:text-lg">
            Capturing the human connection through high-resolution candid photography of festival
            participants, cultural exchanges, and large-scale art installations.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => scroll('left')}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition-all hover:border-primary hover:bg-primary hover:text-white md:h-14 md:w-14"
          >
            <ChevronLeft size={20} className="md:h-6 md:w-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition-all hover:border-primary hover:bg-primary hover:text-white md:h-14 md:w-14"
          >
            <ChevronRight size={20} className="md:h-6 md:w-6" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-12 md:gap-8 md:px-8"
      >
        {galleryItems.map((item) => (
          <div
            key={item.title}
            className={`relative flex-none w-[80vw] snap-start overflow-hidden rounded-2xl ${item.widthClass} ${item.aspectClass} group`}
          >
            <img
              alt={item.alt}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              src={item.src}
              onError={(event) => {
                (event.target as HTMLImageElement).src = item.fallbackSrc;
              }}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-secondary/80 to-transparent p-6 opacity-100 transition-opacity group-hover:opacity-100 md:p-8 md:opacity-0">
              <h4 className="text-lg font-bold text-white md:text-xl">{item.title}</h4>
              <p className="text-xs text-white/70 md:text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

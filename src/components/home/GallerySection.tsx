import { useRef } from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';

type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
  widthClass: string;
  aspectClass: string;
  fallbackSrc: string;
};

const galleryItems: GalleryItem[] = [
  {
    src: '/gallery-1.jpeg',
    alt: 'Excellence 1',
    title: 'Main Arena Production',
    description: 'A synthesis of technology and performance.',
    widthClass: 'md:w-[450px]',
    aspectClass: 'aspect-[4/5]',
    fallbackSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBZY4EsN3lHSWqPBU3bah5KczhrG7-ammz3rgfPT2Rk4MGgWkfjBnMJ9G76_kNAKIrbk_43PE_Uaw44zjRo1J6NQUyBakcJzm3wYijRb-254jjNU34uTlKw5RnaE6gKjfzdnCN3NBd1WiU6WJI0Z75oTUxO-axzxVBmSU9amLxtT5KzAqwwBHKewqlnBqR1YMEyLETo-wFzpoyej4Kfe1zOwTBL4kTpEodR9X80pyi-0ponnz4v1rk1O5BpDIQg10hHxngu0fgivSHF',
  },
  {
    src: '/gallery-2.jpg',
    alt: 'Excellence 2',
    title: 'The Cultural Pavilion',
    description: 'Where heritage meets modern architecture.',
    widthClass: 'md:w-[650px]',
    aspectClass: 'aspect-[16/10]',
    fallbackSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDOm1aw4D9QDoqDMitMjql0fLZKUTpzCG4G1e9G4lSqHGHHbFvN1KqYuTE9Vt8DMmTl7_0ZQ0PSZUVxIO76eS4rnlAezS8Sgi6vMxAqe-9z611f9ByzUfxeRUxsbMbHXAG-v6j0a0gdkuBmGqpUJllIrm79O6JjywRxq_zZh-oIAylgNjeoS4Umh8KtYn9aeKc44_htk7qk6VKxNpKfwX23i6_GcNM615XvGGZR7FSrrGEag2-V-BiZzWfXz9bV8knCknCmiQ9_vfmp',
  },
  {
    src: '/gallery-3.jpeg',
    alt: 'Excellence 3',
    title: 'Communal Exchange',
    description: 'Strategic partnerships forged in dialogue.',
    widthClass: 'md:w-[450px]',
    aspectClass: 'aspect-[4/5]',
    fallbackSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCgS2YSrysUHbpnIvN31aIjgkbyqj1J9biRBmMNgrliX5eIAUCuJyCup1Nn0nT3W42G0kjWPD5Ga3k2hk1MkSasc8PVcwMc8Qr-zoA2VV0Ikgodyt7tzwXhdKDokttPdV9hL_U5YD6GjBWECuS-oMxRBf_iDZ9pD20UdPIP_SDqE8ajxpsOH25H_PzuYBSmhU7AVrXADdgzRvXUL47YvV8fS_Bs2zGuAx31AExmd-EAvDr_H2fVzhz0pyWH0W15l4bOhDB2li7CH4hq',
  },
  {
    src: '/gallery-4.jpg',
    alt: 'Excellence 4',
    title: 'The Legacy Pavilion',
    description: 'Preserving cultural narratives for future generations.',
    widthClass: 'md:w-[650px]',
    aspectClass: 'aspect-[16/10]',
    fallbackSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9yN7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7',
  },
];

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
            The Visual Narrative
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

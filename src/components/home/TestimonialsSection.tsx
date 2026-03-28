import { useState } from 'react';

import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

type Accent = 'primary' | 'orange' | 'pink';

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  accent: Accent;
  imageSrc?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      'I came for the music, but I left with a new perspective on how cultural preservation can save ecosystems. Truly transformative.',
    author: 'Elena Rodriguez',
    role: 'Cultural Archivist, Madrid',
    accent: 'primary',
  },
  {
    quote:
      "Seeing the kids' hideout integrated with serious social dialogue was brilliant. It's a festival that respects the whole family.",
    author: 'Malik Al-Sayed',
    role: 'Entrepreneur, Dubai',
    accent: 'orange',
    imageSrc: '/gallery-1.jpeg',
  },
  {
    quote:
      'The Eight Dimensions layout allowed me to pace my experience perfectly. From soul-searching to high-energy dance, it had everything.',
    author: 'Sarah Jenkins',
    role: 'Lead Designer, London',
    accent: 'pink',
  },
  {
    quote:
      'The sustainability framework is not just a document; it is a living practice. Seeing the zero-waste initiatives in action was inspiring.',
    author: 'David Chen',
    role: 'Sustainability Consultant, Singapore',
    accent: 'primary',
  },
];

function TestimonialCard({ quote, author, role, accent, imageSrc }: Testimonial) {
  const colors: Record<Accent, { border: string; text: string }> = {
    primary: { border: 'border-primary', text: 'text-primary' },
    orange: { border: 'border-accent-orange', text: 'text-accent-orange' },
    pink: { border: 'border-accent-pink', text: 'text-accent-pink' },
  };
  const { border, text } = colors[accent];

  return (
    <div
      className={`overflow-hidden rounded-[2rem] border-t-4 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.08)] md:rounded-[2.75rem] ${border}`}
    >
      <div className={`flex flex-col ${imageSrc ? 'lg:flex-row' : ''}`}>
        {imageSrc && (
          <div className="lg:min-h-full lg:w-[34%]">
            <img
              src={imageSrc}
              alt={`${author} testimonial visual`}
              className="h-64 w-full object-cover lg:h-full"
              referrerPolicy="no-referrer"
            />
          </div>
        )}
        <div className="flex min-h-[26rem] flex-1 flex-col p-10 md:p-12">
          <Quote className={`${text} mb-8 shrink-0`} size={64} fill="currentColor" />
          <p className="mb-10 flex-grow text-2xl font-light italic leading-[1.5] text-slate-600 md:text-[2rem]">
            "{quote}"
          </p>
          <div className="mt-auto shrink-0">
            <h4 className="text-xl font-bold text-secondary">{author}</h4>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="overflow-hidden bg-surface py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-headline text-4xl font-extrabold leading-tight tracking-tight text-secondary md:text-5xl">
            Voices of Encounter
          </h2>
        </div>
        <div className="relative mx-auto max-w-6xl px-0 md:px-16">
          <button
            onClick={showPrevious}
            className="absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-secondary shadow-lg transition-all hover:border-primary hover:bg-primary hover:text-white md:h-14 md:w-14"
            aria-label="Show previous quote"
          >
            <ChevronLeft size={20} className="md:h-6 md:w-6" />
          </button>
          <button
            onClick={showNext}
            className="absolute right-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-secondary shadow-lg transition-all hover:border-primary hover:bg-primary hover:text-white md:h-14 md:w-14"
            aria-label="Show next quote"
          >
            <ChevronRight size={20} className="md:h-6 md:w-6" />
          </button>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <TestimonialCard {...testimonials[activeIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

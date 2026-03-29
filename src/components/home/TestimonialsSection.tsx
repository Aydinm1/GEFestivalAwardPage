import { useState } from 'react';

import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import TestimonialCard, { type TestimonialCardProps } from './TestimonialCard.tsx';
import PhotoLightbox from './PhotoLightbox.tsx';

const testimonials: TestimonialCardProps[] = [
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

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const testimonialImages = testimonials
    .map((testimonial) =>
      testimonial.imageSrc
        ? {
            src: testimonial.imageSrc,
            alt: testimonial.imageAlt ?? `${testimonial.author} testimonial visual`,
            title: testimonial.author,
            description: testimonial.role,
          }
        : null,
    )
    .filter((item): item is NonNullable<typeof item> => item !== null);

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
              <TestimonialCard
                {...testimonials[activeIndex]}
                onImageClick={
                  testimonials[activeIndex].imageSrc
                    ? () =>
                        setLightboxIndex(
                          testimonialImages.findIndex(
                            (item) => item.src === testimonials[activeIndex].imageSrc,
                          ),
                        )
                    : undefined
                }
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <PhotoLightbox
        items={testimonialImages}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrevious={() =>
          setLightboxIndex((current) =>
            current === null ? null : (current - 1 + testimonialImages.length) % testimonialImages.length,
          )
        }
        onNext={() =>
          setLightboxIndex((current) =>
            current === null ? null : (current + 1) % testimonialImages.length,
          )
        }
      />
    </section>
  );
}

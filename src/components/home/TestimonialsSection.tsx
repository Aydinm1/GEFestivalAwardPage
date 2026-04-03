import { useCallback, useEffect, useRef, useState } from 'react';

import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import TestimonialCard, { type TestimonialCardProps } from './TestimonialCard.tsx';

const testimonials: TestimonialCardProps[] = [
  {
    quote:
      'The Festival was beyond anything I could have imagined. I am so grateful for the all the hard work and intentionality that went into bringing the global Jamat together and showcasing the tremendous talent that exists in our community across so many countries.”',
    author: 'Farouk Sani',
    role: 'Attendee, United Kindom',
    accent: 'primary',
  },
  {
    quote:
      "لقد كان من افضل الامور… one of the best things that happened recently. As Ismailis from Syria, we felt we are still alive, that hope still exists, and the most beautiful thing was the feeling of pride in our Jamat, that we are global, special, and have so much energy.",
    author: 'Malik Al-Sayed',
    role: 'Attendee, Syria',
    accent: 'orange',
  },
  {
    quote:
      'This journey wasn’t easy. From endless Zoom calls, texts, emails, and urgent WhatsApp messages, we’ve been through it all. But what I’ll remember most is the love, support, and connection we shared. Thank you all for your continued patience and care. We weren’t always smiling, sometimes we cried too, but even those tears were important. They showed your passion, your strength, and your dedication to making this moment what it became.',
    author: 'Astha Aziz',
    role: 'Youth Volunteer, Dubai',
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
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<number | null>(null);

  const showNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  }, []);

  const startAutoscroll = useCallback(() => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(showNext, 5000);
  }, [showNext]);

  useEffect(() => {
    startAutoscroll();
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [startAutoscroll]);

  const showPrevious = () => {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
    startAutoscroll();
  };

  const handleShowNext = () => {
    showNext();
    startAutoscroll();
  };

  return (
    <section
      id="testimonials-section"
      className="relative overflow-hidden bg-guide-gold/5 py-20 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-guide-gold opacity-5"
        style={{
          maskImage: 'url(/voronoi.svg)',
          WebkitMaskImage: 'url(/voronoi.svg)',
          maskSize: '10rem',
          WebkitMaskSize: '10rem',
        }}
      />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-slate-50 to-transparent md:h-48" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-headline text-4xl font-extrabold leading-tight tracking-tight text-secondary md:text-5xl">
            Global Voices, Shared Journeys
          </h2>
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-12 md:px-16">
          <button
            onClick={showPrevious}
            className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-secondary shadow-lg transition-all hover:border-primary hover:bg-primary hover:text-white sm:flex md:h-14 md:w-14"
            aria-label="Show previous quote"
          >
            <ChevronLeft size={20} className="md:h-6 md:w-6" />
          </button>
          <button
            onClick={handleShowNext}
            className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-secondary shadow-lg transition-all hover:border-primary hover:bg-primary hover:text-white sm:flex md:h-14 md:w-14"
            aria-label="Show next quote"
          >
            <ChevronRight size={20} className="md:h-6 md:w-6" />
          </button>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: direction * 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <TestimonialCard
                {...testimonials[activeIndex]}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

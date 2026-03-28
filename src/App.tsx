/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { 
  Lightbulb, 
  UserRound, 
  Trophy, 
  HeartHandshake, 
  Microscope, 
  GraduationCap, 
  Briefcase, 
  Store,
  Quote,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Building2,
  Globe,
  Leaf,
  History,
  ArrowLeft,
  BarChart3,
  Users2,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type View = 'home' | 'impact' | 'legacy' | 'sustainability';

const Hero = ({ setView }: { setView: (v: View) => void }) => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
    <div className="absolute inset-0 z-0">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="auto"
        poster="/impact-image.jpeg"
        className="absolute min-w-full min-h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        <source src="https://assets.mixkit.co/videos/preview/mixkit-crowd-at-a-concert-40291-large.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-secondary/70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>
    </div>
    <div className="absolute top-6 left-6 right-6 z-20 flex justify-center md:justify-start">
      <button
        onClick={() => setView('home')}
        className="group flex items-center gap-4 rounded-[1.75rem] border border-white/25 bg-white/12 px-4 py-3 text-left backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.25)] transition-transform hover:scale-[1.02]"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-[1.25rem] border border-white/20 bg-white/90 shadow-inner shadow-white/60">
          <img 
            src="/logo.png" 
            alt="Global Encounters Logo" 
            className="h-11 w-11 object-contain drop-shadow-[0_8px_16px_rgba(35,118,188,0.35)]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <div className="font-headline text-xl font-extrabold tracking-tight text-white">Global Encounters Festival</div>
        </div>
      </button>
    </div>
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 text-center max-w-5xl px-6 pt-28"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-bold tracking-widest uppercase mb-8">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Celebrating A Legacy of Excellence
      </div>
      <h1 className="font-headline font-extrabold text-white leading-[1.1] mb-8 text-5xl md:text-8xl tracking-tight">
        The Global Stage for <span className="text-primary">Human Potential</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
        Where culture, sports, and knowledge converge to create unprecedented social impact.
      </p>
      <div className="mt-12 flex flex-col items-center gap-4">
        <div className="text-xs font-bold uppercase tracking-[0.35em] text-slate-300">Explore The Story</div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            { id: 'impact', label: 'Impact' },
            { id: 'legacy', label: 'Legacy' },
            { id: 'sustainability', label: 'Sustainability' },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => setView(link.id as View)}
              className="rounded-full border border-white/25 bg-white/12 px-6 py-3 font-headline text-sm font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md transition-all hover:border-primary hover:bg-primary hover:shadow-[0_20px_40px_rgba(35,118,188,0.35)]"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

const DimensionItem = ({ icon: Icon, value, label, description, colorClass }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="flex flex-col items-center text-center"
  >
    <div className={`${colorClass} flex items-center justify-center mb-6`}>
      <Icon className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />
    </div>
    <div className="text-4xl font-black text-secondary font-headline mb-2">{value}</div>
    <div className="text-sm font-bold text-primary uppercase tracking-widest mb-4">{label}</div>
    <p className="text-slate-500 text-sm leading-relaxed font-medium">{description}</p>
  </motion.div>
);

const DimensionsGrid = () => {
  const dimensions = [
    { icon: Lightbulb, value: "120+", label: "Thought Leaders", description: "International symposiums and knowledge-sharing workshops.", colorClass: "text-primary" },
    { icon: UserRound, value: "45k", label: "Participants", description: "Holistic wellness programs rooted in cultural heritage.", colorClass: "text-purple-600" },
    { icon: Trophy, value: "3,500+", label: "Athletes", description: "Elite multi-sport competitions across 20+ disciplines.", colorClass: "text-orange-600" },
    { icon: HeartHandshake, value: "12M", label: "USD Impact", description: "Direct investment in community development initiatives.", colorClass: "text-red-600" },
    { icon: Microscope, value: "15+", label: "Research Partners", description: "Advancing the science of human health and longevity.", colorClass: "text-green-600" },
    { icon: GraduationCap, value: "85+", label: "Workshops", description: "Nurturing the next generation of global citizens.", colorClass: "text-yellow-600" },
    { icon: Briefcase, value: "500+", label: "Global Dignitaries", description: "Exclusive networking for policy makers and industry heads.", colorClass: "text-slate-600" },
    { icon: Store, value: "200+", label: "Artisans", description: "Empowering sustainable micro-economies worldwide.", colorClass: "text-teal-600" },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-6 bg-white">
      <img
        src="/pattern.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top opacity-[0.07] mix-blend-multiply"
      />
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20 flex justify-center">
          <div className="max-w-2xl text-center">
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-secondary mb-6 tracking-tight leading-tight">The Eight Dimensions of Engagement</h2>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">A meticulously curated ecosystem designed to foster elite performance, cultural preservation, and social innovation across eight distinct pillars.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 md:gap-y-16">
          {dimensions.map((d, i) => <DimensionItem key={i} {...d} />)}
        </div>
      </div>
    </section>
  );
};

const ImpactSection = () => (
  <section className="py-20 md:py-32 px-6 bg-secondary text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none hidden md:block">
      <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,200 Q100,0 200,200 T400,200" fill="none" stroke="white" strokeWidth="2"></path>
      </svg>
    </div>
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
      <div className="w-full lg:w-1/2 relative">
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-3xl group-hover:bg-primary/30 transition-all"></div>
          <img 
            alt="Excellence in Action" 
            className="relative rounded-2xl shadow-3xl grayscale-[20%] hover:grayscale-0 transition-all duration-1000 w-full object-cover aspect-[4/5]" 
            src="/impact-image.jpeg"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://lh3.googleusercontent.com/aida-public/AB6AXuDk8ZIzKYL_1frPuMJq9AiU0XY1_p_8lGJJcTv1UUu5ph04qPCN9nvzDXwkxe4hPVkp2xt9amLdr1Ol72ZfiUZUJF5whDC002Rao8oQmU_wcnjsKuT89y-dw_v60WbcuP2FyfyjKVs_Jhs-ptqAVpDK2czBFcGn6YOmt0to5lVGD5w6m6H35LvkKZm92Qo6hXTQLS7A4RllcfRqdR65pOwmPwh6JKM03MFjfi6OHzap2v7vUlRNuFqw8FOGlNmFWD4iT-p0pp9BzCXe";
            }}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 space-y-8 md:space-y-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-blue-100 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Our Global Vision</div>
        <h2 className="font-headline text-3xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">Redefining Unity Through Excellence.</h2>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
          Global Encounters is more than a festival; it is a biennial commitment to the elevation of the human spirit. Our mission is to bridge geographic and socio-economic divides by creating a platform where elite talent meets grassroots impact.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-4 md:py-6">
          <div>
            <h4 className="text-primary font-bold text-lg mb-2">Sustainable Legacy</h4>
            <p className="text-sm text-slate-400">Carbon-neutral operations with lasting infrastructure for host cities.</p>
          </div>
          <div>
            <h4 className="text-primary font-bold text-lg mb-2">Elite Competition</h4>
            <p className="text-sm text-slate-400">Sanctioned sporting events featuring world-class officiating and talent.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialCard = ({
  quote,
  author,
  role,
  accent,
  imageSrc,
}: {
  quote: string,
  author: string,
  role: string,
  accent: 'primary' | 'orange' | 'pink',
  imageSrc?: string,
}) => {
  const colors = {
    primary: { border: 'border-primary', text: 'text-primary' },
    orange: { border: 'border-accent-orange', text: 'text-accent-orange' },
    pink: { border: 'border-accent-pink', text: 'text-accent-pink' },
  };
  
  const { border, text } = colors[accent];

  return (
    <div className={`overflow-hidden rounded-[2rem] md:rounded-[2.75rem] bg-white shadow-[0_25px_70px_rgba(15,23,42,0.08)] border-t-4 ${border}`}>
      <div className={`flex flex-col ${imageSrc ? 'lg:flex-row' : ''}`}>
        {imageSrc && (
          <div className="lg:w-[34%] lg:min-h-full">
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
          <p className="text-2xl md:text-[2rem] italic text-slate-600 mb-10 leading-[1.5] flex-grow font-light">
            "{quote}"
          </p>
          <div className="mt-auto shrink-0">
            <h4 className="font-bold text-secondary text-xl">{author}</h4>
            <p className="text-sm text-slate-400 font-medium uppercase tracking-[0.18em] mt-2">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I came for the music, but I left with a new perspective on how cultural preservation can save ecosystems. Truly transformative.",
      author: "Elena Rodriguez",
      role: "Cultural Archivist, Madrid",
      accent: "primary" as const,
    },
    {
      quote: "Seeing the kids' hideout integrated with serious social dialogue was brilliant. It's a festival that respects the whole family.",
      author: "Malik Al-Sayed",
      role: "Entrepreneur, Dubai",
      accent: "orange" as const,
      imageSrc: "/gallery-1.jpeg",
    },
    {
      quote: "The Eight Dimensions layout allowed me to pace my experience perfectly. From soul-searching to high-energy dance, it had everything.",
      author: "Sarah Jenkins",
      role: "Lead Designer, London",
      accent: "pink" as const,
    },
    {
      quote: "The sustainability framework is not just a document; it's a living practice. Seeing the zero-waste initiatives in action was inspiring.",
      author: "David Chen",
      role: "Sustainability Consultant, Singapore",
      accent: "primary" as const,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-20 md:py-32 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-secondary leading-tight">Voices of Encounter</h2>
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
              <TestimonialCard {...activeTestimonial} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      
      if (direction === 'right') {
        // If we're at the end (within a small buffer), jump to the beginning
        if (scrollLeft + clientWidth >= scrollWidth - 50) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollTo({ left: scrollLeft + clientWidth, behavior: 'smooth' });
        }
      } else {
        // If we're at the beginning, jump to the end
        if (scrollLeft <= 50) {
          scrollRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollTo({ left: scrollLeft - clientWidth, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <section className="py-20 md:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-secondary tracking-tight leading-tight">The Visual Narrative</h2>
          <p className="text-slate-500 mt-4 text-base md:text-lg">Capturing the human connection through high-resolution candid photography of festival participants, cultural exchanges, and large-scale art installations.</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all group cursor-pointer"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>
        </div>
      </div>
      <div 
        ref={scrollRef}
        className="flex gap-6 md:gap-8 px-6 md:px-8 overflow-x-auto no-scrollbar pb-12 snap-x snap-mandatory"
      >
        <div className="flex-none w-[80vw] md:w-[450px] aspect-[4/5] rounded-2xl overflow-hidden relative group snap-start">
          <img 
            alt="Excellence 1" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
            src="/gallery-1.jpeg"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://lh3.googleusercontent.com/aida-public/AB6AXuBZY4EsN3lHSWqPBU3bah5KczhrG7-ammz3rgfPT2Rk4MGgWkfjBnMJ9G76_kNAKIrbk_43PE_Uaw44zjRo1J6NQUyBakcJzm3wYijRb-254jjNU34uTlKw5RnaE6gKjfzdnCN3NBd1WiU6WJI0Z75oTUxO-axzxVBmSU9amLxtT5KzAqwwBHKewqlnBqR1YMEyLETo-wFzpoyej4Kfe1zOwTBL4kTpEodR9X80pyi-0ponnz4v1rk1O5BpDIQg10hHxngu0fgivSHF";
            }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 md:p-8">
            <h4 className="text-white font-bold text-lg md:text-xl">Main Arena Production</h4>
            <p className="text-white/70 text-xs md:text-sm">A synthesis of technology and performance.</p>
          </div>
        </div>
        <div className="flex-none w-[80vw] md:w-[650px] aspect-[16/10] rounded-2xl overflow-hidden relative group snap-start">
          <img 
            alt="Excellence 2" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
            src="/gallery-2.jpg"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://lh3.googleusercontent.com/aida-public/AB6AXuDOm1aw4D9QDoqDMitMjql0fLZKUTpzCG4G1e9G4lSqHGHHbFvN1KqYuTE9Vt8DMmTl7_0ZQ0PSZUVxIO76eS4rnlAezS8Sgi6vMxAqe-9z611f9ByzUfxeRUxsbMbHXAG-v6j0a0gdkuBmGqpUJllIrm79O6JjywRxq_zZh-oIAylgNjeoS4Umh8KtYn9aeKc44_htk7qk6VKxNpKfwX23i6_GcNM615XvGGZR7FSrrGEag2-V-BiZzWfXz9bV8knCknCmiQ9_vfmp";
            }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 md:p-8">
            <h4 className="text-white font-bold text-lg md:text-xl">The Cultural Pavilion</h4>
            <p className="text-white/70 text-xs md:text-sm">Where heritage meets modern architecture.</p>
          </div>
        </div>
        <div className="flex-none w-[80vw] md:w-[450px] aspect-[4/5] rounded-2xl overflow-hidden relative group snap-start">
          <img 
            alt="Excellence 3" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
            src="/gallery-3.jpeg"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://lh3.googleusercontent.com/aida-public/AB6AXuCgS2YSrysUHbpnIvN31aIjgkbyqj1J9biRBmMNgrliX5eIAUCuJyCup1Nn0nT3W42G0kjWPD5Ga3k2hk1MkSasc8PVcwMc8Qr-zoA2VV0Ikgodyt7tzwXhdKDokttPdV9hL_U5YD6GjBWECuS-oMxRBf_iDZ9pD20UdPIP_SDqE8ajxpsOH25H_PzuYBSmhU7AVrXADdgzRvXUL47YvV8fS_Bs2zGuAx31AExmd-EAvDr_H2fVzhz0pyWH0W15l4bOhDB2li7CH4hq";
            }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 md:p-8">
            <h4 className="text-white font-bold text-xl">Communal Exchange</h4>
            <p className="text-white/70 text-xs md:text-sm">Strategic partnerships forged in dialogue.</p>
          </div>
        </div>
        <div className="flex-none w-[80vw] md:w-[650px] aspect-[16/10] rounded-2xl overflow-hidden relative group snap-start">
          <img 
            alt="Excellence 4" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
            src="/gallery-4.jpg"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://lh3.googleusercontent.com/aida-public/AB6AXuD9yN7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7";
            }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 md:p-8">
            <h4 className="text-white font-bold text-xl">The Legacy Pavilion</h4>
            <p className="text-white/70 text-xs md:text-sm">Preserving cultural narratives for future generations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-secondary text-white pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 w-full mb-16">
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <img 
            src="/logo.png" 
            alt="Global Encounters Logo" 
            className="w-10 h-10 object-contain"
            referrerPolicy="no-referrer"
          />
          <span className="text-xl font-bold tracking-tight">Global Encounters</span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          A prestigious global platform dedicated to cultural exchange, sports excellence, and measurable social impact.
        </p>
      </div>
      <div className="space-y-6">
        <h4 className="font-bold text-white uppercase text-xs tracking-widest">Impact Pillars</h4>
        <ul className="space-y-3 text-sm text-slate-400">
          <li><a href="#" className="hover:text-primary transition-colors">Sustainability Framework</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Economic Resilience</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Social Integration</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Education & Knowledge</a></li>
        </ul>
      </div>
      <div className="space-y-6">
        <h4 className="font-bold text-white uppercase text-xs tracking-widest">Resources</h4>
        <ul className="space-y-3 text-sm text-slate-400">
          <li><a href="#" className="hover:text-primary transition-colors">Brand Guidelines</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Award Nominations</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Press Kit</a></li>
        </ul>
      </div>
      <div className="space-y-6">
        <h4 className="font-bold text-white uppercase text-xs tracking-widest">Partner Excellence</h4>
        <div className="flex items-center gap-3 text-sm text-slate-400 p-4 border border-white/10 rounded-xl">
          <Building2 className="text-primary" />
          <span>Aga Khan Development Network</span>
        </div>
        <div className="pt-4">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mb-4">Institutional Subscription</p>
          <div className="flex border-b border-white/20 pb-2">
            <input 
              type="email" 
              className="bg-transparent border-none focus:outline-none text-sm w-full text-white placeholder:text-slate-600" 
              placeholder="Organization Email" 
            />
            <button className="text-primary cursor-pointer"><ArrowRight size={20} /></button>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-8 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-slate-500 text-xs">
        © 2025 Global Encounters Festival. Strategic Excellence in Culture & Sport.
      </p>
      <div className="flex gap-8 text-xs text-slate-500">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Governance</a>
        <a href="#" className="hover:text-white transition-colors">Accessibility</a>
      </div>
    </div>
  </footer>
);

const ImpactPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-white min-h-screen"
  >
    <div className="bg-secondary py-20 px-6 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Globe className="w-full h-full scale-150" />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <button onClick={onBack} className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:gap-4 transition-all cursor-pointer">
          <ArrowLeft size={20} /> Back to Home
        </button>
        <h1 className="text-5xl md:text-7xl font-headline font-extrabold mb-6 tracking-tight text-white">The Data of Human Potential</h1>
        <p className="text-xl text-slate-300 font-light">Measuring the measurable, and celebrating the immeasurable.</p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
          <BarChart3 className="text-primary mb-6" size={40} />
          <h3 className="text-4xl font-black text-secondary mb-2">$12.4M</h3>
          <p className="text-slate-500 font-medium">Direct Community Investment</p>
        </div>
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
          <Users2 className="text-accent-orange" size={40} />
          <h3 className="text-4xl font-black text-secondary mb-2">45,000+</h3>
          <p className="text-slate-500 font-medium">Active Participants Globally</p>
        </div>
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
          <Zap className="text-accent-pink" size={40} />
          <h3 className="text-4xl font-black text-secondary mb-2">92%</h3>
          <p className="text-slate-500 font-medium">Positive Social Outcome Rate</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-headline font-extrabold text-secondary mb-8">Global Reach, Local Impact</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Our impact framework is built on three pillars: Economic Resilience, Social Integration, and Cultural Preservation. We don't just host events; we build ecosystems.
          </p>
          <ul className="space-y-4">
            {['Micro-grants for local artisans', 'Scholarships for youth athletes', 'Cultural archival technology grants'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-secondary font-bold">
                <div className="w-2 h-2 rounded-full bg-primary"></div> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[3rem] overflow-hidden shadow-2xl">
          <img src="https://picsum.photos/seed/impact/1200/800" alt="Impact Map" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </div>
    </div>
  </motion.div>
);

const LegacyPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-surface min-h-screen"
  >
    <div className="bg-slate-900 py-24 px-6 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:gap-4 transition-all cursor-pointer">
          <ArrowLeft size={20} /> Back to Home
        </button>
        <h1 className="text-5xl md:text-7xl font-headline font-extrabold mb-6 tracking-tight text-white">The Generational Thread</h1>
        <p className="text-xl text-slate-400 font-light italic">"We are the ancestors of the future."</p>
      </div>
    </div>

    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="space-y-20 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block"></div>
        
        {[
          { year: '1982', title: 'The First Gathering', desc: 'A modest exchange of music and sport in the heart of East Africa.' },
          { year: '2005', title: 'Digital Integration', desc: 'Launching the first global knowledge-sharing platform for artisans.' },
          { year: '2025', title: 'The Global Stage', desc: 'Uniting 120+ nations in a synthesis of technology and tradition.' }
        ].map((event, i) => (
          <div key={i} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
            <div className="flex-1 text-center md:text-right">
              {i % 2 !== 0 && <div className="hidden md:block"></div>}
              {i % 2 === 0 && (
                <>
                  <span className="text-primary font-black text-5xl font-headline block mb-4">{event.year}</span>
                  <h3 className="text-2xl font-bold text-secondary mb-4">{event.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{event.desc}</p>
                </>
              )}
            </div>
            <div className="w-12 h-12 rounded-full bg-white border-4 border-primary z-10 hidden md:flex items-center justify-center">
              <History size={20} className="text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              {i % 2 === 0 && <div className="hidden md:block"></div>}
              {i % 2 !== 0 && (
                <>
                  <span className="text-primary font-black text-5xl font-headline block mb-4">{event.year}</span>
                  <h3 className="text-2xl font-bold text-secondary mb-4">{event.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{event.desc}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const SustainabilityPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-white min-h-screen"
  >
    <div className="bg-emerald-900 py-24 px-6 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Leaf className="w-full h-full scale-125" />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <button onClick={onBack} className="inline-flex items-center gap-2 text-emerald-400 font-bold mb-8 hover:gap-4 transition-all cursor-pointer">
          <ArrowLeft size={20} /> Back to Home
        </button>
        <h1 className="text-5xl md:text-7xl font-headline font-extrabold mb-6 tracking-tight text-white">The Zero-Waste Roadmap</h1>
        <p className="text-xl text-emerald-100 font-light">Stewardship of the earth as a cultural imperative.</p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
        <div className="rounded-[3rem] overflow-hidden aspect-square">
          <img src="https://picsum.photos/seed/nature/1000/1000" alt="Sustainability" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div>
          <h2 className="text-4xl font-headline font-extrabold text-secondary mb-8">Our 2025 Commitments</h2>
          <div className="space-y-8">
            {[
              { title: 'Carbon Neutrality', desc: '100% of festival energy sourced from local solar and wind farms.' },
              { title: 'Circular Economy', desc: 'Zero single-use plastics. All catering materials are compostable on-site.' },
              { title: 'Ethical Sourcing', desc: '90% of all food and materials sourced within a 100-mile radius.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <Leaf className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2">{item.title}</h4>
                  <p className="text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [view, setView] = useState<View>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/20 selection:text-primary">
      <AnimatePresence mode="wait">
        {view === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero setView={setView} />
            <DimensionsGrid />
            <ImpactSection />
            <Testimonials />
            <Gallery />
          </motion.div>
        )}

        {view === 'impact' && <ImpactPage key="impact" onBack={() => setView('home')} />}
        {view === 'legacy' && <LegacyPage key="legacy" onBack={() => setView('home')} />}
        {view === 'sustainability' && <SustainabilityPage key="sustainability" onBack={() => setView('home')} />}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

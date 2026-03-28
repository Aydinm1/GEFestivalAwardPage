import { useState } from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

type ImpactStory = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  fallbackSrc: string;
  glowClass: string;
  badgeClass: string;
  headingClass: string;
  points: Array<{
    title: string;
    description: string;
  }>;
};

const impactStories: ImpactStory[] = [
  {
    eyebrow: 'Our Global Vision',
    title: 'Redefining Unity Through Excellence.',
    description:
      'Global Encounters is more than a festival; it is a biennial commitment to the elevation of the human spirit. Our mission is to bridge geographic and socio-economic divides by creating a platform where elite talent meets grassroots impact.',
    imageSrc: '/impact-image.jpeg',
    fallbackSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDk8ZIzKYL_1frPuMJq9AiU0XY1_p_8lGJJcTv1UUu5ph04qPCN9nvzDXwkxe4hPVkp2xt9amLdr1Ol72ZfiUZUJF5whDC002Rao8oQmU_wcnjsKuT89y-dw_v60WbcuP2FyfyjKVs_Jhs-ptqAVpDK2czBFcGn6YOmt0to5lVGD5w6m6H35LvkKZm92Qo6hXTQLS7A4RllcfRqdR65pOwmPwh6JKM03MFjfi6OHzap2v7vUlRNuFqw8FOGlNmFWD4iT-p0pp9BzCXe',
    glowClass: 'bg-primary/25',
    badgeClass: 'border-primary/30 bg-primary/20 text-blue-100',
    headingClass: 'text-primary',
    points: [
      {
        title: 'Sustainable Legacy',
        description: 'Carbon-neutral operations with lasting infrastructure for host cities.',
      },
      {
        title: 'Elite Competition',
        description: 'Sanctioned sporting events featuring world-class officiating and talent.',
      },
    ],
  },
  {
    eyebrow: 'Cultural Exchange',
    title: 'Creative Dialogue Across Every Border.',
    description:
      'Residencies, live showcases, and shared learning spaces are designed to make cross-cultural collaboration visible, immediate, and memorable for every audience segment.',
    imageSrc: '/gallery-2.jpg',
    fallbackSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDOm1aw4D9QDoqDMitMjql0fLZKUTpzCG4G1e9G4lSqHGHHbFvN1KqYuTE9Vt8DMmTl7_0ZQ0PSZUVxIO76eS4rnlAezS8Sgi6vMxAqe-9z611f9ByzUfxeRUxsbMbHXAG-v6j0a0gdkuBmGqpUJllIrm79O6JjywRxq_zZh-oIAylgNjeoS4Umh8KtYn9aeKc44_htk7qk6VKxNpKfwX23i6_GcNM615XvGGZR7FSrrGEag2-V-BiZzWfXz9bV8knCknCmiQ9_vfmp',
    glowClass: 'bg-guide-teal/25',
    badgeClass: 'border-guide-teal/30 bg-guide-teal/20 text-teal-100',
    headingClass: 'text-guide-teal',
    points: [
      {
        title: 'Living Heritage',
        description: 'Artists and tradition-bearers co-create work that feels rooted rather than staged.',
      },
      {
        title: 'Shared Learning',
        description: 'Dialogue sessions connect institutions, creators, and young participants in real time.',
      },
    ],
  },
  {
    eyebrow: 'Community Impact',
    title: 'Investment That Extends Beyond The Event.',
    description:
      'The program architecture channels festival attention into measurable community outcomes, from micro-enterprise support to health and education partnerships that continue after the closing ceremony.',
    imageSrc: '/gallery-3.jpeg',
    fallbackSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCgS2YSrysUHbpnIvN31aIjgkbyqj1J9biRBmMNgrliX5eIAUCuJyCup1Nn0nT3W42G0kjWPD5Ga3k2hk1MkSasc8PVcwMc8Qr-zoA2VV0Ikgodyt7tzwXhdKDokttPdV9hL_U5YD6GjBWECuS-oMxRBf_iDZ9pD20UdPIP_SDqE8ajxpsOH25H_PzuYBSmhU7AVrXADdgzRvXUL47YvV8fS_Bs2zGuAx31AExmd-EAvDr_H2fVzhz0pyWH0W15l4bOhDB2li7CH4hq',
    glowClass: 'bg-guide-gold/25',
    badgeClass: 'border-guide-gold/30 bg-guide-gold/20 text-amber-100',
    headingClass: 'text-guide-gold',
    points: [
      {
        title: 'Local Enterprise',
        description: 'Vendor strategy prioritizes artisans and mission-aligned small businesses.',
      },
      {
        title: 'Research Partnerships',
        description: 'Health and knowledge initiatives turn participation into long-term collaboration.',
      },
    ],
  },
  {
    eyebrow: 'Youth Momentum',
    title: 'Next-Generation Leadership In Motion.',
    description:
      'Youth athletes, students, and emerging leaders are given high-visibility platforms that combine mentorship, performance, and direct access to international networks.',
    imageSrc: '/gallery-4.jpg',
    fallbackSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9yN7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7',
    glowClass: 'bg-guide-magenta/25',
    badgeClass: 'border-guide-magenta/30 bg-guide-magenta/20 text-pink-100',
    headingClass: 'text-guide-magenta',
    points: [
      {
        title: 'Youth Access',
        description: 'Scholarships and guided pathways make elite participation more equitable.',
      },
      {
        title: 'Global Mentors',
        description: 'Students engage directly with dignitaries, coaches, and industry leaders.',
      },
    ],
  },
];

export default function ImpactSection() {
  const [activeStory, setActiveStory] = useState(0);
  const story = impactStories[activeStory];

  const goToPreviousStory = () => {
    setActiveStory((current) => (current === 0 ? impactStories.length - 1 : current - 1));
  };

  const goToNextStory = () => {
    setActiveStory((current) => (current === impactStories.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="relative overflow-hidden bg-secondary px-6 py-20 text-white md:py-32">
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 opacity-10 md:block">
        <svg className="h-full w-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,200 Q100,0 200,200 T400,200" fill="none" stroke="white" strokeWidth="2" />
        </svg>
      </div>
      <button
        onClick={goToPreviousStory}
        aria-label="Previous story"
        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-secondary/70 text-white backdrop-blur-md transition-all hover:border-guide-light-blue hover:bg-guide-light-blue/20 md:left-6 md:h-14 md:w-14"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNextStory}
        aria-label="Next story"
        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-secondary/70 text-white backdrop-blur-md transition-all hover:border-guide-yellow hover:bg-guide-yellow/20 md:right-6 md:h-14 md:w-14"
      >
        <ChevronRight size={24} />
      </button>
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row lg:gap-24">
        <div className="relative w-full lg:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={story.imageSrc}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="group relative"
            >
              <div className={`absolute -inset-4 rounded-2xl blur-3xl transition-all ${story.glowClass}`} />
              <img
                alt={story.title}
                className="shadow-3xl relative aspect-[4/5] w-full rounded-2xl object-cover grayscale-[10%] transition-all duration-1000 hover:grayscale-0"
                src={story.imageSrc}
                onError={(event) => {
                  (event.target as HTMLImageElement).src = story.fallbackSrc;
                }}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="w-full space-y-8 md:space-y-10 lg:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={story.eyebrow}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className={`inline-flex rounded-full border px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] md:text-xs ${story.badgeClass}`}
            >
              {story.eyebrow}
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="space-y-8 md:space-y-10"
            >
              <div>
                <h2 className="font-headline text-3xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
                  {story.title}
                </h2>
                <p className="mt-6 text-lg font-light leading-relaxed text-slate-300 md:text-xl">
                  {story.description}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 py-4 sm:grid-cols-2 md:py-6">
                {story.points.map((point) => (
                  <div key={point.title}>
                    <h4 className={`mb-2 text-lg font-bold ${story.headingClass}`}>{point.title}</h4>
                    <p className="text-sm text-slate-400">{point.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

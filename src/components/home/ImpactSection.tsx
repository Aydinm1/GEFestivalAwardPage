import { useState } from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImpactStoryPanel, { type ImpactStory } from './ImpactStoryPanel.tsx';

type ImpactStoryTheme = {
  sectionClass: string;
  ambientLeftClass: string;
  ambientRightClass: string;
  arrowButtonClass: string;
};

type ImpactStorySlide = ImpactStoryTheme & ImpactStory;

const impactStories: ImpactStorySlide[] = [
  {
    eyebrow: 'Our Global Vision',
    title: 'Redefining Unity Through Excellence.',
    description:
      'Global Encounters is more than a festival; it is a biennial commitment to the elevation of the human spirit. Our mission is to bridge geographic and socio-economic divides by creating a platform where elite talent meets grassroots impact.',
    sectionClass: 'bg-primary',
    ambientLeftClass: 'bg-guide-light-blue/18',
    ambientRightClass: 'bg-secondary/10',
    arrowButtonClass: 'bg-primary/55 hover:bg-primary/72',
    imageSrc: '/impact-image.jpeg',
    fallbackSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDk8ZIzKYL_1frPuMJq9AiU0XY1_p_8lGJJcTv1UUu5ph04qPCN9nvzDXwkxe4hPVkp2xt9amLdr1Ol72ZfiUZUJF5whDC002Rao8oQmU_wcnjsKuT89y-dw_v60WbcuP2FyfyjKVs_Jhs-ptqAVpDK2czBFcGn6YOmt0to5lVGD5w6m6H35LvkKZm92Qo6hXTQLS7A4RllcfRqdR65pOwmPwh6JKM03MFjfi6OHzap2v7vUlRNuFqw8FOGlNmFWD4iT-p0pp9BzCXe',
    glowClass: 'bg-primary/25',
    badgeClass: 'border-primary/30 bg-primary/20 text-blue-100',
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
    sectionClass: 'bg-guide-teal',
    ambientLeftClass: 'bg-guide-light-blue/16',
    ambientRightClass: 'bg-primary/10',
    arrowButtonClass: 'bg-guide-teal/55 hover:bg-guide-teal/72',
    imageSrc: '/gallery-2.jpg',
    fallbackSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDOm1aw4D9QDoqDMitMjql0fLZKUTpzCG4G1e9G4lSqHGHHbFvN1KqYuTE9Vt8DMmTl7_0ZQ0PSZUVxIO76eS4rnlAezS8Sgi6vMxAqe-9z611f9ByzUfxeRUxsbMbHXAG-v6j0a0gdkuBmGqpUJllIrm79O6JjywRxq_zZh-oIAylgNjeoS4Umh8KtYn9aeKc44_htk7qk6VKxNpKfwX23i6_GcNM615XvGGZR7FSrrGEag2-V-BiZzWfXz9bV8knCknCmiQ9_vfmp',
    glowClass: 'bg-guide-teal/25',
    badgeClass: 'border-guide-teal/30 bg-guide-teal/20 text-teal-100',
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
    sectionClass: 'bg-[#ae8850]',
    ambientLeftClass: 'bg-guide-yellow/12',
    ambientRightClass: 'bg-secondary/10',
    arrowButtonClass: 'bg-[#ae8850]/60 hover:bg-[#ae8850]/78',
    imageSrc: '/gallery-3.jpeg',
    fallbackSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCgS2YSrysUHbpnIvN31aIjgkbyqj1J9biRBmMNgrliX5eIAUCuJyCup1Nn0nT3W42G0kjWPD5Ga3k2hk1MkSasc8PVcwMc8Qr-zoA2VV0Ikgodyt7tzwXhdKDokttPdV9hL_U5YD6GjBWECuS-oMxRBf_iDZ9pD20UdPIP_SDqE8ajxpsOH25H_PzuYBSmhU7AVrXADdgzRvXUL47YvV8fS_Bs2zGuAx31AExmd-EAvDr_H2fVzhz0pyWH0W15l4bOhDB2li7CH4hq',
    glowClass: 'bg-guide-gold/18',
    badgeClass: 'border-secondary/25 bg-secondary/20 text-white',
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
    sectionClass: 'bg-[#b43f7d]',
    ambientLeftClass: 'bg-guide-purple/14',
    ambientRightClass: 'bg-primary/10',
    arrowButtonClass: 'bg-[#b43f7d]/60 hover:bg-[#b43f7d]/78',
    imageSrc: '/gallery-4.jpg',
    fallbackSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9yN7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7',
    glowClass: 'bg-guide-magenta/18',
    badgeClass: 'border-guide-magenta/30 bg-guide-magenta/20 text-pink-100',
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
    <section
      className={`relative overflow-hidden px-6 py-20 text-white transition-colors duration-700 md:py-32 ${story.sectionClass}`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute -left-20 top-[-8%] h-96 w-96 rounded-full opacity-75 blur-[120px] transition-colors duration-700 md:h-[34rem] md:w-[34rem] ${story.ambientLeftClass}`}
        />
        <div
          className={`absolute -right-16 bottom-[-12%] h-96 w-96 rounded-full opacity-70 blur-[120px] transition-colors duration-700 md:h-[34rem] md:w-[34rem] ${story.ambientRightClass}`}
        />
        <div className="absolute inset-x-[16%] top-0 hidden h-full w-20 -skew-x-12 bg-white/6 md:block" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(0,0,0,0.28))]" />
      </div>
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 opacity-10 md:block">
        <svg className="h-full w-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,200 Q100,0 200,200 T400,200" fill="none" stroke="white" strokeWidth="2" />
        </svg>
      </div>
      <button
        onClick={goToPreviousStory}
        aria-label="Previous story"
        className={`absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white backdrop-blur-md transition-all hover:border-white/40 md:left-6 md:h-14 md:w-14 ${story.arrowButtonClass}`}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNextStory}
        aria-label="Next story"
        className={`absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white backdrop-blur-md transition-all hover:border-white/40 md:right-6 md:h-14 md:w-14 ${story.arrowButtonClass}`}
      >
        <ChevronRight size={24} />
      </button>
      <ImpactStoryPanel story={story} />
    </section>
  );
}

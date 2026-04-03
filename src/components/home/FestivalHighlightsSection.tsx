import { AnimatePresence, motion } from 'motion/react';
import { Dispatch, SetStateAction, useState } from 'react';
import FestivalHighlightPanel, { type FestivalHighlight } from './FestivalHighlightPanel.tsx';

type FestivalHighlightTheme = {
  sectionClass: string;
  ambientLeftClass: string;
  ambientRightClass: string;
};

type FestivalHighlightSlide = FestivalHighlightTheme & FestivalHighlight;

export const festivalHighlights: FestivalHighlightSlide[] = [
  {
    eyebrow: 'Festival Overview',
    title: 'The Global Encounters Festival',
    description: 'Global Encounters is more than a festival; it is a global movement that brings people together across cultures, geographies and disciplines—using sport, arts and dialogue to foster meaningful connection and lasting global impact.',
    sectionClass: 'bg-primary',
    ambientLeftClass: 'bg-guide-light-blue/18',
    ambientRightClass: 'bg-secondary/10',
    videoSrc: '/video-main.mp4',
    posterSrc: '/video-main-still.png',
    glowClass: 'bg-primary/25',
    badgeClass: 'border-primary/30 bg-primary/20 text-blue-100',
    points: [
      {
        title: 'Sustainable Legacy',
        description: 'Designed to leave lasting impact through responsible practices and enduring community value',
      },
      {
        title: 'Global Excellence',
        description: 'World-class talent and standards that elevate performance and inspire participation',
      },
    ],
  },
  {
    eyebrow: 'AKDN Pavilion',
    title: 'AKDN Pavilion',
    description:
      'An immersive space showcasing the development work of the Aga Khan Development Network. Through exhibits, talks and live experiences, the pavilion connected global perspectives and made social impact tangible and accessible.',
    sectionClass: 'bg-guide-teal',
    ambientLeftClass: 'bg-guide-light-blue/16',
    ambientRightClass: 'bg-primary/10',
    videoSrc: '/video-AKDN.mp4',
    posterSrc: '/video-akdn-still.jpg',
    glowClass: 'bg-guide-teal/25',
    badgeClass: 'border-guide-teal/30 bg-guide-teal/20 text-teal-100',
    points: [
      {
        title: 'Lived Heritage',
        description: 'Tradition met innovation through storytelling, art and lived cultural expression.',
      },
      {
        title: 'Shared learning',
        description: 'Dialogue that connected institutions, creators and communities in real time.',
      },
    ],
  },
  {
    eyebrow: 'Jubilee Games',
    title: 'Jubilee Games',
    description:'Larger than the winter olympics, bringing together athletes from more than 60 countries around the world.  Designed not only for competition, but to foster unity, resilience and lifelong connection through sport.',
    sectionClass: 'bg-[#ae8850]',
    ambientLeftClass: 'bg-guide-yellow/12',
    ambientRightClass: 'bg-secondary/10',
    videoSrc: '/video-jg.mp4',
    posterSrc: '/video-jg-still.png',
    glowClass: 'bg-guide-gold/18',
    badgeClass: 'border-white/24 bg-white/12 text-white',
    bottomImageSrc: '/SportIcons.png',
    points: [
      {
        title: 'Youth and Future Talent',
        description: 'Provided a platform that also engaged over 1,000 emerging athletes between the ages of 14-17 to compete, grow and be inspired on a global stage.',
      },
      {
        title: 'Elite Competition',
        description: 'High performance sport delivered at scale, with world-class venues, standards and officiating.',
      },
    ],
  },
  {
    eyebrow: 'Film Festival',
    title: 'International Film Festival',
    description:
      'Youth athletes, students, and emerging leaders are given high-visibility platforms that combine mentorship, performance, and direct access to international networks.',
    sectionClass: 'bg-[#b43f7d]',
    ambientLeftClass: 'bg-guide-purple/14',
    ambientRightClass: 'bg-primary/10',
    videoSrc: '/video-IFF.mp4',
    posterSrc: '/video-iff-still.jpg',
    glowClass: 'bg-guide-magenta/18',
    badgeClass: 'border-white/24 bg-white/12 text-white',
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
  {
    eyebrow: 'Art Gallery',
    title: 'International Art Gallery',
    description:
      'From contemporary installations to traditional masterpieces, the Art Gallery is a curated space that challenges perceptions and celebrates the visual language of our shared humanity.',
    sectionClass: 'bg-accent-orange',
    ambientLeftClass: 'bg-guide-yellow/10',
    ambientRightClass: 'bg-secondary/15',
    videoSrc: '/video-art-gallery.mp4',
    posterSrc: '/video-iag-still.jpg',
    glowClass: 'bg-guide-yellow/20',
    badgeClass: 'border-guide-yellow/30 bg-guide-yellow/20 text-yellow-100',
    points: [
      {
        title: 'Emerging Artists',
        description: 'A dedicated wing for showcasing and launching the careers of new talent.',
      },
      {
        title: 'Interactive Exhibits',
        description: 'Engage with art through technology with our augmented reality installations.',
      },
    ],
  },
  {
    eyebrow: 'Performing Arts',
    title: 'International Performing Arts Showcase',
    description:
      'Experience the power of performance with a lineup of theatre, dance, and music that transcends language and cultural barriers, telling stories that resonate with the core of our being.',
    sectionClass: 'bg-primary',
    ambientLeftClass: 'bg-guide-light-blue/18',
    ambientRightClass: 'bg-secondary/10',
    videoSrc: '/video-ipas.mp4',
    posterSrc: '/video-ipas-still.png',
    glowClass: 'bg-primary/25',
    badgeClass: 'border-primary/30 bg-primary/20 text-blue-100',
    points: [
      {
        title: 'Global Theatre',
        description: 'From classical plays to contemporary performances, a celebration of dramatic arts.',
      },
      {
        title: 'Dance Ensembles',
        description: 'Vibrant showcases of traditional and modern dance from around the world.',
      },
    ],
  },
  {
    eyebrow: 'Sustainability',
    title: 'Sustainability',
    description:
      'Our commitment to the planet is woven into the fabric of the festival. We pioneer sustainable practices to ensure our global gathering leaves a positive local legacy.',
    sectionClass: 'bg-emerald-700',
    ambientLeftClass: 'bg-emerald-400/10',
    ambientRightClass: 'bg-teal-500/10',
    videoSrc: '/video-sustainability.mp4',
    posterSrc: '/video-sustainability-still.jpeg',
    glowClass: 'bg-emerald-500/20',
    badgeClass: 'border-emerald-300/30 bg-emerald-300/20 text-emerald-100',
    points: [
      {
        title: 'Zero-Waste Initiative',
        description: 'Comprehensive recycling and composting programs across all festival venues.',
      },
      {
        title: 'Eco-Education',
        description: 'Interactive workshops and talks on environmental stewardship for all ages.',
      },
    ],
  },
  {
    eyebrow: 'Faanoos Roadshow',
    title: 'Faanoos Roadshow',
    description:
      'A traveling exhibition of light, art, and storytelling, the Faanoos Roadshow illuminates communities with interactive installations and performances, fostering a sense of wonder and shared cultural identity.',
    sectionClass: 'bg-[#ae8850]',
    ambientLeftClass: 'bg-guide-yellow/12',
    ambientRightClass: 'bg-secondary/10',
    videoSrc: '/video-faanoos.mp4',
    posterSrc: '/video-faanoos-still.png',
    glowClass: 'bg-guide-gold/18',
    badgeClass: 'border-white/24 bg-white/12 text-white',
    points: [
      {
        title: 'Community Art',
        description: 'Workshops where local residents contribute to large-scale, illuminated art pieces.',
      },
      {
        title: 'Mobile Performances',
        description: 'Pop-up performances that bring music, dance, and theatre to public spaces.',
      },
    ],
  },
  {
    eyebrow: 'Opening Ceremony',
    title: 'A Spectacular Beginning',
    description:
      'The Opening Ceremony sets the stage for the Global Encounters Festival, bringing together thousands of participants in a dazzling display of cultural pride and shared purpose.',
    sectionClass: 'bg-[#5b2c6f]',
    ambientLeftClass: 'bg-white/10',
    ambientRightClass: 'bg-primary/15',
    videoSrc: '/video-opening.mp4',
    posterSrc: '/video-opening-still.jpg',
    glowClass: 'bg-white/20',
    badgeClass: 'border-white/24 bg-white/12 text-white',
    points: [
      {
        title: 'Parade of Nations',
        description: 'A vibrant procession celebrating the diverse countries and cultures represented at the festival.',
      },
      {
        title: 'Keynote Addresses',
        description: 'Inspiring words from global leaders to kick off the biennial celebration.',
      },
    ],
  },
  {
    eyebrow: 'Closing Ceremony',
    title: 'Celebrating Our Journey',
    description:
      'A triumphant conclusion to the festival, the Closing Ceremony honors the achievements, connections, and memories made, sending participants home with a renewed sense of global unity.',
    sectionClass: 'bg-secondary',
    ambientLeftClass: 'bg-guide-light-blue/15',
    ambientRightClass: 'bg-accent-orange/10',
    videoSrc: '/video-closing.mp4',
    posterSrc: '/video-closing-still.jpg',
    glowClass: 'bg-secondary/20',
    badgeClass: 'border-white/24 bg-white/12 text-white',
    points: [
      {
        title: 'Award Presentations',
        description: 'Recognizing outstanding achievements in sports, arts, and community leadership.',
      },
      {
        title: 'Farewell Celebrations',
        description: 'A spectacular finale featuring music, dance, and a look ahead to the next gathering.',
      },
    ],
  },
];

type FestivalHighlightsSectionProps = {
  selectedHighlightIndex: number;
  setSelectedHighlightIndex: Dispatch<SetStateAction<number>>;
};

export default function FestivalHighlightsSection({
  selectedHighlightIndex,
  setSelectedHighlightIndex,
}: FestivalHighlightsSectionProps) {
  const [isTheaterMode, setIsTheaterMode] = useState(false);
  const highlight = festivalHighlights[selectedHighlightIndex];

  return (
    <section
      id="vision-section"
      className={`relative scroll-mt-8 overflow-hidden px-6 py-20 text-white transition-colors duration-700 md:py-32 ${highlight.sectionClass}`}
    >
      <AnimatePresence>
        {isTheaterMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-30 bg-black/80"
            onClick={() => setIsTheaterMode(false)}
          />
        )}
      </AnimatePresence>
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute -left-20 top-[-8%] h-96 w-96 rounded-full opacity-75 blur-[120px] transition-colors duration-700 md:h-[34rem] md:w-[34rem] ${highlight.ambientLeftClass}`}
        />
        <div
          className={`absolute -right-16 bottom-[-12%] h-96 w-96 rounded-full opacity-70 blur-[120px] transition-colors duration-700 md:h-[34rem] md:w-[34rem] ${highlight.ambientRightClass}`}
        />
        <div className="absolute inset-x-[16%] top-0 hidden h-full w-20 -skew-x-12 bg-white/6 md:block" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(0,0,0,0.28))]" />
      </div>
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 opacity-10 md:block">
        <svg className="h-full w-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,200 Q100,0 200,200 T400,200" fill="none" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-20 mb-12 text-center md:mb-16">
        <h2 className="font-headline text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
          Our Vision, Brought to Life
        </h2>
      </div>

      <div className="relative z-20 mx-auto mb-12 flex max-w-7xl flex-wrap justify-center gap-x-2 gap-y-1 border-b border-white/20 pb-2 md:gap-x-4">
        {festivalHighlights.map((item, index) => (
          <button
            key={item.eyebrow}
            onClick={() => setSelectedHighlightIndex(index)}
            className={`transform border-b-2 px-2 py-3 text-center font-headline text-sm font-bold uppercase tracking-wider transition-all duration-200 ease-out md:px-3 ${
              selectedHighlightIndex === index
                ? 'border-white text-white'
                : 'border-transparent text-white/50 hover:text-white hover:-translate-y-0.5'
            }`}
          >
            {item.eyebrow}
          </button>
        ))}
      </div>

      <FestivalHighlightPanel
        highlight={highlight}
        isTheaterMode={isTheaterMode}
        onPlay={() => setIsTheaterMode(true)}
        onPause={() => setIsTheaterMode(false)}
      />
    </section>
  );
}

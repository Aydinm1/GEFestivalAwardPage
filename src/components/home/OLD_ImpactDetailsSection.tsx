import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const impactPages = [
  {
    id: 'investment',
    label: 'Community Investment',
    title: 'Global Reach, Local Impact',
    description:
      'Our impact framework is built on three pillars: Economic Resilience, Social Integration, and Cultural Preservation. We do not just host events; we build ecosystems.',
    points: [
      'Micro-grants for local artisans',
      'Scholarships for youth athletes',
      'Cultural archival technology grants',
    ],
    videoSrc: '/hero-video.mp4',
    posterSrc: '/impact-image.jpeg',
  },
  {
    id: 'participants',
    label: 'Global Participants',
    title: 'Connecting 45,000+ Active Minds',
    description:
      'From every corner of the globe, participants converge to share, learn, and compete. Our platform fosters a unique environment for cross-cultural collaboration and personal growth.',
    points: [
      'International symposiums and workshops',
      'Youth leadership and mentorship programs',
      'Global networking events for professionals',
    ],
    videoSrc: 'https://assets.mixkit.co/videos/preview/mixkit-crowd-at-a-concert-40291-large.mp4',
    posterSrc: '/gallery-2.jpg',
  },
  {
    id: 'outcomes',
    label: 'Social Outcomes',
    title: 'Achieving a 92% Positive Impact Rate',
    description:
      'We measure our success by the tangible, positive changes we help create in communities worldwide. Our initiatives are designed for sustainable, long-term social and economic benefits.',
    points: [
      'Measurable improvements in local economies',
      'Increased cultural preservation and awareness',
      'High participant satisfaction and engagement',
    ],
    videoSrc: '/hero-video.mp4',
    posterSrc: '/gallery-3.jpeg',
  },
];

export default function ImpactDetailsSection() {
  const [activePageId, setActivePageId] = useState(impactPages[0].id);

  const activePage = impactPages.find((p) => p.id === activePageId) || impactPages[0];

  return (
    <section id="impact-section" className="bg-white px-6 py-20 scroll-mt-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-16 text-center"
        >
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            Impact
          </div>
          <h2 className="mb-6 font-headline text-4xl font-extrabold tracking-tight text-secondary md:text-6xl">
            The Data of Human Potential
          </h2>
          <p className="text-lg text-slate-500 md:text-xl">
            Measuring the measurable, and celebrating the immeasurable.
          </p>
        </motion.div>

        <div className="mb-16 flex justify-center gap-2 border-b border-slate-200 md:gap-6">
          {impactPages.map((page) => (
            <button
              key={page.id}
              onClick={() => setActivePageId(page.id)}
              className={`border-b-2 px-2 py-4 text-center font-headline text-sm font-bold uppercase tracking-widest transition-colors md:px-4 md:text-base ${
                activePageId === page.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
              }`}
            >
              {page.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage.id + '-text'}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="text-center lg:text-left"
            >
              <h3 className="mb-6 font-headline text-3xl font-extrabold text-secondary md:mb-8 md:text-4xl">
                {activePage.title}
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-slate-600">
                {activePage.description}
              </p>
              <ul className="inline-block space-y-4 text-left lg:block">
                {activePage.points.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-bold text-secondary">
                    <div className="h-2 w-2 rounded-full bg-primary" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePage.id + '-video'}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="overflow-hidden rounded-[3rem] shadow-2xl"
            >
              <div className="aspect-[16/9] bg-slate-100">
                <video
                  key={activePage.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={activePage.posterSrc}
                  className="h-full w-full object-cover"
                >
                  <source src={activePage.videoSrc} type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

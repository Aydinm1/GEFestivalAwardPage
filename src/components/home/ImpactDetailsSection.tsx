import { useState } from 'react';

import { BarChart3, Users2, Zap } from 'lucide-react';
import { motion } from 'motion/react';

import PhotoLightbox from './PhotoLightbox.tsx';

export default function ImpactDetailsSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

        <div className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.02, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-slate-100 bg-slate-50 p-8"
          >
            <BarChart3 className="mb-6 text-primary" size={40} />
            <h3 className="mb-2 text-4xl font-black text-secondary">$12.4M</h3>
            <p className="font-medium text-slate-500">Direct Community Investment</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-slate-100 bg-slate-50 p-8"
          >
            <Users2 className="mb-6 text-accent-orange" size={40} />
            <h3 className="mb-2 text-4xl font-black text-secondary">45,000+</h3>
            <p className="font-medium text-slate-500">Active Participants Globally</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.18, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-slate-100 bg-slate-50 p-8"
          >
            <Zap className="mb-6 text-accent-pink" size={40} />
            <h3 className="mb-2 text-4xl font-black text-secondary">92%</h3>
            <p className="font-medium text-slate-500">Positive Social Outcome Rate</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h3 className="mb-8 font-headline text-4xl font-extrabold text-secondary">
              Global Reach, Local Impact
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-slate-600">
              Our impact framework is built on three pillars: Economic Resilience, Social
              Integration, and Cultural Preservation. We do not just host events; we build
              ecosystems.
            </p>
            <ul className="space-y-4">
              {[
                'Micro-grants for local artisans',
                'Scholarships for youth athletes',
                'Cultural archival technology grants',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-bold text-secondary">
                  <div className="h-2 w-2 rounded-full bg-primary" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 32, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="overflow-hidden rounded-[3rem] shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(0)}
              className="block h-full w-full cursor-zoom-in"
              aria-label="Open impact image"
            >
              <img
                src="https://picsum.photos/seed/impact/1200/800"
                alt="Impact Map"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </button>
          </motion.div>
        </div>
      </div>
      <PhotoLightbox
        items={[
          {
            src: 'https://picsum.photos/seed/impact/1200/800',
            alt: 'Impact Map',
            title: 'Impact Map',
            description: 'Global Reach, Local Impact',
          },
        ]}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrevious={() => setLightboxIndex(0)}
        onNext={() => setLightboxIndex(0)}
      />
    </section>
  );
}

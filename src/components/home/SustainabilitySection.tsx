import { useState } from 'react';

import { Leaf } from 'lucide-react';
import { motion } from 'motion/react';

import PhotoLightbox from './PhotoLightbox.tsx';

const commitments = [
  {
    title: 'Carbon Neutrality',
    desc: '100% of festival energy sourced from local solar and wind farms.',
  },
  {
    title: 'Circular Economy',
    desc: 'Zero single-use plastics. All catering materials are compostable on-site.',
  },
  {
    title: 'Ethical Sourcing',
    desc: '90% of all food and materials sourced within a 100-mile radius.',
  },
];

export default function SustainabilitySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="sustainability-section" className="bg-white px-6 py-20 scroll-mt-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-16 text-center"
        >
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-emerald-600">
            Sustainability
          </div>
          <h2 className="mb-6 font-headline text-4xl font-extrabold tracking-tight text-secondary md:text-6xl">
            The Zero-Waste Roadmap
          </h2>
          <p className="text-lg text-slate-500 md:text-xl">
            Stewardship of the earth as a cultural imperative.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -32, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="aspect-square overflow-hidden rounded-[3rem]"
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(0)}
              className="block h-full w-full cursor-zoom-in"
              aria-label="Open sustainability image"
            >
              <img
                src="https://picsum.photos/seed/nature/1000/1000"
                alt="Sustainability"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h3 className="mb-8 font-headline text-4xl font-extrabold text-secondary">
              Our 2025 Commitments
            </h3>
            <div className="space-y-8">
              {commitments.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
                  className="flex gap-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50">
                    <Leaf className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold text-secondary">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <PhotoLightbox
        items={[
          {
            src: 'https://picsum.photos/seed/nature/1000/1000',
            alt: 'Sustainability',
            title: 'Sustainability',
            description: 'The Zero-Waste Roadmap',
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

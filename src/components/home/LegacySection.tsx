import LegacyTimelineItem, { type LegacyEvent } from './LegacyTimelineItem.tsx';

const legacyEvents: LegacyEvent[] = [
  {
    year: '1982',
    title: 'The First Gathering',
    desc: 'A modest exchange of music and sport in the heart of East Africa.',
  },
  {
    year: '2005',
    title: 'Digital Integration',
    desc: 'Launching the first global knowledge-sharing platform for artisans.',
  },
  {
    year: '2025',
    title: 'The Global Stage',
    desc: 'Uniting 120+ nations in a synthesis of technology and tradition.',
  },
];

export default function LegacySection() {
  return (
    <section id="legacy-section" className="bg-surface px-6 py-20 scroll-mt-8 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            Legacy
          </div>
          <h2 className="mb-6 font-headline text-4xl font-extrabold tracking-tight text-secondary md:text-6xl">
            The Generational Thread
          </h2>
          <p className="text-lg italic text-slate-500 md:text-xl">
            "We are the ancestors of the future."
          </p>
        </div>

        <div className="relative space-y-20">
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px bg-slate-200 md:block" />
          {legacyEvents.map((event, index) => (
            <div key={event.year}>
              <LegacyTimelineItem event={event} side={index % 2 === 0 ? 'left' : 'right'} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

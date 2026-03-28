import { History } from 'lucide-react';

const legacyEvents = [
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
            <div
              key={event.year}
              className={`flex flex-col items-center gap-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} md:flex-row`}
            >
              <div className="flex-1 text-center md:text-right">
                {index % 2 === 0 ? (
                  <>
                    <span className="mb-4 block font-headline text-5xl font-black text-primary">
                      {event.year}
                    </span>
                    <h3 className="mb-4 text-2xl font-bold text-secondary">{event.title}</h3>
                    <p className="leading-relaxed text-slate-500">{event.desc}</p>
                  </>
                ) : (
                  <div className="hidden md:block" />
                )}
              </div>
              <div className="z-10 hidden h-12 w-12 items-center justify-center rounded-full border-4 border-primary bg-white md:flex">
                <History size={20} className="text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                {index % 2 !== 0 ? (
                  <>
                    <span className="mb-4 block font-headline text-5xl font-black text-primary">
                      {event.year}
                    </span>
                    <h3 className="mb-4 text-2xl font-bold text-secondary">{event.title}</h3>
                    <p className="leading-relaxed text-slate-500">{event.desc}</p>
                  </>
                ) : (
                  <div className="hidden md:block" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

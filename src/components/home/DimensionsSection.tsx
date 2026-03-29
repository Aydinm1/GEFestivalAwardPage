import DimensionStatCard, { type DimensionStat } from './DimensionStatCard.tsx';

const sharedStatImage = '/icon-athlete.png';

const dimensions: DimensionStat[] = [
  {
    img: sharedStatImage,
    number: '3700+',
    title: 'Artists & Athletes',
    bodyText: 'International symposiums and knowledge-sharing workshops.',
    colorClass: 'text-primary',
  },
  {
    img: sharedStatImage,
    number: '18,000+',
    title: 'Attendees',
    bodyText: 'Holistic wellness programs rooted in cultural heritage.',
    colorClass: 'text-purple-600',
  },
  {
    img: sharedStatImage,
    number: '2,800+',
    title: 'Volunteers',
    bodyText: 'Elite multi-sport competitions across 20+ disciplines.',
    colorClass: 'text-orange-600',
  },
  {
    img: sharedStatImage,
    number: '50+',
    title: 'Countries Represented',
    bodyText: 'Advancing the science of human health and longevity.',
    colorClass: 'text-green-600',
  },
  {
    img: sharedStatImage,
    number: '600+',
    title: 'Events Around The World',
    bodyText: 'Nurturing the next generation of global citizens.',
    colorClass: 'text-yellow-600',
  },
  {
    img: sharedStatImage,
    number: '1M+',
    title: 'Online Viewers',
    bodyText: 'Exclusive networking for policy makers and industry heads.',
    colorClass: 'text-slate-600',
  },
  {
    img: sharedStatImage,
    number: '100+',
    title: 'Media Mentions',
    bodyText: 'Empowering sustainable micro-economies worldwide.',
    colorClass: 'text-teal-600',
  },
  {
    img: sharedStatImage,
    number: '12M',
    title: 'USD Impact',
    bodyText: 'Direct investment in community development initiatives.',
    colorClass: 'text-red-600',
  },
];

export default function DimensionsSection() {
  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-white px-6 py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid grid-rows-4 opacity-[0.018] mix-blend-multiply">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="overflow-hidden">
            <img
              src="/pattern.jpg"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover object-top"
            />
          </div>
        ))}
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 flex justify-center md:mb-20">
          <div className="max-w-2xl text-center">
            <h2 className="mb-6 font-headline text-4xl font-black uppercase leading-none tracking-tight text-secondary md:text-6xl">
              <span className="block text-[1em] font-black tracking-tight text-secondary">
                The GE Festival
              </span>
              <span className="mt-3 block text-[0.74em] tracking-[0.02em] text-guide-magenta md:mt-4">
                <span className="font-normal">By The</span> Numbers
              </span>
            </h2>
            <p className="text-base leading-relaxed text-slate-500 md:text-lg">
              A meticulously curated ecosystem designed to foster elite performance, cultural
              preservation, and social innovation across eight distinct pillars.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 md:gap-y-16">
          {dimensions.map((dimension) => (
            <div key={dimension.title}>
              <DimensionStatCard {...dimension} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

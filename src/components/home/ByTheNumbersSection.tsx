import ByTheNumbersStatCard, { type ByTheNumbersStat } from './ByTheNumbersStatCard.tsx';

const sharedStatImage = '/icon-athlete.png';

const byTheNumbersStats: ByTheNumbersStat[] = [
  {
    img: sharedStatImage,
    number: '3700+',
    title: 'Artists & Athletes',
    bodyText: 'A global stage for excellence in sport and the arts',
    colorClass: 'text-primary',
  },
  {
    img: '/icon-attendees.png',
    number: '18,000+',
    title: 'Attendees',
    bodyText: 'Where thousands gather to celebrate culture, creativity, and connection',
    colorClass: 'text-purple-600',
  },
  {
    img: '/icon-volunteers.png',
    number: '2,800+',
    title: 'Volunteers',
    bodyText: 'Powered by passion, purpose, and community spirit',
    colorClass: 'text-orange-600',
  },
  {
    img: '/icon-flags2.png',
    number: '50+',
    title: 'Countries Represented',
    bodyText: 'A true celebration of global diversity and unity',
    colorClass: 'text-green-600',
  },
  {
    img: '/icon-globe.png',
    number: '600+',
    title: 'Events Around The World',
    bodyText: 'Hundreds of moments designed to inspire and engage',
    colorClass: 'text-yellow-600',
  },
  {
    img: '/icon-broadcast.png',
    number: '1M+',
    title: 'Online Viewers',
    bodyText: 'Inspiring millions through a shared digital experience',
    colorClass: 'text-slate-600',
  },
];

export default function ByTheNumbersSection() {
  return (
    <section
      id="dimensions-section"
      className="relative overflow-hidden border-t border-slate-200 bg-white px-6 py-20 md:py-32"
    >
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
            <h2 className="mb-6 font-headline text-3xl font-black uppercase leading-none tracking-tight text-secondary sm:text-4xl md:text-5xl">
              <span className="block text-[0.8em] tracking-widest">The</span>
              <span className="block text-[1.0em] leading-tight">Global Encounters</span>
              <span className="block text-[1.0em] tracking-widest">Festival</span>
              <span className="mt-3 block text-[0.74em] tracking-[0.02em] text-guide-magenta md:mt-4">
                <span className="font-normal">By The</span> Numbers
              </span>
            </h2>
            <p className="text-base leading-relaxed text-slate-500 md:text-lg">
            Where the World Comes to Connect, Create, and Compete!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 md:gap-y-16">
          {byTheNumbersStats.map((stat) => (
            <div key={stat.title}>
              <ByTheNumbersStatCard {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

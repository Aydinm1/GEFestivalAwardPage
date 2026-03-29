import { History } from 'lucide-react';

export type LegacyEvent = {
  year: string;
  title: string;
  desc: string;
};

type LegacyTimelineItemProps = {
  event: LegacyEvent;
  side: 'left' | 'right';
};

export default function LegacyTimelineItem({ event, side }: LegacyTimelineItemProps) {
  const isLeft = side === 'left';

  return (
    <div className="flex flex-col items-center gap-12 md:flex-row">
      <div className="flex-1 text-center md:text-right">
        {isLeft ? (
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
        {!isLeft ? (
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
  );
}

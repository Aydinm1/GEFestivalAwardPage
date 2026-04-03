import { History } from 'lucide-react';
import { motion } from 'motion/react';

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
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="flex flex-col items-center gap-12 md:flex-row"
    >
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
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
        className="z-10 hidden h-12 w-12 items-center justify-center rounded-full border-4 border-primary bg-white md:flex"
      >
        <History size={20} className="text-primary" />
      </motion.div>
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
    </motion.div>
  );
}

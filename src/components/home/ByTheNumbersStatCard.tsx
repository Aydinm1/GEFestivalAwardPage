import { motion } from 'motion/react';

export type ByTheNumbersStat = {
  img: string;
  number: string;
  title: string;
  bodyText: string;
  colorClass: string;
};

export default function ByTheNumbersStatCard({
  img,
  number,
  title,
  bodyText,
  colorClass,
}: ByTheNumbersStat) {
  return (
    <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center text-center">
      <div className={`${colorClass} mb-6 flex items-center justify-center`}>
        <img
          src={img}
          alt={title}
          loading="lazy"
          decoding="async"
          className="h-[104px] w-[104px] rounded-full border-[0.25px] border-slate-200 bg-white object-contain shadow-md md:h-[125px] md:w-[125px]"
        />
      </div>
      <div className="mb-2 font-headline text-4xl font-black text-secondary [-webkit-text-stroke:1px_currentColor] md:text-5xl md:[-webkit-text-stroke:1.5px_currentColor]">
        {number}
      </div>
      <div className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">{title}</div>
      <p className="text-sm font-medium leading-relaxed text-slate-500">{bodyText}</p>
    </motion.div>
  );
}

import { motion } from 'motion/react';
import {
  Briefcase,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Microscope,
  Store,
  Trophy,
  UserRound,
  type LucideIcon,
} from 'lucide-react';

type Dimension = {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
  colorClass: string;
};

const dimensions: Dimension[] = [
  {
    icon: Lightbulb,
    value: '120+',
    label: 'Thought Leaders',
    description: 'International symposiums and knowledge-sharing workshops.',
    colorClass: 'text-primary',
  },
  {
    icon: UserRound,
    value: '45k',
    label: 'Participants',
    description: 'Holistic wellness programs rooted in cultural heritage.',
    colorClass: 'text-purple-600',
  },
  {
    icon: Trophy,
    value: '3,500+',
    label: 'Athletes',
    description: 'Elite multi-sport competitions across 20+ disciplines.',
    colorClass: 'text-orange-600',
  },
  {
    icon: HeartHandshake,
    value: '12M',
    label: 'USD Impact',
    description: 'Direct investment in community development initiatives.',
    colorClass: 'text-red-600',
  },
  {
    icon: Microscope,
    value: '15+',
    label: 'Research Partners',
    description: 'Advancing the science of human health and longevity.',
    colorClass: 'text-green-600',
  },
  {
    icon: GraduationCap,
    value: '85+',
    label: 'Workshops',
    description: 'Nurturing the next generation of global citizens.',
    colorClass: 'text-yellow-600',
  },
  {
    icon: Briefcase,
    value: '500+',
    label: 'Global Dignitaries',
    description: 'Exclusive networking for policy makers and industry heads.',
    colorClass: 'text-slate-600',
  },
  {
    icon: Store,
    value: '200+',
    label: 'Artisans',
    description: 'Empowering sustainable micro-economies worldwide.',
    colorClass: 'text-teal-600',
  },
];

function DimensionItem({ icon: Icon, value, label, description, colorClass }: Dimension) {
  return (
    <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center text-center">
      <div className={`${colorClass} mb-6 flex items-center justify-center`}>
        <Icon className="h-10 w-10 md:h-12 md:w-12" strokeWidth={1.5} />
      </div>
      <div className="mb-2 font-headline text-4xl font-black text-secondary">{value}</div>
      <div className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">{label}</div>
      <p className="text-sm font-medium leading-relaxed text-slate-500">{description}</p>
    </motion.div>
  );
}

export default function DimensionsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 md:py-32">
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
            <h2 className="mb-6 font-headline text-3xl font-extrabold leading-tight tracking-tight text-secondary md:text-5xl">
              The Eight Dimensions of Engagement
            </h2>
            <p className="text-base leading-relaxed text-slate-500 md:text-lg">
              A meticulously curated ecosystem designed to foster elite performance, cultural
              preservation, and social innovation across eight distinct pillars.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 md:gap-y-16">
          {dimensions.map((dimension) => (
            <div key={dimension.label}>
              <DimensionItem {...dimension} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

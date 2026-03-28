import { motion } from 'motion/react';
import { ArrowLeft, BarChart3, Users2, Zap } from 'lucide-react';

type ImpactPageProps = {
  onBack: () => void;
};

export default function ImpactPage({ onBack }: ImpactPageProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-white">
      <div className="relative overflow-hidden bg-secondary px-6 py-20 text-center text-white">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <svg className="h-full w-full scale-150" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm7.93 9h-3.02a15.8 15.8 0 0 0-1.3-5.02A8.03 8.03 0 0 1 19.93 11Zm-7.93 9a13.8 13.8 0 0 1-2.04-7h4.08a13.8 13.8 0 0 1-2.04 7Zm-2.04-9a13.8 13.8 0 0 1 2.04-7 13.8 13.8 0 0 1 2.04 7Zm-1.57-5.02A15.8 15.8 0 0 0 7.09 11H4.07a8.03 8.03 0 0 1 4.32-5.02ZM4.07 13h3.02a15.8 15.8 0 0 0 1.3 5.02A8.03 8.03 0 0 1 4.07 13Zm11.54 5.02A15.8 15.8 0 0 0 16.91 13h3.02a8.03 8.03 0 0 1-4.32 5.02Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="relative z-10 mx-auto max-w-4xl">
          <button
            onClick={onBack}
            className="mb-8 inline-flex cursor-pointer items-center gap-2 font-bold text-primary transition-all hover:gap-4"
          >
            <ArrowLeft size={20} /> Back to Home
          </button>
          <h1 className="mb-6 font-headline text-5xl font-extrabold tracking-tight text-white md:text-7xl">
            The Data of Human Potential
          </h1>
          <p className="text-xl font-light text-slate-300">
            Measuring the measurable, and celebrating the immeasurable.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8">
            <BarChart3 className="mb-6 text-primary" size={40} />
            <h3 className="mb-2 text-4xl font-black text-secondary">$12.4M</h3>
            <p className="font-medium text-slate-500">Direct Community Investment</p>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8">
            <Users2 className="mb-6 text-accent-orange" size={40} />
            <h3 className="mb-2 text-4xl font-black text-secondary">45,000+</h3>
            <p className="font-medium text-slate-500">Active Participants Globally</p>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8">
            <Zap className="mb-6 text-accent-pink" size={40} />
            <h3 className="mb-2 text-4xl font-black text-secondary">92%</h3>
            <p className="font-medium text-slate-500">Positive Social Outcome Rate</p>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 font-headline text-4xl font-extrabold text-secondary">
              Global Reach, Local Impact
            </h2>
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
          </div>
          <div className="overflow-hidden rounded-[3rem] shadow-2xl">
            <img
              src="https://picsum.photos/seed/impact/1200/800"
              alt="Impact Map"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

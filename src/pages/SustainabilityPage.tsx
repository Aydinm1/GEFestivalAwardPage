import { motion } from 'motion/react';
import { ArrowLeft, Leaf } from 'lucide-react';

type SustainabilityPageProps = {
  onBack: () => void;
};

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

export default function SustainabilityPage({ onBack }: SustainabilityPageProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-white">
      <div className="relative overflow-hidden bg-emerald-900 px-6 py-24 text-center text-white">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <Leaf className="h-full w-full scale-125" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl">
          <button
            onClick={onBack}
            className="mb-8 inline-flex cursor-pointer items-center gap-2 font-bold text-emerald-400 transition-all hover:gap-4"
          >
            <ArrowLeft size={20} /> Back to Home
          </button>
          <h1 className="mb-6 font-headline text-5xl font-extrabold tracking-tight text-white md:text-7xl">
            The Zero-Waste Roadmap
          </h1>
          <p className="text-xl font-light text-emerald-100">
            Stewardship of the earth as a cultural imperative.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-32 grid grid-cols-1 items-center gap-20 md:grid-cols-2">
          <div className="aspect-square overflow-hidden rounded-[3rem]">
            <img
              src="https://picsum.photos/seed/nature/1000/1000"
              alt="Sustainability"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="mb-8 font-headline text-4xl font-extrabold text-secondary">
              Our 2025 Commitments
            </h2>
            <div className="space-y-8">
              {commitments.map((item) => (
                <div key={item.title} className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50">
                    <Leaf className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold text-secondary">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

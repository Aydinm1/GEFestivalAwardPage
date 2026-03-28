import { Leaf } from 'lucide-react';

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

export default function SustainabilitySection() {
  return (
    <section id="sustainability-section" className="bg-white px-6 py-20 scroll-mt-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-emerald-600">
            Sustainability
          </div>
          <h2 className="mb-6 font-headline text-4xl font-extrabold tracking-tight text-secondary md:text-6xl">
            The Zero-Waste Roadmap
          </h2>
          <p className="text-lg text-slate-500 md:text-xl">
            Stewardship of the earth as a cultural imperative.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-2">
          <div className="aspect-square overflow-hidden rounded-[3rem]">
            <img
              src="https://picsum.photos/seed/nature/1000/1000"
              alt="Sustainability"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h3 className="mb-8 font-headline text-4xl font-extrabold text-secondary">
              Our 2025 Commitments
            </h3>
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
    </section>
  );
}

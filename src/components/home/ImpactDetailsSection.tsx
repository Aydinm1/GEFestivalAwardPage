import { BarChart3, Users2, Zap } from 'lucide-react';

export default function ImpactDetailsSection() {
  return (
    <section id="impact-section" className="bg-white px-6 py-20 scroll-mt-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            Impact
          </div>
          <h2 className="mb-6 font-headline text-4xl font-extrabold tracking-tight text-secondary md:text-6xl">
            The Data of Human Potential
          </h2>
          <p className="text-lg text-slate-500 md:text-xl">
            Measuring the measurable, and celebrating the immeasurable.
          </p>
        </div>

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
            <h3 className="mb-8 font-headline text-4xl font-extrabold text-secondary">
              Global Reach, Local Impact
            </h3>
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
    </section>
  );
}

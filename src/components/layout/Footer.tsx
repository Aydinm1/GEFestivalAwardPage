import { ArrowRight, Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary pb-12 pt-24 text-white">
      <div className="mx-auto mb-16 grid max-w-7xl grid-cols-1 gap-12 px-8 md:grid-cols-4 md:gap-16">
        <div className="space-y-6">
          <div className="mb-4 flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Global Encounters Logo"
              className="h-10 w-10 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-bold tracking-tight">Global Encounters</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            A prestigious global platform dedicated to cultural exchange, sports excellence, and
            measurable social impact.
          </p>
        </div>
        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white">Impact Pillars</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Sustainability Framework
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Economic Resilience
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Social Integration
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Education & Knowledge
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white">Resources</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Brand Guidelines
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Award Nominations
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Press Kit
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white">
            Partner Excellence
          </h4>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 p-4 text-sm text-slate-400">
            <Building2 className="text-primary" />
            <span>Aga Khan Development Network</span>
          </div>
          <div className="pt-4">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Institutional Subscription
            </p>
            <div className="flex border-b border-white/20 pb-2">
              <input
                type="email"
                className="w-full border-none bg-transparent text-sm text-white placeholder:text-slate-600 focus:outline-none"
                placeholder="Organization Email"
              />
              <button className="cursor-pointer text-primary">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-white/10 px-8 pt-12 md:flex-row">
        <p className="text-xs text-slate-500">
          © 2025 Global Encounters Festival. Strategic Excellence in Culture & Sport.
        </p>
        <div className="flex gap-8 text-xs text-slate-500">
          <a href="#" className="transition-colors hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Terms of Governance
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Accessibility
          </a>
        </div>
      </div>
    </footer>
  );
}

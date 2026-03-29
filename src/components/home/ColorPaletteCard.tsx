export type ColorPanel = {
  name: string;
  token: string;
  hex: string;
  bgClass: string;
  textClass: string;
  accentClass: string;
  description: string;
};

type ColorPaletteCardProps = {
  panel: ColorPanel;
  isActive: boolean;
  onClick: () => void;
};

export default function ColorPaletteCard({
  panel,
  isActive,
  onClick,
}: ColorPaletteCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative aspect-[3/5] overflow-hidden p-0 text-left transition-all duration-300 md:aspect-[5/8] ${panel.bgClass} ${panel.textClass} ${
        isActive
          ? 'scale-[1.02] shadow-[0_18px_40px_rgba(15,23,42,0.18)]'
          : 'hover:-translate-y-1'
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.16))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/20 to-transparent" />
      <div className="relative z-10 flex h-full flex-col justify-between p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="text-[11px] font-bold uppercase tracking-[0.24em] opacity-80">
            {panel.token}
          </div>
          <div className={`rounded-full px-3 py-1 text-[11px] font-semibold ${panel.accentClass}`}>
            {panel.hex}
          </div>
        </div>
        <div>
          <div className="font-headline text-2xl font-bold leading-tight">{panel.name}</div>
          <p className="mt-3 text-sm leading-relaxed opacity-90">{panel.description}</p>
        </div>
      </div>
    </button>
  );
}

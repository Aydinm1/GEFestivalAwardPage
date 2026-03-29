import { Quote } from 'lucide-react';

export type Accent = 'primary' | 'orange' | 'pink';

export type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
  accent: Accent;
  imageSrc?: string;
  imageAlt?: string;
  onImageClick?: () => void;
};

export default function TestimonialCard({
  quote,
  author,
  role,
  accent,
  imageSrc,
  imageAlt,
  onImageClick,
}: TestimonialCardProps) {
  const colors: Record<Accent, { border: string; text: string }> = {
    primary: { border: 'border-primary', text: 'text-primary' },
    orange: { border: 'border-accent-orange', text: 'text-accent-orange' },
    pink: { border: 'border-accent-pink', text: 'text-accent-pink' },
  };
  const { border, text } = colors[accent];

  return (
    <div
      className={`overflow-hidden rounded-[2rem] border-t-4 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.08)] md:rounded-[2.75rem] ${border}`}
    >
      <div className={`flex flex-col ${imageSrc ? 'lg:flex-row' : ''}`}>
        {imageSrc && (
          <div className="lg:min-h-full lg:w-[34%]">
            <button
              type="button"
              onClick={onImageClick}
              className="block h-full w-full cursor-zoom-in"
              aria-label={`Open testimonial image for ${author}`}
            >
              <img
                src={imageSrc}
                alt={imageAlt ?? `${author} testimonial visual`}
                className="h-64 w-full object-cover lg:h-full"
                referrerPolicy="no-referrer"
              />
            </button>
          </div>
        )}
        <div className="flex min-h-[26rem] flex-1 flex-col p-10 md:p-12">
          <Quote className={`${text} mb-8 shrink-0`} size={64} fill="currentColor" />
          <p className="mb-10 flex-grow text-2xl font-light italic leading-[1.5] text-slate-600 md:text-[2rem]">
            "{quote}"
          </p>
          <div className="mt-auto shrink-0">
            <h4 className="text-xl font-bold text-secondary">{author}</h4>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

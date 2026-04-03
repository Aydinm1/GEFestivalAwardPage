import FestivalHighlightMediaCard from './FestivalHighlightMediaCard.tsx';
import { type FestivalHighlightMediaItem } from './FestivalHighlightPanel.tsx';

type FestivalHighlightMediaRailProps = {
  items: FestivalHighlightMediaItem[];
  className?: string;
  activeVideoItemId?: string | null;
  onVideoSelect?: (item: FestivalHighlightMediaItem) => void;
};

export default function FestivalHighlightMediaRail({
  items,
  className = '',
  activeVideoItemId = null,
  onVideoSelect,
}: FestivalHighlightMediaRailProps) {
  return (
    <div className={className}>
      <div className="mb-5 flex items-center gap-4">
        <h3 className="shrink-0 font-headline text-lg font-bold uppercase tracking-[0.16em] text-white/92">
          Related Media
        </h3>
        <div className="h-px flex-1 bg-white/12" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.id} className="h-full">
            <FestivalHighlightMediaCard
              item={item}
              isActive={item.type === 'video' && item.id === activeVideoItemId}
              onSelect={onVideoSelect}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

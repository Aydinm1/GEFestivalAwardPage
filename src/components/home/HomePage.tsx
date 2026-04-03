import { useState } from 'react';

import ByTheNumbersSection from './ByTheNumbersSection.tsx';
import HeroSection from './HeroSection.tsx';
import ImpactSection from './ImpactSection.tsx';
import FestivalHighlightsSection from './FestivalHighlightsSection.tsx';
import MHIQuoteSection from './MHIQuoteSection.tsx';
import TestimonialsSection from './TestimonialsSection.tsx';

type HomePageProps = {
  onNavigate: (sectionId: string) => void;
};

export default function HomePage({ onNavigate }: HomePageProps) {
  const [selectedHighlightIndex, setSelectedHighlightIndex] = useState(0);

  const handleNavigate = (sectionId: string, highlightIndex?: number) => {
    if (highlightIndex !== undefined) {
      setSelectedHighlightIndex(highlightIndex);
    }
    onNavigate(sectionId);
  };

  return (
      <>
        <HeroSection onNavigate={handleNavigate} />
        <MHIQuoteSection />
        <ByTheNumbersSection />
        <FestivalHighlightsSection
          selectedHighlightIndex={selectedHighlightIndex}
          setSelectedHighlightIndex={setSelectedHighlightIndex}
        />
        <TestimonialsSection />
        <ImpactSection />
      </>
  );
}

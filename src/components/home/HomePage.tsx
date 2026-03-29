import DimensionsSection from './DimensionsSection.tsx';
import GallerySection from './GallerySection.tsx';
import HeroSection from './HeroSection.tsx';
import ImpactDetailsSection from './ImpactDetailsSection.tsx';
import ImpactSection from './ImpactSection.tsx';
import LegacySection from './LegacySection.tsx';
import OverviewSection from './OverviewSection.tsx';
import SustainabilitySection from './SustainabilitySection.tsx';
import TestimonialsSection from './TestimonialsSection.tsx';

type HomePageProps = {
  onNavigate: (sectionId: string) => void;
};

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <OverviewSection />
      <DimensionsSection />
      <ImpactSection />
      <ImpactDetailsSection />
      <LegacySection />
      <SustainabilitySection />
      <TestimonialsSection />
      <GallerySection />
    </>
  );
}

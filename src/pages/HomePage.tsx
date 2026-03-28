import HeroSection from '../components/home/HeroSection.tsx';
import DimensionsSection from '../components/home/DimensionsSection.tsx';
import GallerySection from '../components/home/GallerySection.tsx';
import ImpactSection from '../components/home/ImpactSection.tsx';
import ImpactDetailsSection from '../components/home/ImpactDetailsSection.tsx';
import LegacySection from '../components/home/LegacySection.tsx';
import SustainabilitySection from '../components/home/SustainabilitySection.tsx';
import TestimonialsSection from '../components/home/TestimonialsSection.tsx';

type HomePageProps = {
  onNavigate: (sectionId: string) => void;
};

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
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

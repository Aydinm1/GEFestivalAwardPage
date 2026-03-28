import HeroSection from '../components/home/HeroSection.tsx';
import DimensionsSection from '../components/home/DimensionsSection.tsx';
import GallerySection from '../components/home/GallerySection.tsx';
import ImpactSection from '../components/home/ImpactSection.tsx';
import TestimonialsSection from '../components/home/TestimonialsSection.tsx';
import type { View } from '../types.ts';

type HomePageProps = {
  setView: (view: View) => void;
};

export default function HomePage({ setView }: HomePageProps) {
  return (
    <>
      <HeroSection setView={setView} />
      <DimensionsSection />
      <ImpactSection />
      <TestimonialsSection />
      <GallerySection />
    </>
  );
}

import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import PackageHighlights from "./components/PackageHighlight";
import PlanWithUs from "./components/PlanWithUs";
import VisaRequirements from "./components/VisaRequirements";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PackageHighlights />
      <GallerySection />
      <PlanWithUs />
      <VisaRequirements />
    </main>
  );
}

import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import PackageHighlights from "./components/PackageHighlight";
import VisaRequirements from "./components/VisaRequirements";
import FaqSection from "./components/FaqSection";
import PlanWithUs from "@/components/PlanWithUs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PackageHighlights />
      <GallerySection />
      <PlanWithUs />
      <FaqSection />
      <VisaRequirements />
      <FaqSection />
    </main>
  );
}

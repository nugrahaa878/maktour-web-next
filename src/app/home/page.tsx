import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import PackageHighlights from "./components/PackageHighlight";
import ServicesOverview from "./components/ServiceOverview";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PackageHighlights />
      <ServicesOverview />
      <GallerySection />
      {/* <VisaRequirements /> */}
    </main>
  );
}

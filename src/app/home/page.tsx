import HeroSection from "./components/HeroSection";
import PackageHighlights from "./components/PackageHighlight";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PackageHighlights />
      {/* <ServicesOverview /> */}
      {/* <GallerySection /> */}
      {/* <VisaRequirements /> */}
    </main>
  );
}

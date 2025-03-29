import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import PackageHighlights from "./components/PackageHighlight";
import VisaRequirements from "./components/VisaRequirements";
import FaqSection from "./components/FaqSection";
import PlanWithUs from "@/components/PlanWithUs";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PackageHighlights />
      <GallerySection />
      <PlanWithUs />
      <FaqSection />
      <Footer />
    </main>
  );
}

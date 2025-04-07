import HeroSection from "@/components/HeroSection";
import HeroSectionSearch from "@/components/HeroSectionSearch";
import Navbar from "@/components/navbar";

const HelpPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar isWhiteBackground />
      <HeroSectionSearch
        title="Bantuan"
        description="Hi, apa yang dapat kami bantu?"
      />
    </main>
  );
}

export default HelpPage;
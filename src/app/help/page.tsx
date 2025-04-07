import HeroSection from "@/components/HeroSection";
import HeroSectionSearch from "@/components/HeroSectionSearch";
import Navbar from "@/components/navbar";
import TopicList from "@/components/TopicList";

const HelpPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar isWhiteBackground />
      <HeroSectionSearch
        title="Bantuan"
        description="Hi, apa yang dapat kami bantu?"
      />
      <TopicList />
    </main>
  );
}

export default HelpPage;
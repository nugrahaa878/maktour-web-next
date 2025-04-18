import Navbar from '@/components/navbar';
import HeroSection from '../../components/HeroSection';
import Footer from '@/components/footer';
import UmrahContent from './UmrahContent';

const UmrahPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar isWhiteBackground />
      <HeroSection
        title="Umrah & Ziyarah"
        description="Experience a spiritual journey like no other with our comprehensive Umrah packages. Let us guide you through this blessed pilgrimage with comfort and devotion."
        buttonText="Plan with Us"
      />
      <UmrahContent />
      <Footer />
    </main>
  );
}

export default UmrahPage;
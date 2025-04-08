import Navbar from '@/components/navbar';
import HeroSection from '../../components/HeroSection';
import Footer from '@/components/footer';
import TncContent from './TncContent';

const TncPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar isWhiteBackground />
      <HeroSection
        title="Privacy Policy"
        description="Last Update: Jan 15, 2025"
        buttonText="Plan Your Umrah"
      />
      <TncContent />
      <Footer />
    </main>
  );
}

export default TncPage;
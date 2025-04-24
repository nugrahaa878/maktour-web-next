import Navbar from '@/components/navbar';
import HeroSection from '../../components/HeroSection';
import Footer from '@/components/footer';
import HajjContent from './HajjContent';
import BreadCrumb from '@/components/BreadCrumb';

const HajjPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar isWhiteBackground />
      <HeroSection
        title="Hajj"
        description="Experience a spiritual journey like no other with our comprehensive Hajj packages. Let us guide you through this blessed pilgrimage with comfort and devotion."
        buttonText="Plan Your Hajj"
      />
      <div className="container mx-auto px-4 pt-16">
        <BreadCrumb items={[{ label: 'Home', href: '/' }, { label: 'Hajj', href: '#' }]} />
      </div>
      <HajjContent />
      <Footer />
    </main>
  );
}

export default HajjPage;
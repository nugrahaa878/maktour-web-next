import Navbar from '@/components/navbar';
import HeroSection from '../../components/HeroSection';
import Footer from '@/components/footer';
import UmrahContent from './UmrahContent';
import BreadCrumb from '@/components/BreadCrumb';

const UmrahPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar isWhiteBackground />
      <HeroSection
        title="Umrah & Ziyarah"
        description="Experience a spiritual journey like no other with our comprehensive Umrah packages. Let us guide you through this blessed pilgrimage with comfort and devotion."
        buttonText="Plan with Us"
      />
      <div className="container mx-auto px-4 pt-16">
        <BreadCrumb items={[{ label: 'Home', href: '/' }, { label: 'Umrah', href: '#' }]} />
      </div>
      <UmrahContent />
      <Footer />
    </main>
  );
}

export default UmrahPage;
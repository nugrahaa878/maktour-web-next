import Navbar from '@/components/navbar';
import HeroSection from '../../components/HeroSection';
import Footer from '@/components/footer';
import PrivacyPolicyContent from './PrivacyPolicyContent';

const PrivacyPolicyPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar isWhiteBackground />
      <HeroSection
        title="Privacy Policy"
        description="Learn about how we collect, use, and protect your personal information when you use our services."
        buttonText="Read More"
      />
      <PrivacyPolicyContent />
      <Footer />
    </main>
  );
}

export default PrivacyPolicyPage; 
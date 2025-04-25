import Navbar from '@/components/navbar';
import HeroSection from '../../components/HeroSection';
import Footer from '@/components/footer';
import ContactUsContent from './ContactUsContent';

const ContactUsPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar isWhiteBackground />
      <HeroSection
        title="Contact Us"
        description="Have questions or need assistance? Reach out to our team. We're here to help you."
        buttonText="Get in Touch"
      />
      <ContactUsContent />
      <Footer />
    </main>
  );
}

export default ContactUsPage;

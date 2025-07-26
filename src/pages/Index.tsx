import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Slideshow from '@/components/Slideshow';
import ServicesSection from '@/components/ServicesSection';
import AppointmentSection from '@/components/AppointmentSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <Slideshow />
        <ServicesSection />
        <AppointmentSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

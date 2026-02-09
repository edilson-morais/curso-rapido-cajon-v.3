import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import HouseAnalogySection from "@/components/HouseAnalogySection";
import MethodSection from "@/components/MethodSection";
import TimelineSection from "@/components/TimelineSection";
import StorySection from "@/components/StorySection";
import OfferSection from "@/components/OfferSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import UrgencySection from "@/components/UrgencySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PainSection />
      <HouseAnalogySection />
      <MethodSection />
      <TimelineSection />
      <StorySection />
      <OfferSection />
      <TestimonialsSection />
      <UrgencySection />
      <Footer />
    </main>
  );
};

export default Index;

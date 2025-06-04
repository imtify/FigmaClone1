import HeroSection from "@/components/sections/HeroSection";
import OurClientSection from "@/components/sections/OurClientSection";
import CommunitySection from "@/components/sections/CommunitySection";
import PixelGradeSection from "@/components/sections/PixelGradeSection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import FooterDesignSection from "@/components/sections/FooterDesignSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import BlogSection from "@/components/sections/BlogSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col gap-10 bg-white mx-auto">
      <HeroSection />
      <OurClientSection />
      <CommunitySection />
      <PixelGradeSection />
      <StatisticsSection />
      <FooterDesignSection />
      <TestimonialSection />
      <BlogSection />
      <FinalCTASection />
    </div>
  );
}

import OurServicesSection from "@/components/views/Home_view/OurServicesSection";
import SweetMarquee from "@/components/shared/SweetMarquee";
import WhoWeAre from "@/components/views/Home_view/WhoWeAre";
import WhyUs from "@/components/views/Home_view/WhyUs";
import HowToHireBus from "@/components/views/Home_view/HowToHireBus";
import OurBuses from "@/components/views/Home_view/OurBuses";
import Testimonial from "@/components/views/Home_view/Testimonial";
import OurLatestArticles from "@/components/views/Home_view/OurLatestArticles";
import FAQ from "@/components/views/Home_view/FAQ";
import HeroSectionV2 from "@/components/views/Home_view/HeroSectionV2";
import OurServicesV2 from "@/components/views/Home_view/OurServicesV2";
import Section2 from "@/components/views/Home_view/Section2";
import CTASection2 from "@/components/shared/CTAsectrion2";
import StructuredData from "@/components/structuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <HeroSectionV2 />
      <OurServicesV2 />
      <Section2 />
      <SweetMarquee />
      <OurServicesSection />
      <WhoWeAre />
      <WhyUs />
      <HowToHireBus />
      <OurBuses />
      <Testimonial />
      <OurLatestArticles />
      <FAQ />
      <CTASection2 />
      <div className="mt-10"></div>
      <SweetMarquee />
    </>
  );
}

import ServicesSection from "@/sections/SevicesSection";
import HeaderService from "@/sections/HeaderService";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";

export default function AboutPage() {
    return (
      <>
      <HeaderService/>
      <ServicesSection/>
      <CallToAction/>
      <Footer/>
      </>
    );
  }
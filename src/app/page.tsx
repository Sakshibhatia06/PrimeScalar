import { Header } from "@/sections/Header";
import {Hero} from '@/sections/Hero';
import {LogoTicker} from '@/sections/LogoTicker';
import {Features} from '@/sections/Features';
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import OurProcessPage from "@/sections/OurProcessPage";
import AlternateLayoutPage from "@/sections/AlternateLayoutPage";
import { Footer } from "@/sections/Footer";
import Meaning from "@/sections/Meaning";

export default function Home() {
  return <> 
  <Header/> 
  <Hero/> 
  <LogoTicker/>
  <Features/>
  <Meaning/>
  <OurProcessPage/>
  <AlternateLayoutPage/>
  <Testimonials/>
  <CallToAction/>
  <Footer/>
  </>;  
}

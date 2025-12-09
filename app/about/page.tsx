import AboutHero from "../components/about/AboutHero";
import AboutStats from "../components/about/AboutStats";
import CustomizedFurniture from "../components/about/CustomizedFurniture";
import SpecialTeam from "../components/about/SpecialTeam";
import CustomerTestimonials from "../components/about/CustomerTestimonials";
import Partners from "../components/about/Partners";
import Newsletter from "../components/about/Newsletter";
import VisionMission from "../components/about/VisionMission";
import Representation from "../components/about/Representation";
import EquipmentCapabilities from "../components/about/EquipmentCapabilities";
import OfficeLocations from "../components/about/OfficeLocations";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import AboutAlternate from "../components/about/AboutAlternate";

const About = () => {
  return (
    <section className="overflow-x-hidden">
      <AboutHero />

      {/* <AboutContent /> */}
      <AboutAlternate />
      <VisionMission />
      {/* <CustomizedFurniture /> */}
      <AboutStats />
      {/* <CustomizedFurniture /> */}
      <SpecialTeam />
      {/* <CustomerTestimonials /> */}
      <Partners />
      <Representation />
      {/* <EquipmentCapabilities /> */}
      <OfficeLocations />
      <Newsletter />
    </section>
  );
};

export default About;

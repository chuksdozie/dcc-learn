import Contributors from "@/components/contributors/Contributors";
import HeroSection from "@/components/hero/HeroSection";
import Partners from "@/components/partners/Partners";
import React from "react";
import SectionLayout from "../SectionLayout";
import AboutUs from "@/components/about_us/AboutUs";
import Events from "@/components/events/Events";
import Gallery from "@/components/gallery/Gallery";
import Stacks from "@/components/stacks/Stacks";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center ">
      <HeroSection />
      <Stacks />
      {/* <AboutUs /> */}
      {/* <Contributors /> */}
    </div>
  );
};

export default HomePage;

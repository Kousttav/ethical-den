import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Vision from "../components/Vision";
import Award from "../components/Award";
import News from "../components/News";
import Footer from "../components/Footer";
import Advertise from "../components/Advertise";
import Brand from "../components/Brand";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Vision />
      <Advertise/>
      <Award />
      <News />
      <Brand />
      <Footer />  
    </>
  );
};

export default AboutPage;
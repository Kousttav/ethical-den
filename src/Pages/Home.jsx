// Home.jsx

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Discover from "../components/Discover";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Award from "../components/Award";
import Galary from "../components/Galary";
import News from "../components/News";
import Footer from "../components/Footer";
import Advertise from "../components/Advertise";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
      </div>

      <About />
      <Discover />
      <Stats />
      <Features />
      <Award />
      <Advertise/>
      <Galary />
      <News />
      <Footer />
    </>
  );
};

export default Home;
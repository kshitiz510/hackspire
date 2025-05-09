import Navbar from "../components/common/Navbar";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import TracksSection from "../components/sections/TrackSection";
import SponsorsSection from "../components/sections/SponsorsSection";
import TimelineSection from "../components/sections/TimelineSection";
import Footer from "../components/common/Footer";
import FAQsSection from "../components/sections/FAQsSection";
import mergedBg from "../assets/merged-bg.png";

const HomePage = () => {
  return (
    <div
      className="bg-repeat bg-black min-h-screen"
      style={{
        backgroundImage: `url(${mergedBg})`,
      }}
    >
      <Navbar />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="timeline">
        <TimelineSection />
      </section>
      <section id="tracks">
        <TracksSection />
      </section>
      <section id="sponsors">
        <SponsorsSection />
      </section>
      <section id="faqs">
        <FAQsSection />
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;

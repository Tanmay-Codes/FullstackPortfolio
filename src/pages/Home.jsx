import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectSection from "../components/ProjectSection";
import TestimonialSection from "../components/TestimonialSection";
function Home() {
  return (
    <div className="bg-hero bg-cover bg-no-repeat bg-center bg-fixed h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectSection />
      <TestimonialSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default Home;

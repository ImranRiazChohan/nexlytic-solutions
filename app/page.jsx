"use client";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ background: "#0a0a0a", color: "#e8e8e8", minHeight: "100vh" }}>
      <Navigation scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      {/* <TechStack /> */}
      <div id="services">
        <Services />
      </div>

      <Portfolio />
      <Process />
      <WhyChooseUs />
      {/* <About scrollTo={scrollTo} /> */}
      {/* <Testimonials /> */}
      <CTA scrollTo={scrollTo} />
      {/* <div id="contact">
        <Contact />
      </div> */}
      <Footer />
    </div>
  );
}

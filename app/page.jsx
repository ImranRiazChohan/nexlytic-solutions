"use client";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import About from "./components/About";
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
      <div id="services">
        <Services />
      </div>
      <About scrollTo={scrollTo} />
      <div id="why">
        <WhyChooseUs />
      </div>
      <div id="process">
        <Process />
      </div>
      <Testimonials />
      <CTA scrollTo={scrollTo} />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

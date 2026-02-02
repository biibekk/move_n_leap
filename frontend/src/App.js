import './App.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Features from "./components/Features";
import Activities from "./components/Activities";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";


import { useRef, useState, useEffect } from "react";

export default function App() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const activitiesRef = useRef(null);
  const aboutRef = useRef(null);
  const testimonialsRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    if (!ref?.current) return;

    // Get the current navbar height from the DOM
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 80;

    let targetElement = ref.current;

    // On mobile/tablet (less than 1024px), if scrolling to CTA, target the form directly
    if (ref === ctaRef && window.innerWidth < 1024) {
      const formSection = document.querySelector('.cta-form-section');
      if (formSection) {
        targetElement = formSection;
      }
    }

    const y =
      targetElement.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight;

    window.scrollTo({ top: y, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      <Navbar
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        sections={{
          heroRef,
          featuresRef,
          activitiesRef,
          aboutRef,
          testimonialsRef,
          faqRef,
          ctaRef,
        }}
      />

      <section ref={heroRef}>
        <Hero scrollToSection={scrollToSection} aboutRef={aboutRef} ctaRef={ctaRef} />
      </section>
      <section ref={featuresRef}><Features scrollToSection={scrollToSection} ctaRef={ctaRef} /></section>
      <section ref={activitiesRef}>
        <Activities scrollToSection={scrollToSection} sections={{ ctaRef }} />
      </section>
      <section ref={aboutRef}><About scrollToSection={scrollToSection} ctaRef={ctaRef} /></section>
      <section ref={testimonialsRef}><Testimonials scrollToSection={scrollToSection} ctaRef={ctaRef} /></section>
      <section ref={faqRef}><FAQ /></section>
      <section ref={ctaRef}><CTA /></section>

      <Footer scrollToSection={scrollToSection} ctaRef={ctaRef} />
    </>
  );
}
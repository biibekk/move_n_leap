import Hero from "./components/Hero";
import Features from "./components/Features";
import Activities from "./components/Activities";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Hero />
      <Features />
      <Activities />
      <About />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
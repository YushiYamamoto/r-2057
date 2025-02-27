
import Hero from "@/components/Hero";
import PropertyGrid from "@/components/PropertyGrid";
import AboutUs from "@/components/AboutUs";
import OurVision from "@/components/OurVision";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <section id="properties" className="py-32">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-5xl font-display text-estate-800 mb-16">厳選物件</h2>
          <PropertyGrid />
        </div>
      </section>

      <section id="about">
        <AboutUs />
      </section>
      
      <OurVision />
      
      <section id="testimonials">
        <Testimonials />
      </section>
      
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default Index;

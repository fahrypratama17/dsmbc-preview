import Hero from "@/feature/components/Hero";
import Footer from "@/feature/components/Footer";
import Navbar from "@/feature/components/Navbar";
import CountdownSection from "@/feature/components/CountdownSection";
import About from "@/feature/components/About";
import Timeline from "@/feature/components/Timeline";
import LearningPath from "@/feature/components/LearningPath";
import Benefit from "@/feature/components/Benefit";
import CTA from "@/feature/components/CTA";

const PageContainer = () => {
  return (
    <>
      <Navbar />
      <section className="pt-28 md:pt-40">
        <Hero />
        <CountdownSection />
        <About />
        <Timeline />
        <LearningPath />
        <Benefit />
        <CTA />
      </section>
      <Footer />
    </>
  );
};

export default PageContainer;
import Hero from "@/feature/components/Hero";
import Footer from "@/feature/components/Footer";
import Navbar from "@/feature/components/Navbar";
import CountdownSection from "@/feature/components/CountdownSection";
import About from "@/feature/components/About";
import Timeline from "@/feature/components/Timeline";
import LearningPath from "@/feature/components/LearningPath";

const PageContainer = () => {
  return (
    <>
      <Navbar />
      <section className="px-6 pt-28 md:px-24 md:pt-40">
        <Hero />
        <CountdownSection />
        <About />
        <Timeline />
        <LearningPath />
      </section>
      <Footer />
    </>
  );
};

export default PageContainer;
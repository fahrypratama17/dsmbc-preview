import Hero from "@/feature/components/Hero";
import Footer from "@/feature/components/Footer";
import Navbar from "@/feature/components/Navbar";

const PageContainer = () => {
  return (
    <>
      <Navbar />
      <section className="px-6 pt-28 md:px-24 md:pt-40">
        <Hero />
        <Footer />
      </section>

    </>
  );
};

export default PageContainer;
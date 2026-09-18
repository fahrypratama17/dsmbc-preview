import Reveal from "@/shared/components/Reveal";
import SectionHeading from "@/shared/components/SectionHeading";

const About = () => {
  return (
    <section className="flex flex-col px-6 md:px-24 gap-8 lg:gap-10 mb-28 lg:mb-44">
      <SectionHeading text="ABOUT" />
      <Reveal className="flex flex-col gap-5 justify-center" stagger={150}>
        <h1 className="font-semibold text-2xl lg:text-4xl text-slate-700 text-center">
          About{" "}
          <span className="relative inline-block text-orange-500 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-orange-500 after:transition-transform after:duration-500 hover:after:scale-x-100">
            Data Science
          </span>{" "}
          Mini <br /> Bootcamp 2026
        </h1>
        <p className="font-medium text-base lg:text-xl text-gray-600 text-center mx-auto lg:mx-64">
          <span className="font-bold">
            Explore the world of Data Science through &quot;Data Odyssey:
          </span>{" "}
          A Journey from Data to Intelligence,&quot; a project-based mini bootcamp organized by the
          Data Science Department of Basic Computing Community, Faculty of Computer Science. Over
          these 2 weeks, you will experience firsthand how data is processed, analyzed, and
          transformed into meaningful insights while developing practical skills in data analysis
          and machine learning through real-world projects.
        </p>
      </Reveal>
    </section>
  );
};

export default About;

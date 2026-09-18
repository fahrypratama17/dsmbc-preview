import Image from "next/image";
import Reveal from "@/shared/components/Reveal";
import SectionHeading from "@/shared/components/SectionHeading";
import TiltCard from "@/shared/components/TiltCard";

const days = [
  { icon: "/images/startup.svg", day: "DAY 0", desc: "The Case Begins" },
  {
    icon: "/images/folder-search.svg",
    day: "DAY 1",
    desc: "Uncovering Clues in the Data Through Investigation",
  },
  { icon: "/images/search.svg", day: "DAY 2", desc: "Preparing the Evidence for Investigation" },
  {
    icon: "/images/puzzle-piece.svg",
    day: "DAY 3",
    desc: "Solving the Mystery Through Predictive Modeling",
  },
  {
    icon: "/images/presentation.svg",
    day: "DAY 4",
    desc: "Revealing the Answer: The Final Presentation",
  },
];

const cardClass =
  "group flex lg:flex-col gap-6 lg:gap-8 items-center p-6 lg:px-10 lg:py-20 border-[1px] rounded-xl lg:rounded-[32px] w-full h-[105px] lg:w-[400px] lg:h-[496px] bg-neutral-50 border-gray-200 hover:border-light-blue/40 hover:shadow-2xl hover:shadow-light-blue/15";

const DayCard = ({ icon, day, desc }: (typeof days)[number]) => (
  <TiltCard className={cardClass} intensity={5}>
    <div className="p-5 rounded-full bg-linear-to-r from-gray-200 to-white transition-all duration-400 group-hover:scale-110 group-hover:from-light-blue/20 group-hover:to-white">
      <Image
        src={icon}
        alt=""
        className="justify-center transition-transform duration-400 group-hover:-rotate-6 lg:w-12 lg:h-12"
        width={24}
        height={24}
      />
    </div>
    <div className="flex flex-col gap-1 lg:gap-4 items-start lg:items-center justify-start lg:justify-center text-left lg:text-center">
      <h1 className="font-medium text-xl lg:text-4xl text-slate-700 transition-colors duration-300 group-hover:text-light-blue">
        {day}
      </h1>
      <p className="font-medium text-sm lg:text-2xl text-gray-600">{desc}</p>
    </div>
  </TiltCard>
);

const LearningPath = () => {
  return (
    <section className="flex flex-col gap-8 lg:gap-10 mb-28 lg:mb-44 px-6 md:px-24">
      <SectionHeading text="LEARNING PATH" />
      <div className="flex flex-col gap-2 md:gap-3 lg:gap-5">
        <Reveal
          className="flex flex-col lg:grid lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 justify-items-center"
          stagger={120}
          distance={40}
        >
          {days.slice(0, 3).map((item) => (
            <DayCard key={item.day} {...item} />
          ))}
        </Reveal>
        <Reveal
          className="flex flex-col lg:flex-row gap-2 md:gap-3 lg:gap-5 justify-center"
          stagger={120}
          distance={40}
        >
          {days.slice(3).map((item) => (
            <DayCard key={item.day} {...item} />
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default LearningPath;

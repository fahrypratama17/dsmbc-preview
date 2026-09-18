import Image from "next/image";
import Reveal from "@/shared/components/Reveal";
import SectionHeading from "@/shared/components/SectionHeading";
import TiltCard from "@/shared/components/TiltCard";

const benefits = [
  {
    icon: "/images/image-1.svg",
    title: "Upgrading Your Skills",
    desc: "Enhance your technical & analytical skill abilities",
  },
  {
    icon: "/images/image-2.svg",
    title: "Exclusive Mentorship",
    desc: "Direct access to experienced professional mentors",
  },
  {
    icon: "/images/image-3.svg",
    title: "Certificate of Completion",
    desc: "Official Winner Certificate – BCC FILKOM UB Kaggle Competition",
  },
  {
    icon: "/images/image-4.svg",
    title: "Getting More Networking",
    desc: "Meet peers & professionals in the data science field",
  },
];

const Benefit = () => {
  return (
    <section className="flex flex-col gap-8 lg:gap-10 mb-28 lg:mb-44 px-6 md:px-24">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-8 lg:gap-10 justify-left">
          <SectionHeading text="Benefit" align="left" />
          <Reveal from="left" distance={32}>
            <h1 className="text-left font-semibold text-2xl lg:text-4xl text-slate-700">
              <span className="text-orange-500">Benefits</span> You
              <br /> Will Get
            </h1>
          </Reveal>
        </div>
        <Image
          src={"/images/pattern-1.svg"}
          alt=""
          className="animate-float-soft justify-end items-end lg:w-21.25 lg:h-35.75"
          width={57}
          height={114}
        />
      </div>
      <Reveal
        className="flex flex-wrap gap-4 lg:gap-3 justify-center mx-auto"
        stagger={120}
        distance={40}
      >
        {benefits.map((f) => (
          <TiltCard
            key={f.title}
            className="group flex flex-col gap-4 lg:gap-6 px-5 lg:px-7 py-6 lg:py-10 rounded-xl w-36.5 h-61.5 lg:w-72.5 lg:h-82.5 bg-neutral-50 border border-gray-200 hover:bg-light-blue hover:border-transparent hover:text-neutral-50 hover:shadow-2xl hover:shadow-light-blue/30"
          >
            <div className="p-2 lg:p-3 w-fit rounded-full bg-light-blue transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-linear-to-r group-hover:from-gray-200 group-hover:to-white">
              <div
                className="w-5 h-5 lg:w-8 lg:h-8 bg-white group-hover:bg-light-blue transition"
                style={{
                  WebkitMask: `url(${f.icon}) no-repeat center`,
                  mask: `url(${f.icon}) no-repeat center`,
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                }}
              />
            </div>
            <div className="flex flex-col gap-1 lg:gap-4">
              <h1 className="font-semibold text-base lg:text-2xl text-slate-700 group-hover:text-white transition">
                {f.title}
              </h1>
              <p className="font-medium text-sm lg:text-xl text-gray-600 group-hover:text-white transition">
                {f.desc}
              </p>
            </div>
          </TiltCard>
        ))}
      </Reveal>
    </section>
  );
};

export default Benefit;

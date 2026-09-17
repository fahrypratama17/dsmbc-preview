"use client"

import Image from "next/image";
import Button from "@/shared/components/Button";
import Label from "@/shared/components/Label";

const Hero = () => {
  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex w-full px-6 md:px-24">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <Image
          src={("/images/Photo1.svg")}
          alt="DSMBC 2025"
          className="text-center mx-auto items-center lg:justify-left lg:w-126.25 md:h-116"
          width={364}
          height={334}
        />
        <div className="flex flex-col gap-5 lg:gap-10">
          <div className="flex flex-col gap-3">
            <Label text="Data Science" className="bg-orange-500/20 text-orange-500 text-xs lg:text-sm"/>
            <h1 className="font-semibold text-3xl lg:text-5xl text-slate-700">Data Science Mini Bootcamp 2026</h1>
            <h2 className="font-medium text-xl lg:text-2xl text-slate-700">&quot;Data Odyssey: A Journey from Data to Intelligence&quot;</h2>
          </div>
          <p className="font-medium text-base lg:text-xl text-gray-600">Embark on a transformative journey through “A Hero’s Odyssey,” where every participant becomes a traveler on an epic quest to grow into a Data Science professional. Along the journey, you will build essential technical skills, strengthen your problem-solving mindset, and develop the capabilities needed to navigate the world of Data Science.</p>
          <Button variant="secondary" className="w-36 h-12" onClick={() => handleClickScroll("countdown")}>
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
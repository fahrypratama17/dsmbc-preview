"use client";

import { Calendar, Clock } from "lucide-react";
import Button from "@/shared/components/Button";
import CountDown from "@/shared/components/CountDown";
import Reveal from "@/shared/components/Reveal";
import SectionHeading from "@/shared/components/SectionHeading";
import { GUIDEBOOK_URL, REGISTRATION_URL } from "@/shared/constants/links";

const CLOSE_REGISTRATION = new Date("2026-10-10T00:00:00+07:00");

const CountdownSection = () => {
  const handleClickDownload = () => {
    window.open(encodeURI(GUIDEBOOK_URL), "_blank", "noopener,noreferrer");
  };

  const handleClickRegister = () => {
    window.open(REGISTRATION_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      id="countdown"
      className="flex scroll-mt-28 flex-col gap-8 lg:gap-10 py-28 lg:py-44 px-6 md:px-24"
    >
      <SectionHeading text="COUNTDOWN" />
      <div className="flex flex-col gap-6 lg:gap-10">
        <Reveal from="up" distance={32}>
          <CountDown closeRegistration={CLOSE_REGISTRATION} />
        </Reveal>
        <Reveal
          className="flex gap-4 items-center justify-center text-gray-400 font-semibold text-sm"
          stagger={120}
          distance={16}
          duration={500}
        >
          <div className="flex gap-1 items-center transition-colors duration-300 hover:text-orange-500">
            <Calendar size={24} />
            <p>10 OKTOBER 2026</p>
          </div>
          <div className="flex gap-1 items-center transition-colors duration-300 hover:text-light-blue">
            <Clock size={24} />
            <p>TIMELEFT</p>
          </div>
        </Reveal>
        <Reveal className="flex justify-center gap-4" stagger={120} distance={20}>
          <Button variant="primary" className="h-12" onClick={handleClickDownload}>
            Download Guidelines
          </Button>
          <Button variant="secondary" className="h-12" onClick={handleClickRegister}>
            Register Now
          </Button>
        </Reveal>
      </div>
    </div>
  );
};

export default CountdownSection;

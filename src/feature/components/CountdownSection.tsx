"use client";

import { Calendar, Clock } from "lucide-react";
import Button from "@/shared/components/Button";
import CountDown from "@/shared/components/CountDown";

const CLOSE_REGISTRATION = new Date("2026-10-10T00:00:00+07:00");
const GUIDEBOOK_URL = "/files/Guidebook DSMBC 2025.pdf";
// TODO: replace with the actual registration link
const REGISTRATION_URL = "#";

const CountdownSection = () => {
  const handleClickDownload = () => {
    window.open(encodeURI(GUIDEBOOK_URL), "_blank", "noopener,noreferrer");
  };

  const handleClickRegister = () => {
    window.open(REGISTRATION_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="countdown" className="flex flex-col gap-8 lg:gap-10 py-28 lg:py-44 px-6 md:px-24">
      <div className="flex gap-4 items-center justify-center text-light-blue">
        <hr className="border-light-blue border w-16"/>
        <h1 className="text-center font-semibold text-base lg:text-xl">COUNTDOWN</h1>
        <hr className="border-light-blue border w-16"/>
      </div>
      <div className="flex flex-col gap-6 lg:gap-10">
        <CountDown closeRegistration={CLOSE_REGISTRATION} />
        <div className="flex gap-4 items-center justify-center text-gray-400 font-semibold text-sm">
          <div className="flex gap-1 items-center">
            <Calendar size={24} />
            <p>10 OKTOBER 2026</p>
          </div>
          <div className="flex gap-1 items-center">
            <Clock size={24}/>
            <p>TIMELEFT</p>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <Button variant="primary" className="h-12" onClick={handleClickDownload}>
            Download Guidelines
          </Button>
          <Button variant="secondary" className="h-12" onClick={handleClickRegister}>
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CountdownSection;

"use client";

import Image from "next/image";
import Label from "@/shared/components/Label";
import Button from "@/shared/components/Button";
import {ArrowRight} from "lucide-react";
import { REGISTRATION_URL } from "@/shared/constants/links";

const CTA = () => {
  const handleClickRegister = () => {
    window.open(REGISTRATION_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="flex w-full mb-28 lg:mb-44 px-6 py-10 lg:px-48 lg:py-20 relative bg-linear-to-b from-dark-blue to-[#183F5C]">
      <Image
        src={("/images/bg-1.svg")}
        alt=""
        className="absolute left-0 bottom-0 opacity-80 hidden lg:block"
        width={1440}
        height={1440}
      />

      <div className="flex flex-col justify-center items-center z-10">
        <Image
          src={("/images/mask-group.svg")}
          alt="DSMBC 2025"
          className="justify-center lg:h-40 lg:w-40 mb-10 lg:mb-14"
          width={80}
          height={80}
        />
        <h1 className="text-center font-semibold text-2xl lg:text-5xl text-neutral-50 mb-3">A Rare, Once-a-Year Opportunity!</h1>
        <p className="font-medium text-base mx-6 lg:mx-52 lg:text-2xl text-neutral-50 text-center mb-10">
          Learn Data Science, try AI Models, and join a data competition all in one intensive bootcamp from <span className="font-bold">FILKOM BCC UB</span>
        </p>
        <Label text="Limited Quota, Register Now!" className="bg-error-100 text-error-primary text-sm"/>
        <Button variant="secondary" className="mt-10" onClick={handleClickRegister}>Register Now <ArrowRight size={24} className="size-4 lg:size-5"/></Button>
      </div>
    </section>
  );
};

export default CTA;
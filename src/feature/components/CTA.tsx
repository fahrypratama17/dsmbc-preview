"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Label from "@/shared/components/Label";
import Button from "@/shared/components/Button";
import Reveal from "@/shared/components/Reveal";
import { ArrowRight } from "lucide-react";
import { REGISTRATION_URL } from "@/shared/constants/links";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CTA = () => {
  const scope = useRef<HTMLElement>(null);

  const handleClickRegister = () => {
    window.open(REGISTRATION_URL, "_blank", "noopener,noreferrer");
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(".cta-backdrop", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: scope.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope },
  );

  return (
    <section
      ref={scope}
      className="flex w-full mb-28 lg:mb-44 px-6 py-10 lg:px-48 lg:py-20 relative overflow-hidden bg-linear-to-b from-dark-blue to-[#183F5C]"
    >
      <Image
        src={"/images/bg-1.svg"}
        alt=""
        className="cta-backdrop absolute left-0 bottom-0 opacity-80 hidden lg:block"
        width={1440}
        height={1440}
      />

      <Reveal
        className="flex flex-col justify-center items-center z-10 mx-auto"
        stagger={120}
        distance={32}
      >
        <Image
          src={"/images/mask-group.svg"}
          alt="DSMBC 2025"
          className="animate-float-soft justify-center lg:h-40 lg:w-40 mb-10 lg:mb-14"
          width={80}
          height={80}
        />
        <h1 className="text-center font-semibold text-2xl lg:text-5xl text-neutral-50 mb-3">
          A Rare, Once-a-Year Opportunity!
        </h1>
        <p className="font-medium text-base mx-6 lg:mx-52 lg:text-2xl text-neutral-50 text-center mb-10">
          Learn Data Science, try AI Models, and join a data competition all in one intensive
          bootcamp from <span className="font-bold">FILKOM BCC UB</span>
        </p>
        <Label
          text="Limited Quota, Register Now!"
          className="bg-error-100 text-error-primary text-sm animate-pulse"
        />
        <Button variant="secondary" className="mt-10" onClick={handleClickRegister}>
          Register Now
          <ArrowRight
            size={24}
            className="size-4 lg:size-5 transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </Button>
      </Reveal>
    </section>
  );
};

export default CTA;

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDown } from "lucide-react";
import Button from "@/shared/components/Button";
import Label from "@/shared/components/Label";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const scope = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setShown(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference) and (min-width: 1024px)", () => {
        const visual = scope.current?.querySelector<HTMLElement>(".hero-visual");
        if (!visual) return;

        const move = gsap.quickTo(visual, "x", { duration: 0.8, ease: "power3.out" });
        const moveY = gsap.quickTo(visual, "y", { duration: 0.8, ease: "power3.out" });

        const onMove = (event: PointerEvent) => {
          move((event.clientX / window.innerWidth - 0.5) * 22);
          moveY((event.clientY / window.innerHeight - 0.5) * 18);
        };

        window.addEventListener("pointermove", onMove);
        return () => {
          window.removeEventListener("pointermove", onMove);
          gsap.set(visual, { x: 0, y: 0 });
        };
      });
    },
    { scope },
  );

  const state = shown ? "shown" : "";

  return (
    <section ref={scope} className="flex w-full flex-col px-6 md:px-24">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <Image
          src={"/images/Photo1.svg"}
          alt="DSMBC 2025"
          data-reveal={state}
          style={{ "--reveal-duration": "900ms", "--reveal-y": "24px" } as React.CSSProperties}
          className="hero-visual text-center mx-auto items-center shrink-0 will-change-transform lg:justify-left lg:w-126.25 md:h-116"
          width={364}
          height={334}
          priority
        />
        <div
          data-reveal-group={state}
          style={
            {
              "--reveal-duration": "700ms",
              "--reveal-delay": "150ms",
              "--reveal-stagger": "120ms",
              "--reveal-y": "28px",
            } as React.CSSProperties
          }
          className="flex flex-col gap-5 lg:gap-10"
        >
          <div className="flex flex-col gap-3">
            <Label
              text="Data Science"
              className="bg-orange-500/20 text-orange-500 text-xs lg:text-sm transition-colors duration-300 hover:bg-orange-500/30"
            />
            <h1 className="font-semibold text-3xl lg:text-5xl text-slate-700">
              Data Science Mini Bootcamp 2026
            </h1>
            <h2 className="font-medium text-xl lg:text-2xl text-slate-700">
              &quot;Data Odyssey: A Journey from Data to Intelligence&quot;
            </h2>
          </div>
          <p className="font-medium text-base lg:text-xl text-gray-600">
            Embark on a transformative journey through “A Hero’s Odyssey,” where every participant
            becomes a traveler on an epic quest to grow into a Data Science professional. Along the
            journey, you will build essential technical skills, strengthen your problem-solving
            mindset, and develop the capabilities needed to navigate the world of Data Science.
          </p>
          <Button
            variant="secondary"
            className="w-36 h-12 shrink-0"
            onClick={() => handleClickScroll("countdown")}
          >
            Get Started
          </Button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => handleClickScroll("countdown")}
        aria-label="Scroll to countdown"
        className="mx-auto mt-12 hidden cursor-pointer flex-col items-center gap-2 text-gray-400 transition-colors duration-300 hover:text-light-blue lg:flex"
      >
        <span className="text-xs font-semibold tracking-[0.2em]">SCROLL</span>
        <ArrowDown size={18} className="animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;

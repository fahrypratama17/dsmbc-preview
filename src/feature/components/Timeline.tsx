"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Label from "@/shared/components/Label";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const timelineData = [
  { date: "TBA", title: "Open Registration", type: "start" },
  { date: "12 October 2026", title: "Day 1" },
  { date: "14 October 2026", title: "Day 2" },
  { date: "16 October 2026", title: "Day 3" },
  { date: "17 - 23 October 2026", title: "The Awakening of the Golem" },
  { date: "24 October 2026", title: "The Final Odyssey🏆", type: "end" },
];

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          y: 50,
          duration: 0.5,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center mx-auto lg:mx-8 gap-8 lg:gap-10 mb-28 lg:mb-44 px-6 md:px-24"
    >
      <div className="flex gap-4 items-center justify-center text-light-blue">
        <hr className="border-light-blue border-1 w-16"/>
        <h1 className="text-center font-semibold text-base lg:text-xl">TIMELINE</h1>
        <hr className="border-light-blue border-1 w-16"/>
      </div>

      <div className="font-WorkSans text-xl absolute left-4 top-30 bottom-20 h-150 lg:h-185 w-[3px] bg-orange-500 lg:left-1/2 lg:-translate-x-1/2" />

      {timelineData.map((item, index) => (
        <div
          key={index}
          className="timeline-item relative flex flex-col lg:flex-row items-start lg:items-center justify-between w-full max-w-3xl py-4 lg:py-8"
        >
          <div className="flex lg:hidden w-full">
            <div className="relative flex items-start justify-center mr-10 mt-1">
              <div className="bg-white p-[6px] rounded-full z-10">
                <div
                  className={`bg-orange-500 ${
                    item.type === "start" || item.type === "end"
                      ? "rotate-45 w-6 h-6"
                      : "rounded-full w-6 h-6"
                  }`}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <Label
                text={item.date}
                className={`text-sm text-white mb-1 ${
                  item.type == "start" ? "" : "bg-light-blue"
                }`}
                style={
                  item.type === "start"
                    ? {
                      backgroundImage: `url("/images/bg-chip.svg"))`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                    : undefined
                }
              />
              <div className="font-medium text-gray-700 text-base">
                {item.title}
              </div>
            </div>
          </div>

          {index % 2 === 0 ? (
            <div className="hidden lg:flex w-1/2 justify-end pr-6">
              <Label
                text={item.date}
                className={`text-xl text-center w-fit text-white ${
                  item.type === "start" ? "" : "bg-light-blue"
                }`}
                style={
                  item.type === "start"
                    ? { backgroundImage: `url("/images/bg-chip.svg")` }
                    : undefined
                }
              />
            </div>
          ) : (
            <div className="hidden lg:block w-1/2 text-right pr-6 font-medium text-xl text-gray-600">
              {item.title}
            </div>
          )}

          <div className="hidden lg:flex relative items-center justify-center mx-10">
            <div className="bg-white p-1.5 rounded-full z-10">
              <div
                className={`bg-orange-500 ${
                  item.type === "start" || item.type === "end"
                    ? "rotate-45 w-4 h-4"
                    : "rounded-full w-6 h-6"
                }`}
              />
            </div>
          </div>

          {index % 2 === 0 ? (
            <div className="hidden lg:block w-1/2 text-left pl-6 font-medium text-xl text-gray-600">
              {item.title}
            </div>
          ) : (
            <div className="hidden lg:flex w-1/2 justify-start pl-6">
              <Label
                text={item.date}
                className={`text-xl text-center w-fit text-white ${
                  item.type === "start" ? "" : "bg-light-blue"
                }`}
                style={
                  item.type === "start"
                    ? { backgroundImage: `url("/images/bg-chip.svg")` }
                    : undefined
                }
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
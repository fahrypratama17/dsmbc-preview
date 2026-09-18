"use client";

import Label from "@/shared/components/Label";
import SectionHeading from "@/shared/components/SectionHeading";
import { useReveal } from "@/shared/hooks/useReveal";

const timelineData = [
  { date: "20 Sept - 3 Oct 2026", title: "Open Registration", type: "start" },
  { date: "12 October 2026", title: "Day 1" },
  { date: "14 October 2026", title: "Day 2" },
  { date: "16 October 2026", title: "Day 3" },
  { date: "17 - 23 October 2026", title: "The Trial of the Labyrinth" },
  { date: "24 October 2026", title: "The Final Odyssey🏆", type: "end" },
];

type Item = (typeof timelineData)[number];

const chipStyle = (item: Item, cover: boolean) =>
  item.type === "start"
    ? {
        backgroundImage: `url("/images/bg-chip.svg")`,
        ...(cover ? { backgroundSize: "cover", backgroundPosition: "center" } : {}),
      }
    : undefined;

const Dot = ({ item, size }: { item: Item; size: string }) => (
  <div className="bg-white p-1.5 rounded-full z-10">
    <div
      className={`timeline-dot-inner bg-orange-500 transition-colors duration-300 group-hover:bg-light-blue ${
        item.type === "start" || item.type === "end"
          ? `rotate-45 ${size}`
          : "rounded-full w-6 h-6"
      } ${item.type === "end" ? "animate-pulse-ring" : ""}`}
    />
  </div>
);

const TimelineRow = ({ item, index, isLast }: { item: Item; index: number; isLast: boolean }) => {
  const ref = useReveal<HTMLDivElement>("data-reveal");

  return (
    <div
      ref={ref}
      data-reveal=""
      style={{ "--reveal-duration": "600ms", "--reveal-y": "40px" } as React.CSSProperties}
      className="group relative flex flex-col lg:flex-row items-start lg:items-center justify-between w-full max-w-3xl py-4 lg:py-8"
    >
      {!isLast && (
        <div className="timeline-connector absolute w-0.75 origin-top bg-orange-500 left-[16.5px] top-9.5 -bottom-17.5 lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-bottom-[calc(50%+2.5rem)]" />
      )}

      <div className="flex lg:hidden w-full">
        <div className="relative flex items-start justify-center mr-10 mt-1">
          <Dot item={item} size="w-6 h-6" />
        </div>

        <div className="flex flex-col">
          <Label
            text={item.date}
            className={`text-sm text-white mb-1 transition-transform duration-300 group-hover:scale-105 ${
              item.type === "start" ? "" : "bg-light-blue"
            }`}
            style={chipStyle(item, true)}
          />
          <div className="font-medium text-gray-700 text-base transition-colors duration-300 group-hover:text-light-blue">
            {item.title}
          </div>
        </div>
      </div>

      {index % 2 === 0 ? (
        <div className="hidden lg:flex w-1/2 justify-end pr-6">
          <Label
            text={item.date}
            className={`text-xl text-center w-fit text-white transition-transform duration-300 group-hover:scale-105 ${
              item.type === "start" ? "" : "bg-light-blue"
            }`}
            style={chipStyle(item, false)}
          />
        </div>
      ) : (
        <div className="hidden lg:block w-1/2 text-right pr-6 font-medium text-xl text-gray-600 transition-colors duration-300 group-hover:text-light-blue">
          {item.title}
        </div>
      )}

      <div className="hidden lg:flex relative items-center justify-center mx-10">
        <Dot item={item} size="w-4 h-4" />
      </div>

      {index % 2 === 0 ? (
        <div className="hidden lg:block w-1/2 text-left pl-6 font-medium text-xl text-gray-600 transition-colors duration-300 group-hover:text-light-blue">
          {item.title}
        </div>
      ) : (
        <div className="hidden lg:flex w-1/2 justify-start pl-6">
          <Label
            text={item.date}
            className={`text-xl text-center w-fit text-white transition-transform duration-300 group-hover:scale-105 ${
              item.type === "start" ? "" : "bg-light-blue"
            }`}
            style={chipStyle(item, false)}
          />
        </div>
      )}
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="relative flex flex-col items-center mx-auto lg:mx-8 gap-8 lg:gap-10 mb-28 lg:mb-44 px-6 md:px-24">
      <SectionHeading text="TIMELINE" />

      <div className="flex flex-col gap-8 lg:gap-10 items-start lg:items-center w-fit lg:w-full mx-auto">
        {timelineData.map((item, index) => (
          <TimelineRow
            key={item.title}
            item={item}
            index={index}
            isLast={index === timelineData.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;

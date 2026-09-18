"use client";

import { useReveal } from "@/shared/hooks/useReveal";
import { cn } from "@/shared/utils/cn";

type SectionHeadingProps = {
  text: string;
  align?: "center" | "left";
  className?: string;
};

const SectionHeading = ({ text, align = "center", className }: SectionHeadingProps) => {
  const ref = useReveal<HTMLDivElement>("data-reveal-group");

  return (
    <div
      ref={ref}
      data-reveal-group=""
      style={{ "--reveal-duration": "700ms", "--reveal-y": "12px" } as React.CSSProperties}
      className={cn(
        "flex gap-4 items-center text-light-blue",
        align === "center" ? "justify-center" : "justify-start",
        className,
      )}
    >
      {align === "center" && (
        <hr className="heading-rule border-light-blue border w-16 origin-right" />
      )}
      <h1 className="heading-text text-center font-semibold text-base lg:text-xl tracking-wide">
        {text}
      </h1>
      <hr className="heading-rule border-light-blue border w-16 origin-left" />
    </div>
  );
};

export default SectionHeading;

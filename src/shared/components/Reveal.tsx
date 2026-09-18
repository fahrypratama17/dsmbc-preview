"use client";

import { useReveal } from "@/shared/hooks/useReveal";
import { cn } from "@/shared/utils/cn";

type Direction = "up" | "down" | "left" | "right" | "none";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Direction the content travels in from. */
  from?: Direction;
  /** Milliseconds before the reveal starts. */
  delay?: number;
  /** Milliseconds the reveal takes. */
  duration?: number;
  distance?: number;
  /** Milliseconds between direct children; omit to move the wrapper as one. */
  stagger?: number;
  as?: "div" | "section" | "footer";
};

const offsetFor = (from: Direction, distance: number): Record<string, string> => {
  switch (from) {
    case "up":
      return { "--reveal-y": `${distance}px` };
    case "down":
      return { "--reveal-y": `${-distance}px` };
    case "left":
      return { "--reveal-x": `${-distance}px` };
    case "right":
      return { "--reveal-x": `${distance}px` };
    default:
      return {};
  }
};

const Reveal = ({
  children,
  className,
  from = "up",
  delay = 0,
  duration = 700,
  distance = 48,
  stagger,
  as: Tag = "div",
}: RevealProps) => {
  const attribute = stagger ? "data-reveal-group" : "data-reveal";
  const ref = useReveal<HTMLDivElement>(attribute);

  const style: React.CSSProperties = {
    "--reveal-duration": `${duration}ms`,
    "--reveal-delay": `${delay}ms`,
    ...(stagger ? { "--reveal-stagger": `${stagger}ms` } : {}),
    ...offsetFor(from, distance),
  } as React.CSSProperties;

  return (
    <Tag ref={ref as never} className={cn(className)} style={style} {...{ [attribute]: "" }}>
      {children}
    </Tag>
  );
};

export default Reveal;

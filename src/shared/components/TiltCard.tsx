"use client";

import { useRef } from "react";
import { cn } from "@/shared/utils/cn";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const TiltCard = ({ children, className, intensity = 7 }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return;

    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    node.style.transform = `perspective(900px) rotateX(${(0.5 - py) * intensity}deg) rotateY(${
      (px - 0.5) * intensity
    }deg) translateY(-6px)`;
    node.style.setProperty("--pointer-x", `${px * 100}%`);
    node.style.setProperty("--pointer-y", `${py * 100}%`);
  };

  const handleLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "relative transition-all duration-300 ease-out will-change-transform",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(240px circle at var(--pointer-x, 50%) var(--pointer-y, 50%), rgb(255 255 255 / 0.25), transparent 70%)",
        }}
      />
      {children}
    </div>
  );
};

export default TiltCard;

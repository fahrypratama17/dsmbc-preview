"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
  const id = setInterval(callback, 1000);
  return () => clearInterval(id);
};

const getSnapshot = () => Math.floor(Date.now() / 1000);

const getServerSnapshot = () => null;

const pad = (value: number) => String(value).padStart(2, "0");

const Countdown = ({
  closeRegistration,
  onComplete,
}: {
  closeRegistration: Date;
  onComplete?: () => void;
}) => {
  const now = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const target = Math.floor(closeRegistration.getTime() / 1000);
  const remaining = now === null ? null : Math.max(target - now, 0);
  const completed = remaining === 0;

  const hasCompleted = useRef(false);
  useEffect(() => {
    if (completed && !hasCompleted.current) {
      hasCompleted.current = true;
      onComplete?.();
    }
  }, [completed, onComplete]);

  const units = [
    { label: "DAYS", value: remaining === null ? null : Math.floor(remaining / 86400) },
    { label: "HOURS", value: remaining === null ? null : Math.floor((remaining % 86400) / 3600) },
    { label: "MINUTES", value: remaining === null ? null : Math.floor((remaining % 3600) / 60) },
    { label: "SECONDS", value: remaining === null ? null : remaining % 60 },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-wrap justify-center items-center gap-3 lg:gap-10 mx-auto font-semibold text-4xl lg:text-6xl text-slate-700">
        {units.map(({ label, value }) => (
          <div
            key={label}
            className="group flex flex-col gap-2 items-center justify-center"
          >
            <div className="relative flex w-20 h-20 lg:w-48 lg:h-48 overflow-hidden border-4 border-orange-500 rounded-3xl lg:rounded-4xl items-center justify-center text-center tabular-nums transition-all duration-300 group-hover:-translate-y-1 group-hover:border-light-blue group-hover:shadow-xl group-hover:shadow-light-blue/20">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              {/* Keying on the value replays the tick animation each change. */}
              <span
                key={value ?? "placeholder"}
                className="animate-tick-pop relative"
              >
                {value === null ? "--" : pad(value)}
              </span>
            </div>
            <div className="font-semibold text-sm transition-colors duration-300 group-hover:text-light-blue">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;

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
          <div key={label} className="flex flex-col gap-2 items-center justify-center">
            <div
              className="flex w-20 h-20 lg:w-48 lg:h-48 border-4 border-orange-500 rounded-3xl lg:rounded-4xl items-center justify-center text-center tabular-nums"
            >
              {value === null ? "--" : pad(value)}
            </div>
            <div className="font-semibold text-sm">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;

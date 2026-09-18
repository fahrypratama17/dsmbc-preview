"use client";

import { useEffect, useRef } from "react";

/**
 * Flips `data-reveal` / `data-reveal-group` to "shown" once the element scrolls
 * into view. The actual animation lives in CSS, so a failure here can only mean
 * "no animation" — never "invisible content".
 */
export const useReveal = <T extends HTMLElement>(
  attribute: "data-reveal" | "data-reveal-group" = "data-reveal",
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.setAttribute(attribute, "shown");

    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [attribute]);

  return ref;
};

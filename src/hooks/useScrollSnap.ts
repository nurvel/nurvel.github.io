import { useEffect, useState } from "react";

const AUTO_SCROLL_DURATION_MS = 600;

const getClosestSectionIndex = (
  sections: HTMLElement[],
  scrollTop: number
): number => {
  return sections.reduce(
    (acc, section, idx) => {
      const distance = Math.abs(section.offsetTop - scrollTop);
      if (distance < acc.distance) {
        return { index: idx, distance };
      }
      return acc;
    },
    { index: 0, distance: Number.POSITIVE_INFINITY }
  ).index;
};

type UseScrollSnapOptions = {
  thresholdRatio: number;
  idleDelay: number;
  onActiveSectionChange?: (index: number) => void;
};

export function useScrollSnap({
  thresholdRatio,
  idleDelay,
  onActiveSectionChange,
}: UseScrollSnapOptions) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".section")
    );

    if (sections.length === 0) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let activeIndex = getClosestSectionIndex(sections, window.scrollY);
    let targetIndex = activeIndex;
    let scrollTimeout: number | null = null;
    let isAutoScrolling = false;

    const updateActiveSection = (index: number) => {
      setActiveSection(index);
      onActiveSectionChange?.(index);
    };

    updateActiveSection(activeIndex);

    const snapTo = (index: number) => {
      const target = sections[index];
      if (!target) {
        return;
      }

      isAutoScrolling = true;

      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });

      window.setTimeout(() => {
        isAutoScrolling = false;
        activeIndex = getClosestSectionIndex(sections, window.scrollY);
        updateActiveSection(activeIndex);
      }, AUTO_SCROLL_DURATION_MS);
    };

    const handleScroll = () => {
      if (isAutoScrolling) {
        return;
      }

      const anchorSection = sections[activeIndex];
      if (!anchorSection) {
        activeIndex = getClosestSectionIndex(sections, window.scrollY);
        updateActiveSection(activeIndex);
        return;
      }

      const delta = window.scrollY - anchorSection.offsetTop;
      const threshold = window.innerHeight * thresholdRatio;

      if (delta > threshold && activeIndex < sections.length - 1) {
        targetIndex = activeIndex + 1;
      } else if (delta < -threshold && activeIndex > 0) {
        targetIndex = activeIndex - 1;
      } else {
        targetIndex = activeIndex;
      }

      if (scrollTimeout) {
        window.clearTimeout(scrollTimeout);
      }

      scrollTimeout = window.setTimeout(() => {
        if (targetIndex !== activeIndex) {
          activeIndex = targetIndex;
          updateActiveSection(activeIndex);
        }
        snapTo(activeIndex);
      }, idleDelay);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        window.clearTimeout(scrollTimeout);
      }
    };
  }, [thresholdRatio, idleDelay, onActiveSectionChange]);

  return activeSection;
}

import React, { ReactNode, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "../common/globalStyles";
import Header from "./Header";

const AppContainer = styled.div`
  min-height: 100vh;
`;

const SectionStack = styled.main`
  display: flex;
  flex-direction: column;
`;

const SNAP_RATIO = 0.1;
const SCROLL_IDLE_DELAY_MS = 120;
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

const useScrollSnap = (thresholdRatio: number, idleDelay: number) => {
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
      }, AUTO_SCROLL_DURATION_MS);
    };

    const handleScroll = () => {
      if (isAutoScrolling) {
        return;
      }

      const anchorSection = sections[activeIndex];
      if (!anchorSection) {
        activeIndex = getClosestSectionIndex(sections, window.scrollY);
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
  }, [thresholdRatio, idleDelay]);
};

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  useScrollSnap(SNAP_RATIO, SCROLL_IDLE_DELAY_MS);

  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <SectionStack>{children}</SectionStack>
    </AppContainer>
  );
}

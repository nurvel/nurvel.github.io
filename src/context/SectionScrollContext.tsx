import { createContext, useContext } from "react";

type SectionScrollContextValue = {
  activeSection: number;
};

const SectionScrollContext = createContext<SectionScrollContextValue>({
  activeSection: 0,
});

export const SectionScrollProvider = SectionScrollContext.Provider;

export function useSectionScroll() {
  return useContext(SectionScrollContext);
}

import React from "react";
import styled, { useTheme } from "styled-components";
import { PageContainer, PageContent } from "../components/Page";

const TimelineContent = styled(PageContent)`
  min-height: ${({ theme }) => theme.layout.sectionMinHeight};
`;

// https://stephane-monnot.github.io/react-vertical-timeline/#/

export default function Timeline() {
  const theme = useTheme();

  return (
    <PageContainer
      className="timeline"
      background={theme.colors.darkBlue}
    >
      <TimelineContent>Timeline</TimelineContent>
    </PageContainer>
  );
}

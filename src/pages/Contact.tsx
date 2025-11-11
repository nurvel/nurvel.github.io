import React from "react";
import styled, { useTheme } from "styled-components";
import { PageContainer, PageContent } from "../components/Page";

const ContactContent = styled(PageContent)`
  min-height: ${({ theme }) => theme.layout.sectionMinHeight};
`;

export default function Contact() {
  const theme = useTheme();

  return (
    <PageContainer
      className="contact"
      background={theme.colors.darkBlue}
    >
      <ContactContent>Contact</ContactContent>
    </PageContainer>
  );
}

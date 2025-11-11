import React from "react";
import styled, { useTheme } from "styled-components";

import _video_mobile_webm from "../assets/img/bg-video-mobile.webm";
import { Button } from "../components/Button";
import { PageContainer, PageContent } from "../components/Page";

const HeroLayer = styled(PageContent)`
  min-height: ${({ theme }) => theme.layout.sectionMinHeight};
`;

const Hero = styled.div`
  position: absolute;
  top: 20vh;
  max-width: 650px;
  min-width: 300px;
  text-align: left;
  margin-left: 50px;
  margin-right: 50px;
  z-index: 1;
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const VideoBackground = styled.video`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 0;
`;

export default function Main() {
  const theme = useTheme();

  return (
    <PageContainer
      className="main"
      background={theme.colors.darkViolet}
    >
      <VideoBackground loop muted autoPlay playsInline>
        <source src={_video_mobile_webm} type="video/webm" />
        Your browser does not support the video tag.
      </VideoBackground>
      <HeroLayer>
        <Hero>
          <h1>Building products that matter.</h1>
          <ButtonRow>
            <Button as="a" href={"#about"}>
              READ MORE
            </Button>
          </ButtonRow>
        </Hero>
      </HeroLayer>
    </PageContainer>
  );
}

// Technology, Marketing and Analytics

// MAIN
// ABOUT
// WORK
// SKILLS
// CONTACT

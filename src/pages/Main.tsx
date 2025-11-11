import React, { useState } from "react";
import styled, { useTheme } from "styled-components";

import _video_mobile_webm from "../assets/img/bg-video-mobile.webm";
import _video_mobile_mp4 from "../assets/img/bg-video-mobile.mp4";
import heroPoster from "../assets/img/bg-lights.jpg";
import { Button } from "../components/Button";
import { PageContainer, PageContent } from "../components/Page";

const Content = styled(PageContent)`
  max-width: 900px;
  min-height: ${({ theme }) => theme.layout.sectionMinHeight};
  padding-top: min(20vh, 300px);
`;

const Hero = styled.div`
  position: absolute;
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

const VideoFallback = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${heroPoster});
  background-size: cover;
  background-position: center;
  filter: brightness(0.8);
  z-index: 0;
`;

export default function Main() {
  const theme = useTheme();
  const [videoAvailable, setVideoAvailable] = useState(true);

  return (
    <PageContainer className="main" background={theme.colors.darkViolet}>
      {videoAvailable ? (
        <VideoBackground
          loop
          muted
          autoPlay
          playsInline
          preload="auto"
          poster={heroPoster}
          aria-hidden="true"
          onError={() => setVideoAvailable(false)}
        >
          <source src={_video_mobile_webm} type="video/webm" />
          <source src={_video_mobile_mp4} type="video/mp4" />
        </VideoBackground>
      ) : (
        <VideoFallback aria-hidden="true" />
      )}
      <Content>
        <Hero>
          <h1>Building products that matter.</h1>
          <ButtonRow>
            <Button as="a" href={"#about"}>
              READ MORE
            </Button>
          </ButtonRow>
        </Hero>
      </Content>
    </PageContainer>
  );
}

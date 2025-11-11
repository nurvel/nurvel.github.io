import styled from "styled-components";
import configData from "../common/config.json";
import ProfilePic from "../assets/img/veli-pekka-nurmi-profile.png";

const Container = styled.div`
  min-height: 100vh;
  background-color: ${configData.THEME_COLORS.DARK_VIOLET};
`;

const Content = styled.div`
  max-width: 900px;
  @media (max-width: ${configData.mobileThreshold}) {
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const ProfileText = styled.div`
  flex: 1;
`;

const Description = styled.p`
  font-size: 1.3rem;
  margin-bottom: 3rem;
  line-height: 1.8;
`;

const ProfilePicture = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #f5f5f5;
  @media (max-width: ${configData.mobileThreshold}) {
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 1rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
`;
const Subtitle = styled.p`
  margin: 1rem;
`;

const Link = styled.a`
  color: #1a1a1a;
  text-decoration: none;
  font-size: 1.05rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  position: relative;
`;

const Links = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export default function About() {
  return (
    <Container className="about section" id="about">
      <Content>
        <Profile>
          <ProfilePicture src={ProfilePic} alt="Veli-Pekka Nurmi" />
          <ProfileText>
            <Title>Veli-Pekka Nurmi</Title>
            <Subtitle>
              Product Engineer | Bridging product & engineering with
              AI-augmented development
            </Subtitle>
          </ProfileText>
        </Profile>

        <Description>
          Product development specialist with 15+ years bridging business
          strategy and technical execution. Currently exploring how AI
          transforms software development while keeping humans at the center.
        </Description>
        <Roles>
          <Pill>Product Owner</Pill>
          <Pill>Full-Stack Developer</Pill>
          <Pill>Tech Lead</Pill>
        </Roles>

        <Links>
          <Link
            href="https://www.linkedin.com/in/veli-pekkanurmi"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link href="https://github.com/nurvel" target="_blank">
            Github
          </Link>
          <Link href="mailto:nurmi.vp@gmail.com" target="_blank">
            Email
          </Link>
        </Links>
        <Divider />
      </Content>
    </Container>
  );
}

const Divider = styled.div`
  border: none;
  height: 1px;
  background-color: #e5e5e5;
  margin: 3rem 0 2rem;
`;

const Roles = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const Pill = styled.span`
  padding: 0.6rem 1.2rem;
  background: #f5f5f5;
  border-radius: 50px;
  font-size: 0.95rem;
  color: #1a1a1a;
  font-weight: 500;
`;

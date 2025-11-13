import styled, { keyframes, useTheme } from "styled-components";
import ProfilePic from "../assets/img/veli-pekka-nurmi-profile.png";
import { PageContainer, PageContent } from "../components/Page";
import { BodyText } from "../components/typography";
import { ProfileCard } from "../components/about/ProfileCard";
import { RolesList } from "../components/about/RolesList";
import { ContactLinks } from "../components/about/ContactLinks";

const Content = styled(PageContent)`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  padding-top: min(30vh, 200px);
  color: #1a1a1a;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const Description = styled(BodyText)`
  margin: 0 0 2.5rem;
`;

const Focus = styled.div`
  margin-top: 2rem;
  padding-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 3rem;
    padding-top: 2rem;
  }
`;

const FocusTitle = styled.h2`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #e91e8c;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const FocusContent = styled(BodyText)`
  font-size: 1rem;
  line-height: 1.6;

  span {
    color: #1a1a1a;
    font-weight: 600;
    background: linear-gradient(
      180deg,
      transparent 60%,
      rgba(233, 30, 140, 0.15) 60%
    );
  }
`;

const TopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 12px;
  background: linear-gradient(90deg, #7209b7, #be296a);
`;

const ContactLinksContainer = styled.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
  padding-top: 2rem;

  @media (max-width: 768px) {
    padding-bottom: 1.5rem;
  }
`;

export default function About() {
  const theme = useTheme();

  return (
    <PageContainer className="about" id="about" background="#ffffff">
      <TopBar />
      <Content>
        <ProfileCard
          name="Veli-Pekka Nurmi"
          subtitle="Bridging product & engineering with AI-augmented development"
          avatarSrc={ProfilePic}
          avatarAlt="Veli-Pekka Nurmi"
        />

        <Description>
          I’m a Product Engineer with more than 15 years of experience
          connecting business goals with technology. My work spans SaaS
          platforms, diverse private-sector environments, and public-sector
          systems and online services, across both technical and product-facing
          roles.
        </Description>

        <RolesList
          roles={[
            "Product Owner",
            "Full-Stack Developer",
            "Head of R&D",
            "Performance Marketer",
          ]}
        />

        <Divider />
        <Focus>
          <FocusTitle>Current focus</FocusTitle>
          <FocusContent>
            Exploring <span>agentic coding</span> and{" "}
            <span>spec-driven development</span> — where AI is used as a tool for
            implementation while human expertise guides strategic direction,
            requirements engineering, and solution architecture. My background
            in both business and technology positions me well for this shift.
          </FocusContent>
        </Focus>
        <ContactLinksContainer>
          <ContactLinks
            links={[
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/veli-pekkanurmi",
              },
              { label: "Github", href: "https://github.com/nurvel" },
              { label: "Email", href: "mailto:nurmi.vp@gmail.com" },
            ]}
          />
        </ContactLinksContainer>
      </Content>
    </PageContainer>
  );
}

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(233, 30, 140, 0.2),
    rgba(139, 92, 246, 0.2)
  );
`;

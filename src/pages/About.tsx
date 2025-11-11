import styled, { useTheme } from "styled-components";
import ProfilePic from "../assets/img/veli-pekka-nurmi-profile.png";
import { PageContainer, PageContent } from "../components/Page";
import { BodyText } from "../components/typography";
import { ProfileCard } from "../components/about/ProfileCard";
import { RolesList } from "../components/about/RolesList";
import { ContactLinks } from "../components/about/ContactLinks";

const Content = styled(PageContent)`
  max-width: 900px;
  width: 100%;
  padding-top: min(30vh, 200px);
  margin: 0 auto;
`;

const Description = styled(BodyText)`
  margin: 0 0 3rem;
`;

const Focus = styled.div`
  padding-top: 2rem;
`;

const FocusTitle = styled.h2`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #FFF;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const FocusContent = styled.p`
  font-size: 1.05rem;
  color: #999;
  line-height: 1.7;
  max-width: 650px;
`;

export default function About() {
  const theme = useTheme();

  return (
    <PageContainer
      className="about"
      id="about"
      background={theme.colors.darkViolet}
    >
      <Content>
        <ProfileCard
          name="Veli-Pekka Nurmi"
          subtitle="Product Engineer | Bridging product & engineering with AI-augmented development"
          avatarSrc={ProfilePic}
          avatarAlt="Veli-Pekka Nurmi"
        />

        <Description>
          Product development specialist with 15+ years bridging business
          strategy and technical execution. Currently exploring how AI
          transforms software development while keeping humans at the center.
        </Description>

        <RolesList
          roles={["Product Owner", "Full-Stack Developer", "Tech Lead"]}
        />

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
        <Divider />
        <Focus>
          <FocusTitle>Current cocus</FocusTitle>
          <FocusContent>
            Exploring agentic coding and spec-driven development — where AI
            handles implementation while human expertise guides strategic
            direction, requirements engineering, and solution architecture. My
            background in both business and technology positions me well for
            this shift.
          </FocusContent>
        </Focus>
      </Content>
    </PageContainer>
  );
}

const Divider = styled.div`
  border-top: 1px solid #e5e5e5;
`;

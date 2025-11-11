import styled, { useTheme } from "styled-components";
import ProfilePic from "../assets/img/veli-pekka-nurmi-profile.png";
import { PageContainer, PageContent } from "../components/Page";
import { BodyText } from "../components/typography";
import { ProfileCard } from "../components/about/ProfileCard";
import { RolesList } from "../components/about/RolesList";
import { ContactLinks } from "../components/about/ContactLinks";

const AboutContent = styled(PageContent)`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`;

const Description = styled(BodyText)`
  margin: 0 0 3rem;
`;

export default function About() {
  const theme = useTheme();

  return (
    <PageContainer
      className="about"
      id="about"
      background={theme.colors.darkViolet}
    >
      <AboutContent>
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
      </AboutContent>
    </PageContainer>
  );
}

const Divider = styled.div`
  border: none;
  height: 1px;
  background-color: rgba(229, 229, 229, 0.4);
  margin: 3rem 0 2rem;
`;

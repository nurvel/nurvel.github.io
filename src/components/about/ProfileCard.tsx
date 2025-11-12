import styled from "styled-components";
import { SectionHeading, SectionSubheading } from "../typography";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.95);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid transparent;
  background: linear-gradient(#ffffff, #ffffff) padding-box,
    linear-gradient(135deg, #8b5cf6, #e91e8c, #3b82f6) border-box;
`;

const Text = styled.div`
  flex: 1;
  min-width: 250px;
`;

type ProfileCardProps = {
  name: string;
  subtitle: string;
  avatarSrc: string;
  avatarAlt: string;
};

export function ProfileCard({
  name,
  subtitle,
  avatarSrc,
  avatarAlt,
}: ProfileCardProps) {
  return (
    <Wrapper>
      <Avatar src={avatarSrc} alt={avatarAlt} />
      <Text>
        <SectionHeading as="h1">{name}</SectionHeading>
        <SectionSubheading>{subtitle}</SectionSubheading>
      </Text>
    </Wrapper>
  );
}

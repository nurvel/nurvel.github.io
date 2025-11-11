import styled from "styled-components";
import { SectionHeading, SectionSubheading } from "../typography";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #f5f5f5;
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

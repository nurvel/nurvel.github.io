import styled from "styled-components";

const LinkGrid = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.brightPink};
  text-decoration: none;
  font-size: 1.05rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.darkPink};
  }
`;

type ContactLink = {
  label: string;
  href: string;
};

type ContactLinksProps = {
  links: ContactLink[];
};

export function ContactLinks({ links }: ContactLinksProps) {
  return (
    <LinkGrid>
      {links.map(({ label, href }) => (
        <StyledLink
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
        >
          {label}
        </StyledLink>
      ))}
    </LinkGrid>
  );
}

import styled from "styled-components";

const LinkGrid = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const StyledLink = styled.a`
  position: relative;
  color: #1a1a1a;
  text-decoration: none;
  font-size: 1.05rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #e91e8c, #8b5cf6);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #e91e8c;
  }

  &:hover::after {
    width: 100%;
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

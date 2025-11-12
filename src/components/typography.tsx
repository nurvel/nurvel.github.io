import styled from "styled-components";

export const SectionHeading = styled.h1`
  margin: 0 0 0.5rem;
  font-size: clamp(2.5rem, 6vw, 4rem);
  letter-spacing: -0.02em;
  line-height: 1.1;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  background: linear-gradient(135deg, #1a1a1a 0%, #e91e8c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const SectionSubheading = styled.p`
  margin: 0;
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  line-height: 1.4;
  font-weight: ${({ theme }) => theme.typography.weights.regular};
  color: #666666;
`;

export const BodyText = styled.p`
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.8;
  font-weight: ${({ theme }) => theme.typography.weights.regular};
  color: #666666;
`;

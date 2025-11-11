import styled from "styled-components";

export const SectionHeading = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.scale.h2};
  letter-spacing: -0.02em;
  line-height: 1.1;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
`;

export const SectionSubheading = styled.p`
  margin: 0.5rem 0 0;
  font-size: ${({ theme }) => theme.typography.scale.body};
  line-height: 1.4;
  font-weight: ${({ theme }) => theme.typography.weights.regular};
`;

export const BodyText = styled.p`
  margin: 0;
  font-size: 1.3rem;
  line-height: 1.8;
  font-weight: ${({ theme }) => theme.typography.weights.regular};
`;

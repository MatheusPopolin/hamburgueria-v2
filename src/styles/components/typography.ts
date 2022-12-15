import styled from "styled-components";

interface iTypographyProps{
  color: "grey-600" | "grey-300" | "grey-100" | "grey-50" | "grey-0" | "primary" | "secondary" 
}

export const Heading1 = styled.h2<iTypographyProps>`
  font-weight: 700;
  font-size: 1.625rem;
  line-height: 2.125rem;
  color: var(--color-${({ color }) => color});
`;
export const Heading2 = styled.h3<iTypographyProps>`
  font-weight: 700;
  font-size: 1.375rem;
  line-height: 1.5rem;
  color: var(--color-${({ color }) => color});
`;
export const Heading3 = styled.h4<iTypographyProps>`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: var(--color-${({ color }) => color});
`;

export const Headline = styled.p<iTypographyProps>`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  color: var(--color-${({ color }) => color});
`;
export const Body = styled.p<iTypographyProps>`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: var(--color-${({ color }) => color});
`;
export const Caption = styled.p<iTypographyProps>`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: var(--color-${({ color }) => color});
`;
 

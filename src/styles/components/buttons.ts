import styled from "styled-components";
import { css } from "styled-components";

interface iStyledButtonProps {
  size: "default" | "medium";
  color: "primary" | "grey";
}

export const StyledButton = styled.button<iStyledButtonProps>`
  ${({ size }) => {
    switch (size) {
      case "default":
        return css`
          height: 60px;
        `;
      case "medium":
        return css`
          height: 40px;
        `;
    }
  }};
  width: 100%;

  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25rem;

  padding: 0px 20px;

  border-radius: var(--radius-1);

  ${({ color }) => {
    switch (color) {
      case "primary":
        return css`
          background-color: var(--color-primary);
          color: var(--color-grey-0);

          &:hover {
            opacity: 0.5;
          }
        `;
      case "grey":
        return css`
          background-color: var(--color-grey-100);
          color: var(--color-grey-300);

          &:hover {
            background-color: var(--color-grey-300);
            color: var(--color-grey-100);
          }
        `;
    }
  }};
`;

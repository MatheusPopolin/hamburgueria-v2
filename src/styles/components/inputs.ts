import styled from "styled-components";
import { css } from "styled-components";

export const StyledLabel = styled.label`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  align-self: start;

  color: var(--color-grey-300);
`;

export const StyledInput = styled.input`
  width: 100%;
  max-width: 452px;
  height: 60px;

  padding: 0px 15px;
  margin-bottom: 6px;

  background-color: var(--color-grey-50);

  border-radius: var(--radius-1);

  color: var(--color-grey-600);

  ::placeholder {
    color: var(--color-grey-300);
  }

  :focus {
    background-color: var(--color-grey-0);
    border-color: var(--color-grey-600);
  }

  ${({ color }) => {
    if (color) {
      return css`
        border: 2px solid var(--color-negative);
        :focus {
          border-color: var(--color-negative);
        }
      `;
    }
  }}
`;

import styled from "styled-components";

export const StyledProductsList = styled.ul`
  display: flex;
  gap: 20px;

  max-width: 100%;
  overflow-x: scroll;

  margin-bottom: 20px;

  @media (min-width: 740px) {
    gap: 45px;

    overflow: unset;
    flex-wrap: wrap;
  }
`;

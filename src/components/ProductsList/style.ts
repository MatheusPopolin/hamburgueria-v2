import styled from "styled-components";

export const StyledProductsList = styled.ul`
  width: 100%;
  overflow-x: auto;

  display: flex;
  gap: 20px;

  padding-bottom: 20px;

  @media (min-width: 740px) {
    gap: 45px;

    flex-wrap: wrap;
    justify-content: center;

    max-height: 100%;
    overflow-y: auto;
  }
`;

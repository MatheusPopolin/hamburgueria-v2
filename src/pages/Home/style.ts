import styled from "styled-components";

export const StyledHome = styled.div`
  height: 100vh;

  main {
      height: 100%;
    padding-top: 100px;
  }

  main > div {
    height: 100%;
    gap: 20px;
  }

  .findRespost {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6px;

    button {
      max-width: 150px;
    }
  }
`;

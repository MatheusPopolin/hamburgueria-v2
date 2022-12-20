import styled from "styled-components";

export const StyledHome = styled.div`
  header {
    width: 100vw;
    height: 80px;

    position: fixed;
    top: 0;
    left: 0;

    background-color: var(--color-grey-50);
  }

  header > div > img {
    min-width: 100px;
    max-width: 230px;
  }

  header > div {
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .headerRight {
    min-width: 128px;
    max-width: 460px;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
  }

  .headerRight img {
    min-height: 26px;
  }

  margin-top: 124px;

  main {
    width: 100%;
  }
`;

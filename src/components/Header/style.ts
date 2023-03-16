import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 80px;

  position: fixed;
  top: 0;
  left: 0;

  background-color: var(--color-grey-50);

  > div > img {
    min-width: 100px;
    max-width: 180px;
  }

  > div {
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .headerRight {
    min-width: 128px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
  }

  .headerRight img {
    min-width: 30px;
  }

  .cartButton {
    position: relative;

    div {
      position: absolute;
      top: -10px;
      right: -8px;

      height: 22px;
      width: 22px;

      font-size: 0.875rem;
      font-weight: 600;
      color: var(--color-grey-0);

      background-color: var(--color-primary);

      border-radius: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

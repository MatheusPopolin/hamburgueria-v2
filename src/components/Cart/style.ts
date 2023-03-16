import styled from "styled-components";

export const StyledCart = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: var(--color-grey-opacity);

  .cartHeader {
    position: relative;

    width: 100%;
    max-width: 500px;
    height: 54px;

    padding: 0px 22px;
    border-radius: var(--radius-2) var(--radius-2) 0px 0px;

    display: flex;
    align-items: center;

    background-color: var(--color-primary);

    button {
      position: absolute;
      top: 18px;
      right: 22px;
      font-size: 1.125rem;
      font-weight: bold;

      color: var(--color-grey-50);
    }
  }

  .emptyCart {
    width: 100%;
    max-width: 500px;
    height: 158px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;

    border-radius: 0px 0px var(--radius-2) var(--radius-2);

    background-color: var(--color-grey-0);
  }

  ul {
    width: 100%;
    max-width: 500px;
    max-height: 320px;
    overflow-y: scroll;

    background-color: var(--color-grey-0);

    padding: 22px;

    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .cartTotal {
    width: 100%;
    max-width: 500px;
    height: 140px;

    background-color: var(--color-grey-0);

    padding: 0 22px 22px 22px;
    border-radius: 0px 0px var(--radius-2) var(--radius-2);

    display: flex;
    flex-direction: column;

    div {
      height: 59px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      border-top: 2px solid var(--color-grey-100);
    }
  }
`;

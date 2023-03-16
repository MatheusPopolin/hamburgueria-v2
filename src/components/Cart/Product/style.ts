import styled from "styled-components";

export const StyledCartProduct = styled.li`
  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: row;
  gap: 10px;

  .imgContainer {
    min-width: 80px;
    height: 100%;

    background-color: var(--color-grey-100);
    border-radius: var(--radius-2);

    img {
      height: 100%;
      object-fit: cover;
    }
  }

  .infosContainer {
    height: 100%;
    width: 100%;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .qtdContainer {
      width: 106px;
      height: 34px;

      border: 2px solid var(--color-grey-50);

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      > button {
        height: 100%;
        width: 30px;

        background-color: var(--color-grey-50);
        color: var(--color-secondary);
      }
    }

    > button {
      position: absolute;
      top: 0;
      right: 0;

      img {
        height: 16px;
      }
    }
  }
`;

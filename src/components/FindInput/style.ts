import styled from "styled-components";

export const StyledFindInput = styled.div`
  width: 100%;
  max-width: 310px;
  height: 60px;

  background-color: var(--color-grey-0);

  border: 2px solid var(--color-grey-100);
  border-radius: var(--radius-1);

  padding: 0 76px 0 6px;

  position: relative;

  > input {
    width: 100%;
    max-width: 290px;
    height: 56px;

    color: var(--color-grey-300);

    border-radius: var(--radius-1);

    ::placeholder {
      color: var(--color-grey-100);
    }

    :focus {
      outline: none;
    }
  }

  > button {
    position: absolute;
    top: 8px;
    right: 10px;

    width: 54px;
    height: 40px;

    padding: 0 4px;

    img {
      height: 22px;
    }
  }

  @media (max-width: 500px) {
    position: absolute;
    z-index: 1;
    width: 90vw;
  }
`;

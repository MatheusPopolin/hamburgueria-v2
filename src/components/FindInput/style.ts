import styled from "styled-components";

export const StyledFindInput = styled.div`
  width: 100%;
  max-width: 306px;
  height: 60px;

  position: relative;
  
  border-radius: var(--radius-1);

  > input {
    width: 100%;
    max-width: 306px;
    height: 60px;

    padding: 0px 20px;

    background-color: var(--color-grey-0);

    border: 2px solid var(--color-grey-100);
    border-radius: var(--radius-1);

    color: var(--color-grey-300);

    ::placeholder {
      color: var(--color-grey-100);
    }

    :focus {
      border-color: var(--color-grey-600);
    }
  }

  > button{
    position: absolute;
    top: 10px;
    right: 10px;

    width: 54px;
  }
`;

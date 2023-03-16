import styled from "styled-components";

export const StyledProduct = styled.li`
  min-width: 300px;
  height: 346px;
  background: var(--color-grey-0);
  border: 2px solid var(--color-grey-100);
  border-radius: var(--radius-2);

  display: flex;
  flex-direction: column;
  gap: 1.625rem;

  & .imgConatiner {
    background: var(--color-grey-50);
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  & .imgConatiner > img {
    height: 100%;
    object-fit: cover;
  }

  & .infosConatiner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.875rem;
    padding: 0 21px;
  }

  & .infosConatiner div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  :hover {
    border: 2px solid var(--color-grey-300);
  }

  :focus {
    border: 2px solid var(--color-grey-300);
  }
`;

import styled from "styled-components";

export const StyledFormLogin = styled.form`
  width: 100%;
  max-width: 500px;

  background-color: var(--color-grey-0);

  border: 2px solid var(--color-grey-50);
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);

  border-radius: var(--radius-2);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  padding: 26px 24px;

  > div {
    width: 100%;
    height: 70px;
  }

  > h4 {
    align-self: flex-start;
  }

  > p {
    text-align: center;
  }

  > a {
    max-height: 60px;
    width: 100%;

    font-weight: 600;
    font-size: 1rem;
    line-height: 1.25rem;

    padding: 22px 0;

    border-radius: var(--radius-1);

    background-color: var(--color-grey-100);
    color: var(--color-grey-300);

    :hover {
      background-color: var(--color-grey-300);
      color: var(--color-grey-100);
    }
  }
`;

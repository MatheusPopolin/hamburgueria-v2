import styled from "styled-components";

export const StyledFormRegister = styled.form`
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

  .top {
    display: flex;
    justify-content: space-between;
    height: min-content;
  }

  .top > a {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.375rem;

    text-decoration: underline;

    color: var(--color-grey-300);
  }

  > h4 {
    align-self: flex-start;
  }

  > p {
    text-align: center;
  }
`;

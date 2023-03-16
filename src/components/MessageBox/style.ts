import styled from "styled-components";

export const StyledMessageBox = styled.div`
  width: 100%;
  max-width: 377px;
  min-height: 95px;

  padding: 0 14px 0 22px;

  background-color: var(--color-grey-0);

  border: 1px solid var(--color-grey-100);
  border-radius: var(--radius-2);

  box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;

  > div {
    min-width: 60px;
    min-height: 60px;

    background-color: rgba(39, 174, 96, 0.1);

    border-radius: var(--radius-2);

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

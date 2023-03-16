import styled from "styled-components";

export const StyledRegisterPage = styled.div`
  padding: 40px 0;

  > div {
    gap: 14px;
  }

  > div > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }

  > div > div > img {
    width: 230px;
    margin-bottom: 8px;
  }

  .illustration {
    display: none;
  }

  @media (min-width: 900px) {
    > div {
      flex-direction: row;
      justify-content: space-between;
    }

    > div > div {
      align-items: flex-start;
    }
    .illustration {
      display: block;
      width: 180px;
      height: 80px;
    }
  }
`;

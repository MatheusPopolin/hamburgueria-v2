import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";

import { StyledLoginPage } from "./style";
import { Container } from "../../styles/components/container";
import Logo from "../../assets/logo.png";
import { MessageBox } from "../../components/MessageBox";
import Circles from "../../assets/circlesGroup.svg";
import { FormLogin } from "../../components/FormLogin";

export const LoginPage = () => {
  const { userLoading } = useContext(UserContext);

  return userLoading ? (
    <></>
  ) : (
    <StyledLoginPage>
      <Container>
        <div>
          <img src={Logo} alt="Burguer Kenzie" />
          <MessageBox />
          <img className="illustration" src={Circles} alt="Ilustração" />
        </div>
        <FormLogin />
      </Container>
    </StyledLoginPage>
  );
};

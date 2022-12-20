import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";

import { StyledRegisterPage } from "./style";
import { Container } from "../../styles/components/container";
import Logo from "../../assets/logo.jpg";
import { MessageBox } from "../../components/MessageBox";
import Circles from "../../assets/circlesGroup.svg";
import { FormRegister } from "../../components/FormRegister";

export const RegisterPage = () => {
  const { userLoading } = useContext(UserContext);

  return userLoading ? (
    <></>
  ) : (
    <StyledRegisterPage>
      <Container>
        <div>
          <img src={Logo} alt="Burguer Kenzie" />
          <MessageBox />
          <img className="illustration" src={Circles} alt="Ilustração" />
        </div>
        <FormRegister />
      </Container>
    </StyledRegisterPage>
  );
};

import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { StyledHome } from "./style";
import { ContainerHome } from "../../styles/components/container";

import Logo from "../../assets/logo.jpg";
import Find from "../../assets/find.svg";
import Cart from "../../assets/cart.svg";
import Exit from "../../assets/exit.svg";

import { StyledFindInput } from "../../components/FindInput/style";
import { StyledButton } from "../../styles/components/buttons";
import { ProductsList } from "../../components/ProductsList";

export const HomePage = () => {
  const { userLoading } = useContext(UserContext);

  const [showFindInput, setShowFindInput] = useState(false);

  const navigate = useNavigate()

  const logout = ()=>{
    localStorage.removeItem("@BurguerKenzie:Token")
    navigate("/")
  }

  return userLoading ? (
    <></>
  ) : (
    <StyledHome>
      <header>
        <ContainerHome>
          <img src={Logo} alt="Burguer Kenzie" />
          <div className="headerRight">
            {!showFindInput && (
              <button>
                <img src={Find} alt="Barra de pesquisa" />
              </button>
            )}
            {showFindInput && (
              <StyledFindInput>
                <input type="text" />
                <StyledButton size="medium" color="primary">
                  <img src={Find} alt="Pesquisar" />
                </StyledButton>
              </StyledFindInput>
            )}
            <button>
              <img src={Cart} alt="Abrir carrinho" />
            </button>
            <button onClick={logout}>
              <img src={Exit} alt="Sair" />
            </button>
          </div>
        </ContainerHome>
      </header>
      <ContainerHome>
        <main>
          <ProductsList />
        </main>
      </ContainerHome>
    </StyledHome>
  );
};

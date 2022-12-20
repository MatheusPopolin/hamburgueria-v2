import { useState } from "react";

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
  const [showFindInput, setShowFindInput] = useState(false);

  return (
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
            <button>
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

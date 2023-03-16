import { useContext, useState } from "react";

import { CartContext } from "../../providers/CartContext/CartContext";

import { StyledButton } from "../../styles/components/buttons";
import { ContainerHome } from "../../styles/components/container";
import { StyledFindInput } from "../FindInput/style";
import { StyledHeader } from "./style";

import Logo from "../../assets/logo.png";
import Find from "../../assets/find.svg";
import CartSvg from "../../assets/cart.svg";
import Exit from "../../assets/exit.svg";

import { useNavigate } from "react-router-dom";

interface iHeaderProps {
  filteredWord: string;
  setFilteredWord: React.Dispatch<React.SetStateAction<string>>;
}

export const Header = ({ filteredWord, setFilteredWord }: iHeaderProps) => {
  const { cart, setCartIsOpen } = useContext(CartContext);

  const [showFindInput, setShowFindInput] = useState(false);

  const navigate = useNavigate();

  const cartCount: number = cart.reduce(
    (total, product) => total + product.counter,
    0
  );

  const logout = () => {
    localStorage.removeItem("@BurguerKenzie:Token");
    navigate("/");
  };

  return (
    <StyledHeader>
      <ContainerHome>
        <img src={Logo} alt="Burguer Kenzie" />
        <div className="headerRight">
          {showFindInput ? (
            <StyledFindInput>
              <input
                type="text"
                onChange={(e) => setFilteredWord(e.target.value)}
                value={filteredWord}
              />
              <StyledButton
                onClick={() => setShowFindInput(false)}
                size="medium"
                color="grey"
              >
                <img src={Find} alt="Pesquisar" />
              </StyledButton>
            </StyledFindInput>
          ) : (
            <button onClick={() => setShowFindInput(true)}>
              <img src={Find} alt="Barra de pesquisa" />
            </button>
          )}

          <button className="cartButton" onClick={() => setCartIsOpen(true)}>
            <div>
              <p>{cartCount}</p>
            </div>
            <img src={CartSvg} alt="Abrir carrinho" />
          </button>

          <button onClick={logout}>
            <img src={Exit} alt="Sair" />
          </button>
        </div>
      </ContainerHome>
    </StyledHeader>
  );
};

import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { CartContext } from "../../providers/CartContext/CartContext";

import { iProduct } from "../../providers/CartContext/@types";

import { useState } from "react";

import { api } from "../../services/api";

import { ContainerHome } from "../../styles/components/container";
import { StyledButton } from "../../styles/components/buttons";
import { ProductsList } from "../../components/ProductsList";
import { Cart } from "../../components/Cart";
import { Heading2 } from "../../styles/components/typography";
import { Header } from "../../components/Header";
import { StyledHome } from "./style";

export const HomePage = () => {
  const { userLoading } = useContext(UserContext);
  const { cartIsOpen } = useContext(CartContext);

  const [products, setProducts] = useState<iProduct[] | null>(null);
  const [filteredWord, setFilteredWord] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<iProduct[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("@BurguerKenzie:Token");
        const response = await api.get("products", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (products) {
      const find = products.filter((product) => {
        return (
          product.name.toLowerCase().includes(filteredWord.toLowerCase()) ||
          product.category.toLowerCase().includes(filteredWord.toLowerCase())
        );
      });
      setFilteredProducts(find);
    }
  }, [filteredWord]);

  return userLoading ? (
    <></>
  ) : (
    <StyledHome>
      <Header filteredWord={filteredWord} setFilteredWord={setFilteredWord} />
      <main>
        <ContainerHome>
          {filteredWord && (
            <div className="findRespost">
              <Heading2 color="grey-600">
                Resultados para: {filteredWord}
              </Heading2>
              <StyledButton
                onClick={() => setFilteredWord("")}
                color="primary"
                size="medium"
              >
                Limpar Busca
              </StyledButton>
            </div>
          )}
          <ProductsList products={filteredProducts} />
        </ContainerHome>
      </main>
      {cartIsOpen && <Cart />}
    </StyledHome>
  );
};

import { useContext } from "react";
import { CartContext } from "../../providers/CartContext/CartContext";

import { toast } from "react-toastify";

import { StyledButton } from "../../styles/components/buttons";
import { Body, Heading2, Heading3 } from "../../styles/components/typography";
import { Product } from "./Product";
import { StyledCart } from "./style";

export const Cart = () => {
  const { cart, setCart, setCartIsOpen } = useContext(CartContext);

  const cartTotal: number = cart.reduce(
    (total, product) => total + product.price * product.counter,
    0
  );

  const cleanCart = () => {
    setCart([]);
    toast.error("Todos os produtos foram removidos");
  };

  return (
    <StyledCart>
      <div className="cartHeader">
        <Heading2 color="grey-0">Carrinho de compras</Heading2>
        <button onClick={() => setCartIsOpen(false)}>X</button>
      </div>

      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((product) => (
              <Product product={product} />
            ))}
          </ul>
          <div className="cartTotal">
            <div>
              <Heading3 color="grey-600">Total</Heading3>
              <Heading3 color="grey-300">
                {cartTotal.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Heading3>
            </div>
            <StyledButton
              color="grey"
              size="default"
              onClick={() => cleanCart()}
            >
              Remover todos
            </StyledButton>
          </div>
        </>
      ) : (
        <div className="emptyCart">
          <Heading3 color="grey-600">Sua sacola está vazia</Heading3>
          <Body color="grey-300">Adicione itens</Body>
        </div>
      )}
    </StyledCart>
  );
};

import { useContext } from "react";
import { CartContext } from "../../../providers/CartContext/CartContext";

import { iProduct } from "../../../providers/CartContext/@types";

import { Heading3 } from "../../../styles/components/typography";
import { StyledCartProduct } from "./style";

import Trash from "../../../assets/trash.svg";

interface iProductProps {
  product: iProduct;
}

export const Product = ({ product }: iProductProps) => {
  const { upCount, downCount, removeProduct } = useContext(CartContext);

  const { name, img, counter, id } = product;

  return (
    <StyledCartProduct>
      <div className="imgContainer">
        <img src={img} alt={name} />
      </div>
      <div className="infosContainer">
        <Heading3 color="grey-600">{name}</Heading3>
        <div className="qtdContainer">
          <button onClick={() => downCount(id)}>-</button>
          <p>{counter}</p>
          <button onClick={() => upCount(id)}>+</button>
        </div>
        <button onClick={() => removeProduct(id)}>
          <img src={Trash} alt="Remover do carrinho" />
        </button>
      </div>
    </StyledCartProduct>
  );
};

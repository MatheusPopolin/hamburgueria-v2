import { useContext } from "react";
import { CartContext } from "../../../providers/CartContext/CartContext";

import { StyledProduct } from "./style";
import { Body, Caption, Heading3 } from "../../../styles/components/typography";
import { StyledButton } from "../../../styles/components/buttons";

interface iProductProps {
  product: iProduct;
}

interface iProduct {
  id: number;
  name: string;
  category: "Sanduíches" | "Bebidas";
  price: number;
  img: string;
}

export const Product = ({ product }: iProductProps) => {
  const {addToCart} = useContext(CartContext)
  
  const { name, category, price, img } = product;

  return (
    <StyledProduct>
      <div className="imgConatiner">
        <img src={img} alt={name} />
      </div>
      <div className="infosConatiner">
        <Heading3 color="grey-600">{name}</Heading3>
        <Caption color="grey-300">{category}</Caption>
        <Body color="primary">{price.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</Body>
        <StyledButton size="medium" color="primary" onClick={()=>addToCart(product)}>Adicionar</StyledButton>
      </div>
    </StyledProduct>
  );
};

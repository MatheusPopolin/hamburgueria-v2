import { StyledProductsList } from "./style";
import { Product } from "./Product";

interface iProduct {
  id: number;
  name: string;
  category: "Sanduíches" | "Bebidas";
  price: number;
  img: string;
}

interface iProductListProps {
  products: iProduct[];
}

export const ProductsList = ({ products }: iProductListProps) => {
  return (
    <StyledProductsList>
      {products?.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </StyledProductsList>
  );
};

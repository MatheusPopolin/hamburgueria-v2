import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { StyledProductsList } from "./style";
import { Product } from "./Product";

interface iProduct {
  id: number;
  name: string;
  category: "Sanduíches" | "Bebidas";
  price: number;
  img: string;
}

export const ProductsList = () => {
  const [products, setProducts] = useState<iProduct[] | null>(null);

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
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <StyledProductsList>
      {products?.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </StyledProductsList>
  );
};

export interface iCartContext {
  cart: iProduct[];
  setCart: React.Dispatch<React.SetStateAction<iProduct[]>>;
  addToCart: (product: iAddProduct) => void
}

export interface iCartProviderProps {
  children: React.ReactNode;
}

export interface iProduct {
  id: number;
  name: string;
  category: "Sanduíches" | "Bebidas";
  price: number;
  img: string;
  counter: number;
}

export interface iAddProduct {
  id: number;
  name: string;
  category: "Sanduíches" | "Bebidas";
  price: number;
  img: string;
}
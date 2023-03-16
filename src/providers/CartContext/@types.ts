export interface iCartContext {
  cart: iProduct[];
  setCart: React.Dispatch<React.SetStateAction<iProduct[]>>;
  addToCart: (product: iAddProduct) => void;
  cartIsOpen: boolean;
  setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  upCount: (productId: number) => void;
  downCount: (productId: number) => void;
  removeProduct: (productId: number) => void;
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

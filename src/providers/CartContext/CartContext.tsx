import { createContext, useState } from "react";
import {
  iAddProduct,
  iCartContext,
  iCartProviderProps,
  iProduct,
} from "./@types";
import { toast } from "react-toastify";

export const CartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iCartProviderProps) => {
  const [cart, setCart] = useState<iProduct[]>([]);
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);

  const addToCart = (product: iAddProduct) => {
    const find = cart.find((e) => e.id === product.id);
    if (find) {
      find.counter++;
      const newCart = cart.filter((cartProduct) => cartProduct.id !== find.id);
      setCart([...newCart, find]);
    } else {
      const { id, name, price, category, img } = product;
      const addProduct = {
        id: id,
        name: name,
        price: price,
        category: category,
        img: img,
        counter: 1,
      };
      setCart([...cart, addProduct]);
    }
    toast.success("Adicionado ao carrinho");
  };

  const upCount = (productId: number) => {
    const find = cart.find((e) => e.id === productId);
    find!.counter++;
    const newCart = cart.filter((cartProduct) => cartProduct.id !== find!.id);
    setCart([...newCart, find!]);
  };

  const downCount = (productId: number) => {
    const find = cart.find((e) => e.id === productId);
    find!.counter--;
    if (find!.counter === 0) {
      removeProduct(productId);
    } else {
      const newCart = cart.filter((cartProduct) => cartProduct.id !== find!.id);
      setCart([...newCart, find!]);
    }
  };

  const removeProduct = (productId: number) => {
    setCart((oldList) => {
      return oldList.filter((item) => item.id != productId);
    });
    toast.error("Produto removido");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        cartIsOpen,
        setCartIsOpen,
        upCount,
        downCount,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

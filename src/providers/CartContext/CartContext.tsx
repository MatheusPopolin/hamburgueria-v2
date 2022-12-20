import { createContext, useState } from "react";
import { iAddProduct, iCartContext, iCartProviderProps, iProduct } from "./@types";
import { toast } from "react-toastify";

export const CartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iCartProviderProps) => {
  const [cart, setCart] = useState<iProduct[]>([]);

  const addToCart = (product: iAddProduct)=>{
    const find = cart.find(e=>e.id===product.id)
    if(find){
      find.counter++
      const newCart = cart.filter(cartProduct=>cartProduct.id!==find.id)
      setCart([...newCart, find])
    }else{
      const {id, name, price, category, img} = product 
      const addProduct = {
        id: id,
        name: name,
        price: price,
        category: category,
        img: img,
        counter: 1
      }
      setCart([...cart, addProduct])
    }
    toast.success("Adicionado ao carrinho")
  }

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

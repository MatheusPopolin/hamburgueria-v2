import { CartProvider } from "./CartContext/CartContext";
import { UserProvider } from "./UserContext/UserContext";

interface iProviderProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: iProviderProps) => {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  );
};

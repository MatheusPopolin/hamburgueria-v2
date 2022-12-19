import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { iUserContext, iUserContextProps, iUser, iFormLoginData } from "./@types";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<iUser | null>(null);

  const userLogin = async (
    formData: iFormLoginData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const response = await api.post("login", formData);
      setUser(response.data.user);
      window.localStorage.setItem("@BurguerKenzie:Token", response.data.token);
      toast.success("Login bem sucedido");
      setTimeout(() => navigate("/homepage"), 1000);
    } catch (error) {
      toast.error("Email ou senha inválidos");
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, userLogin }}>
      {children}
    </UserContext.Provider>
  );
};

import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  iUserContext,
  iUserContextProps,
  iUser,
  iFormLoginData,
  iFormRegisterData,
} from "./@types";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<iUser | null>(null);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    const token = window.localStorage.getItem("@BurguerKenzie:Token");
    (async () => {
      try {
        const response = await api.get("products", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setUserLoading(false);
        navigate("/homepage");
      } catch (error) {
        window.localStorage.removeItem("@BurguerKenzie:Token");
        setUserLoading(false);
        navigate("/");
      }
    })();
  }, []);

  const userLogin = async (
    formData: iFormLoginData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const response = await api.post("login", formData);
      setUser(response.data.user);
      window.localStorage.setItem(
        "@BurguerKenzie:Token",
        response.data.accessToken
      );
      toast.success("Login bem sucedido");
      setTimeout(() => navigate("/homepage"), 1000);
    } catch (error) {
      toast.error("Email ou senha inválidos");
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };

  const userRegister = async (
    formData: iFormRegisterData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const { name, email, password } = formData;
    const userData = {
      name: name,
      email: email,
      password: password,
    };
    try {
      setLoading(true);
      const response = await api.post("users", userData);
      setUser(response.data.user);
      toast.success("Cadastro bem sucedido");
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      toast.error("Email já cadastrado");
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, userLogin, userRegister, userLoading }}>
      {children}
    </UserContext.Provider>
  );
};

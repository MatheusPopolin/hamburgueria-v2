import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";

import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { StyledFormLogin } from "./style";
import { StyledInput } from "../../styles/components/inputs";
import { Body, Caption, Heading3 } from "../../styles/components/typography";
import { StyledButton } from "../../styles/components/buttons";
import { Link } from "react-router-dom";

interface iFormLoginData {
  email: string;
  password: string;
}

export const FormLogin = () => {
  const { userLogin } = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const loginSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Formato inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormLoginData>({
    resolver: yupResolver(loginSchema),
  });

  const submitLogin: SubmitHandler<iFormLoginData> = (data) => {
    userLogin(data, setLoading);
  };

  return (
    <StyledFormLogin onSubmit={handleSubmit(submitLogin)} noValidate>
      <Heading3 color="grey-600">Login</Heading3>

      <div>
        <StyledInput
          color={errors.email && "negative"}
          type="email"
          id="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email?.message && (
          <Caption color="negative">{errors.email.message}</Caption>
        )}
      </div>

      <div>
        <StyledInput
          color={errors.password && "negative"}
          type="password"
          id="password"
          placeholder="Senha"
          {...register("password")}
        />
        {errors.password?.message && (
          <Caption color="negative">{errors.password.message}</Caption>
        )}
      </div>

      <StyledButton
        size="default"
        color="primary"
        type="submit"
        disabled={loading}
      >
        {loading ? "Logando..." : "Logar"}
      </StyledButton>

      <Body color="grey-300">
        Crie sua conta para saborear muitas delícias e matar sua fome!
      </Body>
      <Link to="/register">Cadastre-se</Link>
    </StyledFormLogin>
  );
};

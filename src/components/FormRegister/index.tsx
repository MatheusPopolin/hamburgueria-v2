import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";

import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { StyledFormRegister } from "./style";
import { StyledInput } from "../../styles/components/inputs";
import { Caption, Heading3 } from "../../styles/components/typography";
import { StyledButton } from "../../styles/components/buttons";
import { Link } from "react-router-dom";

interface iFormRegisterData {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

export const FormRegister = () => {
  const { userRegister } = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const registerSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .required("Campo obrigatório")
      .email("Digite um email válido"),
    password: yup
      .string()
      .required("Informe uma senha")
      .matches(/(?=.*[a-zA-Z])/, "É necessário uma letra")
      .matches(/(?=.*[0-9])/, "É necessário um número")
      .matches(/(?=.*[$*&@#])/, "É necessário um caractere especial")
      .min(8, "É necessário pelo menos 8 caracteres"),
    password_confirm: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "As senhas não coincidem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormRegisterData>({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  const submitRegister: SubmitHandler<iFormRegisterData> = (data) => {
    userRegister(data, setLoading);
  };

  return (
    <StyledFormRegister onSubmit={handleSubmit(submitRegister)} noValidate>
      <div className="top">
        <Heading3 color="grey-600">Cadastro</Heading3>
        <Link to="/">Retomar para o login</Link>
      </div>

      <div>
        <StyledInput
          color={errors.name && "negative"}
          type="name"
          id="name"
          placeholder="Nome"
          {...register("name")}
        />
        {errors.name?.message && (
          <Caption color="negative">{errors.name.message}</Caption>
        )}
      </div>

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

      <div>
        <StyledInput
          color={errors.password_confirm && "negative"}
          type="password"
          id="password_confirm"
          placeholder="Confirmar Senha"
          {...register("password_confirm")}
        />
        {errors.password_confirm?.message && (
          <Caption color="negative">{errors.password_confirm.message}</Caption>
        )}
      </div>

      <StyledButton
        size="default"
        color="primary"
        type="submit"
        disabled={loading}
      >
        {loading ? "Cadastrando..." : "Cadastrar"}
      </StyledButton>
    </StyledFormRegister>
  );
};

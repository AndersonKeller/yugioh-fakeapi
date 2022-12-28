import { useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { UserContext } from "../../context/UserContext/UserContext";
import { StyledModalWrapper } from "../CardPage/style";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledButton } from "../../components/Button/style";
import { Input } from "../../components/Input/Input";
import { apiAuth } from "../../service/api";

export function Register() {
  const { showRegister, setShowRegister } = useContext(UserContext);
  type iFormData = {
    name: string;
    email: string;
    password: string;
  };
  const navigate = useNavigate();
  const registerSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .min(3, "No mínimo 3 caracteres"),
    email: yup.string().required("Email obrigatório").email("formato inválido"),
    password: yup.string().required("Senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormData>({ resolver: yupResolver(registerSchema) });
  const onSubmit: SubmitHandler<iFormData> = async (data: iFormData) =>
    onSubmitApi(data);
  function onSubmitApi(data: iFormData) {
    async function registerApi() {
      try {
        const res = await apiAuth.post("/register", data);
        console.log(res);
        navigate("/login");
      } catch (error) {
        console.error(error);
      }
    }
    registerApi();
  }
  function closeModal() {
    setShowRegister(!showRegister);
    navigate("/home");
  }
  return (
    <StyledModalWrapper>
      <RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <button className="closeButton" onClick={closeModal}>
          X
        </button>
        <h2>Faça seu cadastro</h2>
        <Input
          register={register("name")}
          placeholder={"digite seu nome"}
          errorMsg={errors.name?.message && errors.name.message}
        />
        <Input
          register={register("email")}
          placeholder={"digite seu email"}
          errorMsg={errors.email?.message && errors.email.message}
        />
        <Input
          register={register("password")}
          placeholder={"digite sua senha"}
          errorMsg={errors.password?.message && errors.password.message}
        />
        <StyledButton type="submit">cadastrar</StyledButton>
      </RegisterForm>
    </StyledModalWrapper>
  );
}

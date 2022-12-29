import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { UserContext } from "../../context/UserContext/UserContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledModalWrapper } from "../CardPage/style";
import { apiAuth } from "../../service/api";
import { Input } from "../../components/Input/Input";
import { StyledButton } from "../../components/Button/style";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { showLogin, setShowLogin } = useContext(UserContext);
  type iFormData = {
    email: string;
    password: string;
  };
  const navigate = useNavigate();
  const loginSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("formato inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "deve conter ao menos 6 caracteres"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormData>({ resolver: yupResolver(loginSchema) });
  const onSubmit: SubmitHandler<iFormData> = async (data: iFormData) =>
    onSubmitApi(data);
  function onSubmitApi(data: iFormData) {
    async function loginApi() {
      console.log(data);
      try {
        const res = await apiAuth.post("/login", data);
        console.log(res);
        window.localStorage.setItem(
          "@tokenYuGiOh-fakeApi",
          res.data.accessToken
        );
        window.localStorage.setItem("idUser", res.data.user.id);
      } catch (error) {
        console.error(error);
      } finally {
        navigate("/home");
      }
    }
    loginApi();
  }
  function closeModal() {
    setShowLogin(!showLogin);
    navigate("/home");
  }
  return (
    <StyledModalWrapper>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <button className="closeButton" onClick={closeModal}>
          X
        </button>
        <h2>Faça Login</h2>
        <Input
          type="email"
          register={register("email")}
          placeholder={"digite seu email"}
          errorMsg={errors.email?.message && errors.email.message}
        />
        <Input
          type="password"
          register={register("password")}
          placeholder={"digite sua senha"}
          errorMsg={errors.password?.message && errors.password.message}
        />
        <StyledButton type="submit">Login</StyledButton>
      </LoginForm>
    </StyledModalWrapper>
  );
}

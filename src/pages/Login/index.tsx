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
import { notify } from "../../context/MainProvider/MainProvier";

export function Login() {
  const { showLogin, setShowLogin, setUser } = useContext(UserContext);

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
        console.log(res.data);
        window.localStorage.setItem(
          "@tokenYuGiOh-fakeApi",
          res.data.accessToken
        );
        window.localStorage.setItem("@idYuGiOh", res.data.user.id);
        setUser(res.data.user);
        notify({ message: "Login efetuado com sucesso", type: "sucess" });
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } catch (error) {
        console.error(error);
        notify({ message: "Algo deu errado", type: "error" });
      }
    }
    loginApi();
  }
  function closeModal(): void {
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
          register={register("email")}
          placeholder={"digite seu email"}
          errorMsg={errors.email?.message && errors.email.message}
        />
        <Input
          register={register("password")}
          placeholder={"digite sua senha"}
          errorMsg={errors.password?.message && errors.password.message}
        />
        <StyledButton type="submit">Login</StyledButton>
      </LoginForm>
    </StyledModalWrapper>
  );
}

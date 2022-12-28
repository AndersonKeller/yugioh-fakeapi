import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { UserContext } from "../../context/UserContext/UserContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledModalWrapper } from "../CardPage/style";
import { apiAuth } from "../../service/api";

export function Login() {
  const { showLogin, setShowLogin } = useContext(UserContext);
  type iFormData = {
    name: string;
    email: string;
    password: string;
  };
  const loginSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .min(3, "no mínimo 3 caracteres"),
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
      try {
        const res = await apiAuth.post("/login", data);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }
    loginApi();
  }
  return (
    <StyledModalWrapper>
      <LoginForm
        onSubmit={handleSubmit(onSubmitApi)}
        register={register}
        showLogin={showLogin}
        setShowLogin={setShowLogin}
      />
    </StyledModalWrapper>
  );
}

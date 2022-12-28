import { useNavigate } from "react-router-dom";
import { StyledModal, StyledModalWrapper } from "../../pages/CardPage/style";
import { StyledButton } from "../Button/style";
import { StyledForm, StyledInput } from "./style";

export interface iLoginFormProps {
  showLogin: boolean;
  setShowLogin: (showLogim: boolean) => void;
  onSubmit: () => void;
  register: {};
}

export function LoginForm({
  showLogin,
  setShowLogin,
  register,
  onSubmit,
}: iLoginFormProps) {
  const navigate = useNavigate();
  function closeModal() {
    setShowLogin(!showLogin);
    navigate("/home");
  }
  return (
    <StyledModalWrapper>
      {" "}
      <StyledForm onSubmit={onSubmit}>
        <button className="closeButton" onClick={closeModal}>
          X
        </button>
        <h2>Faça Login</h2>
        <StyledInput {...register} placeholder="Digite seu email" />
        <StyledInput {...register} placeholder="Digite sua senha" />
        <StyledButton type="submit">Login</StyledButton>
      </StyledForm>
    </StyledModalWrapper>
  );
}

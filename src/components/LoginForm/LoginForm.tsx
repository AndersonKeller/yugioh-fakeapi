import { useNavigate } from "react-router-dom";
import { StyledButton } from "../Button/style";
import { StyledForm, StyledInput } from "./style";

export interface iLoginFormProps {
  showLogin: boolean;
  setShowLogin: (showLogim: boolean) => void;
}

export function LoginForm({ showLogin, setShowLogin }: iLoginFormProps) {
  const navigate = useNavigate();
  function closeModal() {
    setShowLogin(!showLogin);
    navigate("/home");
  }
  return (
    <StyledForm>
      <button className="closeButton" onClick={closeModal}>
        X
      </button>
      <h2>Faça Login</h2>
      <StyledInput placeholder="Digite seu email" />
      <StyledInput placeholder="Digite sua senha" />
      <StyledButton type="submit">Login</StyledButton>
    </StyledForm>
  );
}

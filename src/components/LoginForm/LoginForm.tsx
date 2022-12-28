import { StyledButton } from "../Button/style";
import { StyledForm, StyledInput } from "./style";

export interface iLoginFormProps {
  showLogin: boolean;
  setShowLogin: (showLogim: boolean) => void;
}

export function LoginForm({ showLogin, setShowLogin }: iLoginFormProps) {
  function closeModal() {
    setShowLogin(!showLogin);
  }
  return (
    <StyledForm>
      <button className="closeButton" onClick={closeModal}>
        X
      </button>
      <StyledInput placeholder="Digite seu email" />
      <StyledInput placeholder="Digite sua senha" />
      <StyledButton type="submit">Login</StyledButton>
    </StyledForm>
  );
}

import { StyledButton } from "../Button/style";

import { StyledForm, StyledInput } from "../LoginForm/style";
interface iRegisterProps {
  showRegister: boolean;
  setShowRegister: (showRegister: boolean) => void;
}

export function RegisterForm({
  showRegister,
  setShowRegister,
}: iRegisterProps) {
  function closeModal() {
    setShowRegister(!showRegister);
  }
  return (
    <StyledForm>
      <button className="closeButton" onClick={closeModal}>
        X
      </button>
      <h2>Faça seu cadastro</h2>
      <StyledInput placeholder="Digite seu nome" />
      <StyledInput placeholder="Digite seu email" />
      <StyledInput placeholder="Defina uma senha" />
      <StyledButton type="submit">Registrar</StyledButton>
    </StyledForm>
  );
}

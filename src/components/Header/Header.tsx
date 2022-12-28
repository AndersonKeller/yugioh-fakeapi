import { useContext, useState } from "react";
import { CardContext } from "../../context/CardContext/CardContext";
import { StyledModalWrapper } from "../../pages/CardPage/style";

import { StyledButton } from "../Button/style";
import { LoginForm } from "../LoginForm/LoginForm";
import { RegisterForm } from "../RegisterForm/RegisterForm";

import { StyledHeader } from "./style";

export function Header() {
  const { setTypeFilter } = useContext(CardContext);
  const [showFilter, setShowFilter] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  function loginForm() {
    setShowLogin(!showLogin);
  }
  function registerForm() {
    setShowRegister(!showRegister);
  }
  function defineFilter(text: string) {
    setTypeFilter(text);
    text === "" && filters();
  }

  function filters() {
    setShowFilter(!showFilter);
  }

  return (
    <StyledHeader>
      <h1>Yu-gi-oh</h1>
      <StyledButton onClick={filters}>Filtros</StyledButton>
      {showFilter && (
        <StyledModalWrapper>
          <StyledButton onClick={() => defineFilter("")}>
            Resetar Filtros
          </StyledButton>
          <StyledButton onClick={() => defineFilter("Spell Card")}>
            Spell Card
          </StyledButton>
          <StyledButton onClick={() => defineFilter("Trap Card")}>
            Trap Card
          </StyledButton>
          <StyledButton onClick={() => defineFilter("Skill Card")}>
            Skill Card
          </StyledButton>
          <StyledButton onClick={() => defineFilter("Normal Monster")}>
            Normal Monster
          </StyledButton>
          <StyledButton onClick={() => defineFilter("Spirit Monster")}>
            Spirit Monster
          </StyledButton>
          <StyledButton onClick={filters}>OK</StyledButton>
        </StyledModalWrapper>
      )}
      <StyledButton onClick={loginForm}>Login</StyledButton>
      {showLogin && (
        <>
          <StyledModalWrapper>
            <LoginForm showLogin={showLogin} setShowLogin={setShowLogin} />
          </StyledModalWrapper>
        </>
      )}
      {showRegister && (
        <>
          <StyledModalWrapper>
            <RegisterForm
              showRegister={showRegister}
              setShowRegister={setShowRegister}
            />
          </StyledModalWrapper>
        </>
      )}
      <StyledButton onClick={registerForm}>Registrar</StyledButton>
    </StyledHeader>
  );
}

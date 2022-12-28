import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../../context/CardContext/CardContext";
import { UserContext } from "../../context/UserContext/UserContext";
import { StyledModalWrapper } from "../../pages/CardPage/style";

import { StyledButton } from "../Button/style";
import { LoginForm } from "../LoginForm/LoginForm";

import { StyledHeader } from "./style";

export function Header() {
  const { setTypeFilter } = useContext(CardContext);
  const [showFilter, setShowFilter] = useState(false);

  const { showRegister, setShowRegister, showLogin, setShowLogin } =
    useContext(UserContext);

  const navigate = useNavigate();

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
      <h1>YU-GI-OH</h1>
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
      <StyledButton onClick={() => navigate("/login")}>Login</StyledButton>

      <StyledButton onClick={() => navigate("/register")}>
        Registrar
      </StyledButton>
    </StyledHeader>
  );
}

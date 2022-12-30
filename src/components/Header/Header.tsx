import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../../context/CardContext/CardContext";

import { StyledModalWrapper } from "../../pages/CardPage/style";

import { StyledButton } from "../Button/style";
import { Input } from "../Input/Input";
import { InputSearchName } from "../InputSearchName/InputSearchName";

import { StyledHeader } from "./style";

export function Header() {
  const { setTypeFilter } = useContext(CardContext);
  const [showFilter, setShowFilter] = useState(false);

  const navigate = useNavigate();

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
      <div>
        <StyledButton onClick={filters}>Filtros</StyledButton>
        <StyledButton onClick={() => navigate("/login")}>Login</StyledButton>

        <StyledButton onClick={() => navigate("/register")}>
          Registrar
        </StyledButton>
      </div>
      <InputSearchName>
        <Input placeholder="Pesquise pelo nome..." register={""} />
        <StyledButton>Pesquisar</StyledButton>
      </InputSearchName>
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
    </StyledHeader>
  );
}

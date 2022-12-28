import { useContext, useEffect, useState } from "react";
import { CardContext } from "../../context/CardContext/CardContext";

import { StyledButton } from "../Button/style";
import { StyledHeader } from "./style";

export function Header() {
  const { setTypeFilter } = useContext(CardContext);
  const [showFilter, setShowFilter] = useState(false);

  function defineFilter(text: string) {
    setTypeFilter(text);
  }

  function filters() {
    setShowFilter(!showFilter);
  }

  return (
    <StyledHeader>
      <h1>Yu-gi-oh</h1>
      <StyledButton onClick={filters}>Filtros</StyledButton>
      {showFilter && (
        <>
          <div>
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
          </div>
        </>
      )}
    </StyledHeader>
  );
}

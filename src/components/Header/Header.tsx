import { useContext, useEffect, useState } from "react";
import { CardContext } from "../../context/CardContext/CardContext";
import { apiConsume } from "../../service/api";
import { StyledButton } from "../Button/style";
import { StyledHeader } from "./style";

export function Header() {
  const {
    filterHandle,
    setTextFilter,
    filterCards,
    setFilterCards,
    offset,
    setRemaing,
  } = useContext(CardContext);

  function defineFilter() {
    setTextFilter("Spell Card");
  }

  return (
    <StyledHeader>
      <h1>Yu-gi-oh</h1>
      <StyledButton onClick={defineFilter}>Filtro</StyledButton>
    </StyledHeader>
  );
}

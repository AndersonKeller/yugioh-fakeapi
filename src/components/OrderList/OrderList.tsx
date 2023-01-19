import { useContext } from "react";
import { CardContext } from "../../context/CardContext/CardContext";

import { StyledButton } from "../Button/style";
import { StyledOrderList } from "./style";

export function OrderList() {
  const { typeFilter, setOffset, setRaceFilter } = useContext(CardContext);
  function defineSpell(text: string) {
    setOffset(0);
    setRaceFilter(text);
  }
  return (
    <StyledOrderList>
      <h3>Ordenar por: </h3>
      {typeFilter === "Spell Card" && (
        <>
          <StyledButton onClick={() => defineSpell("Normal")}>
            Normal
          </StyledButton>
          <StyledButton onClick={() => defineSpell("Field")}>
            Field
          </StyledButton>
          <StyledButton onClick={() => defineSpell("Equip")}>
            Equip
          </StyledButton>
          <StyledButton onClick={() => defineSpell("Continuous")}>
            Continuous
          </StyledButton>
          <StyledButton onClick={() => defineSpell("Quick-Play")}>
            Quick-Play
          </StyledButton>
          <StyledButton onClick={() => defineSpell("Ritual")}>
            Ritual
          </StyledButton>
        </>
      )}
    </StyledOrderList>
  );
}

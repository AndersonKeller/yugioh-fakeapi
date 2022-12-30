import { ReactNode, useContext } from "react";
import { CardContext } from "../../context/CardContext/CardContext";

import { StyledInputSearchName, StyledP } from "./style";

interface iInputSearchProps {
  onSubmit: () => void;
  children: ReactNode;
  errorMsg?: string;
}

export function InputSearchName({
  onSubmit,
  children,
  errorMsg,
}: iInputSearchProps) {
  const { searchName, resultSearch, nothing } = useContext(CardContext);
  console.log(searchName);
  console.log(resultSearch);

  return (
    <>
      <StyledInputSearchName noValidate onSubmit={onSubmit}>
        {children}
        {errorMsg && <span>{errorMsg}</span>}
      </StyledInputSearchName>
      {resultSearch && (
        <StyledP>Resultado da busca: {resultSearch} cartas</StyledP>
      )}
      {nothing && <StyledP>Nada encontrado</StyledP>}
    </>
  );
}

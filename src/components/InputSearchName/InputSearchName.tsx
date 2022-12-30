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
  const { resultSearch, nothing } = useContext(CardContext);

  return (
    <>
      <StyledInputSearchName noValidate onSubmit={onSubmit}>
        {children}
        {errorMsg && <span>{errorMsg}</span>}
      </StyledInputSearchName>
      {resultSearch > 0 && (
        <StyledP>Resultado da busca: {resultSearch} cartas</StyledP>
      )}
      {nothing && <StyledP>Nada encontrado</StyledP>}
    </>
  );
}

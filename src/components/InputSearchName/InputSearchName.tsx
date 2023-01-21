import { ReactNode, useContext } from "react";
import { CardContext } from "../../context/CardContext/CardContext";

import { StyledButton } from "../Button/style";

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
  const { resultSearch, nothing, setSearchName, setResultSearch, setFname } =
    useContext(CardContext);
  function handleCleanSearch() {
    setSearchName([]);
    setResultSearch(0);
    setFname("");
  }
  return (
    <>
      <StyledInputSearchName noValidate onSubmit={onSubmit}>
        {children}
        {errorMsg && <span>{errorMsg}</span>}
      </StyledInputSearchName>
      {resultSearch > 0 && (
        <>
          <StyledP>Resultado da busca: {resultSearch} cartas</StyledP>
          <StyledButton onClick={handleCleanSearch}> Limpar </StyledButton>
        </>
      )}
      {nothing && <StyledP>Nada encontrado</StyledP>}
    </>
  );
}

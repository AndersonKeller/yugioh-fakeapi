import { ReactNode, useContext, useState } from "react";
import { CardContext } from "../../context/CardContext/CardContext";
import { CardPage } from "../../pages/CardPage";

import { StyledCard } from "./style";

interface iCardProps {
  children: ReactNode;
}

export function Card({ children }: iCardProps) {
  const { showCard, setShowCard } = useContext(CardContext);
  function showCardFunc() {
    console.log("oi");
    setShowCard(!showCard);
  }
  return (
    <>
      <StyledCard onClick={showCardFunc}>{children}</StyledCard>
      {showCard && <CardPage />}
    </>
  );
}

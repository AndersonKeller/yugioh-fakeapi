import { ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CardContext } from "../../context/CardContext/CardContext";

import { StyledCard } from "./style";

interface iCardProps {
  children: ReactNode | string | number;
}

export function Card({ children }: iCardProps) {
  console.log(children);
  const navigate = useNavigate();
  const { showCard, setShowCard } = useContext(CardContext);
  function showCardFunc() {
    setShowCard(!showCard);
    navigate("/card");
  }
  return (
    <>
      <StyledCard onClick={showCardFunc}>{children}</StyledCard>
    </>
  );
}

import { ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../../context/CardContext/CardContext";

import { StyledCard } from "./style";

interface iCardProps {
  children: ReactNode | string | number;
  id: string | number | null;
}

export function Card({ children, id }: iCardProps) {
  const navigate = useNavigate();
  const { setIdCard } = useContext(CardContext);

  function showCardFunc() {
    setIdCard(String(id));
    navigate(`/card/${id}`);
  }

  return (
    <>
      <StyledCard onClick={showCardFunc}>{children}</StyledCard>
    </>
  );
}

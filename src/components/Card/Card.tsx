import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { StyledCard } from "./style";

interface iCardProps {
  children: ReactNode | string | number;
  id: string | number;
}

export function Card({ children, id }: iCardProps) {
  console.log(children);
  const navigate = useNavigate();

  function showCardFunc() {
    navigate(`/card/${id}`);
  }
  return (
    <>
      <StyledCard onClick={showCardFunc}>{children}</StyledCard>
    </>
  );
}

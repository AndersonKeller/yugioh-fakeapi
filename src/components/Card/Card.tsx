import { ReactNode, useContext } from "react";
import { CardContext } from "../../context/CardContext/CardContext";
import { StyledCard } from "./style";

interface iCardProps {
  children: ReactNode;
}

export function Card({ children }: iCardProps) {
  return <StyledCard>{children}</StyledCard>;
}

import { ReactNode } from "react";

import { StyledCard } from "./style";

interface iCardProps {
  children: ReactNode;
}

export function Card({ children }: iCardProps) {
  return <StyledCard>{children}</StyledCard>;
}

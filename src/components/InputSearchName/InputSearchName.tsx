import { ReactNode } from "react";

import { StyledInputSearchName } from "./style";

interface iInputSearchProps {
  children: ReactNode;
}

export function InputSearchName({ children }: iInputSearchProps) {
  return <StyledInputSearchName>{children}</StyledInputSearchName>;
}

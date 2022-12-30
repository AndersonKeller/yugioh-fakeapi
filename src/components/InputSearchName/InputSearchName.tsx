import { ReactNode } from "react";

import { StyledInputSearchName } from "./style";

interface iInputSearchProps {
  onSubmit: () => void;
  children: ReactNode;
}

export function InputSearchName({ onSubmit, children }: iInputSearchProps) {
  return (
    <StyledInputSearchName noValidate onSubmit={onSubmit}>
      {children}
    </StyledInputSearchName>
  );
}

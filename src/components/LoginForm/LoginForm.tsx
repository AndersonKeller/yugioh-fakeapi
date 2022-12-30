import { ReactNode } from "react";
import { StyledModalWrapper } from "../../pages/CardPage/style";

import { StyledForm } from "./style";

export interface iLoginFormProps {
  onSubmit: () => void;

  children: ReactNode;
}

export function LoginForm({ onSubmit, children }: iLoginFormProps) {
  return (
    <StyledModalWrapper>
      <StyledForm noValidate onSubmit={onSubmit}>
        {children}
      </StyledForm>
    </StyledModalWrapper>
  );
}

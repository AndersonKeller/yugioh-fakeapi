import { ReactNode } from "react";

import { StyledModalWrapper } from "../../pages/CardPage/style";

import { StyledForm } from "../LoginForm/style";
interface iRegisterProps {
  onSubmit: () => void;
  children: ReactNode;
}

export function RegisterForm({ children, onSubmit }: iRegisterProps) {
  return (
    <StyledModalWrapper>
      <StyledForm noValidate onSubmit={onSubmit}>
        {children}
      </StyledForm>
    </StyledModalWrapper>
  );
}

import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { StyledModal, StyledModalWrapper } from "../../pages/CardPage/style";
import { StyledButton } from "../Button/style";
import { StyledForm, StyledInput } from "./style";

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

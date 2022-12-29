import { StyledInput } from "../LoginForm/style";

interface iInputProps {
  register: {};
  placeholder: string;
  errorMsg?: string;
  type: "text" | "email" | "password";
}

export function Input({ register, placeholder, errorMsg, type }: iInputProps) {
  return (
    <>
      <StyledInput {...register} placeholder={placeholder} type={type} />
      {errorMsg && <span>{errorMsg}</span>}
    </>
  );
}

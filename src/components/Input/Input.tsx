import { StyledInput } from "../LoginForm/style";

interface iInputProps {
  register: {};
  placeholder: string;
  errorMsg?: string;
}

export function Input({ register, placeholder, errorMsg }: iInputProps) {
  return (
    <>
      <StyledInput {...register} placeholder={placeholder} />
      {errorMsg && <span>{errorMsg}</span>}
    </>
  );
}

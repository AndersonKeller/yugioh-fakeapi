import { StyledInput } from "../LoginForm/style";

interface iInputProps {
  register: {};
  placeholder: string;
}

export function Input({ register, placeholder }: iInputProps) {
  return <StyledInput {...register} placeholder={placeholder} />;
}

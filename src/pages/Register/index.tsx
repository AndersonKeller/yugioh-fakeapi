import { useContext } from "react";

import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { UserContext } from "../../context/UserContext/UserContext";
import { StyledModalWrapper } from "../CardPage/style";

export function Register() {
  const { showRegister, setShowRegister } = useContext(UserContext);

  return (
    <StyledModalWrapper>
      <RegisterForm
        showRegister={showRegister}
        setShowRegister={setShowRegister}
      />
    </StyledModalWrapper>
  );
}

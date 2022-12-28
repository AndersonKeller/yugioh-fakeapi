import { useContext } from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { UserContext } from "../../context/UserContext/UserContext";
import { StyledModalWrapper } from "../CardPage/style";

export function Login() {
  const { showLogin, setShowLogin } = useContext(UserContext);
  return (
    <StyledModalWrapper>
      <LoginForm showLogin={showLogin} setShowLogin={setShowLogin} />
    </StyledModalWrapper>
  );
}

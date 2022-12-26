import { useNavigate } from "react-router-dom";

import { StyledButton } from "../../components/Button/style";

import { StyledModal, StyledModalWrapper } from "./style";

export function CardPage() {
  const navigate = useNavigate();

  function closeModal() {
    navigate("/home");
  }

  return (
    <StyledModalWrapper>
      <StyledModal>
        <StyledButton onClick={closeModal}>X</StyledButton>
      </StyledModal>
    </StyledModalWrapper>
  );
}

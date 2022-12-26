import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { StyledButton } from "../../components/Button/style";
import { CardContext } from "../../context/CardContext/CardContext";
import { StyledModal, StyledModalWrapper } from "./style";

export function CardPage() {
  const navigate = useNavigate();
  const { showCard, setShowCard } = useContext(CardContext);

  function closeModal() {
    setShowCard(!showCard);
    navigate("/home");
  }
  useEffect(() => {}, [showCard]);

  return (
    <StyledModalWrapper>
      <StyledModal>
        <StyledButton onClick={closeModal}>X</StyledButton>
      </StyledModal>
    </StyledModalWrapper>
  );
}

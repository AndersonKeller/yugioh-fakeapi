import { useContext } from "react";
import { Button } from "../../components/Button/Button";
import { StyledButton } from "../../components/Button/style";
import { CardContext } from "../../context/CardContext/CardContext";
import { StyledModal, StyledModalWrapper } from "./style";

export function CardPage() {
  const { showCard, setShowCard } = useContext(CardContext);

  function closeModal() {
    setShowCard(!showCard);
  }
  return (
    <StyledModalWrapper>
      <StyledModal>
        <StyledButton onClick={closeModal}>X</StyledButton>
      </StyledModal>
    </StyledModalWrapper>
  );
}

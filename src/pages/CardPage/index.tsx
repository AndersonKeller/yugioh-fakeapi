import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { StyledButton } from "../../components/Button/style";
import { Card } from "../../components/Card/Card";
import { CardContext } from "../../context/CardContext/CardContext";

import { StyledModal, StyledModalWrapper } from "./style";

export function CardPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { cards, idCard } = useContext(CardContext);
  function closeModal() {
    navigate("/home");
  }
  console.log(idCard);
  function filterCard() {
    const res = cards.find((card) => {
      if (card.id === idCard) {
        return card;
      } else {
        return {};
      }
    });
    console.log(res);
    return res;
  }
  useEffect(() => {
    filterCard();
    return setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const cardFind = filterCard();
  return loading ? (
    <></>
  ) : (
    <StyledModalWrapper>
      <StyledModal>
        <StyledButton onClick={closeModal}>X</StyledButton>
        <Card key={idCard} id={idCard}>
          {" "}
          <img
            key={idCard}
            id={String(idCard)}
            src={cardFind?.card_images[0].image_url}
            alt={cardFind?.name}
          />
        </Card>
      </StyledModal>
    </StyledModalWrapper>
  );
}

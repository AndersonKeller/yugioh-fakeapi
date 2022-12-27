/* eslint-disable react-hooks/exhaustive-deps */
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

  const res = cards.find((card) => String(card.id) === String(idCard));

  console.log(res);

  useEffect(() => {
    return setLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idCard]);

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
            src={res?.card_images[0].image_url}
            alt={res?.name}
          />
        </Card>
      </StyledModal>
    </StyledModalWrapper>
  );
}

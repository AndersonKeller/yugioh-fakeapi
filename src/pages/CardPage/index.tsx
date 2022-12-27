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
  const { cards, idCard, setIdCard } = useContext(CardContext);

  function closeModal() {
    navigate("/home");
  }

  function filterCard() {
    const res = cards.find((card) => String(card.id) === String(idCard));

    return res;
  }
  useEffect(() => {
    !idCard && navigate("/home");
  }, []);

  useEffect(() => {
    const res = filterCard();
    res && setIdCard(String(res.id));
    return setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const res = filterCard();
  return loading ? (
    <></>
  ) : (
    <StyledModalWrapper>
      <StyledModal>
        <StyledButton onClick={closeModal}>X</StyledButton>
        {idCard && (
          <Card key={idCard} id={idCard}>
            {" "}
            <img
              key={idCard}
              id={String(idCard)}
              src={res?.card_images[0].image_url}
              alt={res?.name}
            />
          </Card>
        )}
      </StyledModal>
    </StyledModalWrapper>
  );
}

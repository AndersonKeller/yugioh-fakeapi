/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { StyledButton } from "../../components/Button/style";
import { Card } from "../../components/Card/Card";
import { CardContext } from "../../context/CardContext/CardContext";

import { StyledAside, StyledModal, StyledModalWrapper } from "./style";
export interface iAsideProps {
  infos: boolean;
  setInfos: React.Dispatch<React.SetStateAction<boolean>>;
}
export function CardPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { cards, idCard, setIdCard, filterCards, searchName } =
    useContext(CardContext);
  const [infos, setInfos] = useState(false);

  function closeModal() {
    navigate("/home");
  }

  function filterCard() {
    if (searchName.length === 0 && filterCards.length === 0) {
      const res = cards.find((card) => String(card.id) === String(idCard));
      return res;
    } else if (searchName.length === 0) {
      const res = filterCards.find(
        (card) => String(card.id) === String(idCard)
      );
      return res;
    } else {
      const res = searchName.find((card) => String(card.id) === String(idCard));
      return res;
    }
  }
  function showInfos() {
    setInfos(!infos);
  }
  useEffect(() => {
    !idCard && navigate("/home");
  }, [infos]);

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
        <StyledAside infos={infos} setInfos={setInfos} onClick={showInfos}>
          {infos ? (
            <>
              <h2>{res?.name}</h2>
              {res?.level && <small>Level: {res.level}</small>}
              <div>
                <span>{res?.id}</span>
                <p>{res?.type}</p>
                <p>{res?.race}</p>
              </div>
              {res?.archetype && <p>Archetype: {res?.archetype}</p>}
              {res?.attribute && <p>Atribute: {res?.attribute}</p>}
              <p>
                <strong>Description</strong>
                <br />
                {res?.desc}
              </p>

              {res?.atk && (
                <div>
                  <p>Atk: {res?.atk}</p>
                  <p>Def: {res?.def}</p>
                </div>
              )}
            </>
          ) : (
            <>
              <p>I</p>
              <p>N</p>
              <p>F</p>
              <p>O</p>
              <p>S</p>
            </>
          )}
        </StyledAside>
      </StyledModal>
    </StyledModalWrapper>
  );
}

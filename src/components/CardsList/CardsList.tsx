import { useContext } from "react";
import { CardContext } from "../../context/CardContext/CardContext";
import { StyledButton } from "../Button/style";
import { Card } from "../Card/Card";
import { StyledList } from "./style";

export function CardsList() {
  const { cards, offset, setOffset, remaing, filterCards, searchName } =
    useContext(CardContext);
  console.log(searchName);
  function backList() {
    offset > 0 && setOffset(offset - 30);
  }
  function nextList() {
    remaing > 0 && setOffset(offset + 30);
  }

  if (filterCards.length > 0) {
    return (
      <>
        <StyledList>
          {filterCards?.map((card) => (
            <Card key={card.id} id={String(card.id)}>
              <img
                key={card.id}
                id={String(card.id)}
                src={card.card_images[0].image_url}
                alt=""
              />
            </Card>
          ))}
        </StyledList>
        <StyledButton disabled={offset === 0 && true} onClick={backList}>
          Anterior
        </StyledButton>
        <StyledButton disabled={remaing === 0 && true} onClick={nextList}>
          Próximo
        </StyledButton>
      </>
    );
  } else if (searchName.length > 0) {
    return (
      <>
        <StyledList>
          {searchName?.map((card) => (
            <Card key={card.id} id={String(card.id)}>
              <img
                key={card.id}
                id={String(card.id)}
                src={card.card_images[0].image_url}
                alt=""
              />
            </Card>
          ))}
        </StyledList>
        <StyledButton disabled={offset === 0 && true} onClick={backList}>
          Anterior
        </StyledButton>
        <StyledButton disabled={remaing === 0 && true} onClick={nextList}>
          Próximo
        </StyledButton>
      </>
    );
  } else {
    return (
      <>
        <StyledList>
          {cards?.map((card) => (
            <Card key={card.id} id={String(card.id)}>
              <img
                key={card.id}
                id={String(card.id)}
                src={card.card_images[0].image_url}
                alt=""
              />
            </Card>
          ))}
        </StyledList>
        <StyledButton disabled={offset === 0 && true} onClick={backList}>
          Anterior
        </StyledButton>
        <StyledButton disabled={remaing === 0 && true} onClick={nextList}>
          Próximo
        </StyledButton>
      </>
    );
  }
}

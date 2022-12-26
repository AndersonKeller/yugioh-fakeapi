import { useContext, useEffect } from "react";
import { CardContext } from "../../context/CardContext/CardContext";
import { Card } from "../Card/Card";
import { StyledList } from "./style";

export function CardsList() {
  const { cards, offset, setOffset } = useContext(CardContext);
  console.log(cards);
  console.log(offset);

  return (
    <>
      {" "}
      <StyledList>
        {cards?.map((card) => (
          <Card key={card.id}>
            <img src={card.card_images[0].image_url} alt="" />
          </Card>
        ))}
      </StyledList>
      <button onClick={() => setOffset(offset + 10)}>Próximo</button>
    </>
  );
}

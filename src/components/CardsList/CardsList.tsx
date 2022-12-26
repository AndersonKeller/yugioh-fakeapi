import { useContext } from "react";
import { CardContext } from "../../context/CardContext/CardContext";
import { Card } from "../Card/Card";
import { StyledList } from "./style";

export function CardsList() {
  const { cards, offset, setOffset, remaing } = useContext(CardContext);

  console.log(cards);
  console.log(offset);
  function backList() {
    offset > 0 && setOffset(offset - 10);
  }
  function nextList() {
    remaing > 0 && setOffset(offset + 10);
  }

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
      <button onClick={backList}>Anterior</button>
      <button onClick={nextList}>Próximo</button>
    </>
  );
}

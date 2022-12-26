import { useContext, useEffect } from "react";
import { CardContext } from "../../context/CardContext/CardContext";
import { StyledList } from "./style";

export function CardsList() {
  const { cards, offset, setOffset } = useContext(CardContext);
  console.log(cards);
  console.log(offset);

  return (
    <StyledList>
      {cards?.map((card) => (
        <li key={card.id}>
          <img src={card.card_images[0].image_url_small} alt="" />
        </li>
      ))}
      <button onClick={() => setOffset(offset + 10)}>Próximo</button>
    </StyledList>
  );
}

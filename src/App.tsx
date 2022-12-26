import { useEffect, useState } from "react";

import { apiAuth, apiConsume } from "./service/api";

export function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  function getAllCards() {
    async function getApi() {
      try {
        setLoading(true);
        const resp = await apiConsume.get("/", {
          params: { offset: `${offset}`, num: 10 },
        });
        console.log(resp);
        setCards(resp.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getApi();
  }
  useEffect(() => {
    getAllCards();
    console.log(cards);
  }, [offset]);
  return (
    <div className="App">
      {loading ? (
        <h1>Carregando</h1>
      ) : (
        <>
          <ul>
            {cards?.map((card) => {
              console.log(cards);
              return (
                <li>
                  <img src={card.card_images[0].image_url} alt="" />
                </li>
              );
            })}
          </ul>
          <button onClick={() => setOffset(offset + 10)}>Next</button>
        </>
      )}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

import { apiAuth, apiConsume } from "./service/api";

export function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  function getAllCards() {
    async function getApi() {
      try {
        setLoading(true);
        const resp = await apiConsume.get("/");
        console.log(resp);
        setCards(resp.data);
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
  }, []);
  return (
    <div className="App">
      {loading ? <h1>Carregando</h1> : <h1>Sucesso</h1>}
    </div>
  );
}

export default App;

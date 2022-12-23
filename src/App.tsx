import { useEffect, useState } from "react";

import { api } from "./service/api";

export function App() {
  const [cards, setCards] = useState([]);
  function getAllCards() {
    async function getApi() {
      const resp = await api.get("/data");
      console.log(resp);
      setCards(resp.data);
    }
    getApi();
  }
  useEffect(() => {
    getAllCards();
    console.log(cards);
  }, []);
  return <div className="App"></div>;
}

export default App;

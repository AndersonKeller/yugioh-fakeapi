import { useContext, useEffect, useState } from "react";
import { CardsList } from "../../components/CardsList/CardsList";

import { Header } from "../../components/Header/Header";
import { CardContext } from "../../context/CardContext/CardContext";
import { apiConsume } from "../../service/api";

export function Home() {
  const { setCards, offset, setRemaing } = useContext(CardContext);
  const [loading, setLoading] = useState(true);

  function getAllCards() {
    async function getApi() {
      try {
        setLoading(true);
        const res = await apiConsume.get("", {
          params: { offset: offset, num: 10 },
        });

        console.log(res);
        setRemaing(res.data.meta.pages_remaining);
        setCards(res.data.data);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  return loading ? (
    <>
      <Header />
      <CardsList />
    </>
  ) : (
    <>
      <Header />
      <CardsList />
    </>
  );
}

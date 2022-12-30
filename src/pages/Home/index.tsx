import { useContext, useEffect, useState } from "react";
import { CardsList } from "../../components/CardsList/CardsList";

import { Header } from "../../components/Header/Header";
import { CardContext } from "../../context/CardContext/CardContext";
import { apiConsume } from "../../service/api";

export function Home() {
  const {
    typeFilter,
    filterCards,
    setCards,
    offset,
    setRemaing,
    filterHandle,
    searchName,
    fname,
    searchByName,
  } = useContext(CardContext);
  const [loading, setLoading] = useState(true);

  function getAllCards() {
    async function getApi() {
      try {
        setLoading(true);
        const res = await apiConsume.get("", {
          params: { offset: offset, num: 28 },
        });

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
    if (filterCards.length === 0 && searchName.length === 0) {
      getAllCards();
    } else if (searchName.length > 0) {
      searchByName();
    } else if (filterCards.length > 0) {
      filterHandle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);
  useEffect(() => {
    filterHandle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeFilter]);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fname !== "" && searchByName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fname]);
  useEffect(() => {
    getAllCards();
  }, []);

  return loading ? (
    <>
      <Header />
    </>
  ) : (
    <>
      <Header />
      <CardsList />
    </>
  );
}

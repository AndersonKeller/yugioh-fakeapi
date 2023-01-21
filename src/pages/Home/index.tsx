import { useContext, useEffect, useState } from "react";
import { CardsList } from "../../components/CardsList/CardsList";

import { Header } from "../../components/Header/Header";
import { OrderList } from "../../components/OrderList/OrderList";
import { CardContext } from "../../context/CardContext/CardContext";
import { UserContext } from "../../context/UserContext/UserContext";
import { apiAuth, apiConsume } from "../../service/api";

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
    raceFilter,
  } = useContext(CardContext);
  const { setUser } = useContext(UserContext);

  const [loading, setLoading] = useState(true);

  function verifyUser() {
    const token = window.localStorage.getItem("@tokenYuGiOh-fakeApi");
    const id = window.localStorage.getItem("@idYuGiOh");
    async function apiVerify() {
      try {
        const res = await apiAuth.get(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    apiVerify();
  }

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
    typeFilter !== "" && filterHandle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeFilter, raceFilter]);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fname !== "" && searchByName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fname]);
  useEffect(() => {
    getAllCards();
    verifyUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <>
      <Header />
    </>
  ) : (
    <>
      <Header />
      <OrderList />
      <CardsList />
    </>
  );
}

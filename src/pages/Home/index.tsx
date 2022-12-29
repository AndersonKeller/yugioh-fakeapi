import { useContext, useEffect, useState } from "react";
import { CardsList } from "../../components/CardsList/CardsList";
import { Decks } from "../../components/Decks/Decks";

import { Header } from "../../components/Header/Header";
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
  } = useContext(CardContext);
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useContext(UserContext);

  function getAllCards() {
    async function getApi() {
      try {
        setLoading(true);
        const res = await apiConsume.get("", {
          params: { offset: offset, num: 10 },
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
  function validateUser() {
    async function getUserApi() {
      const id = window.localStorage.getItem("idUser");
      const token = window.localStorage.getItem("@tokenYuGiOh-fakeApi");
      try {
        setLoading(true);
        const res = await apiAuth.get(`/users/${id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        console.log(res);
        setUser({
          email: res.data.email,
          id: res.data.id,
          name: "",
          password: res.data.password,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getUserApi();
  }
  useEffect(() => {
    filterCards.length === 0 ? getAllCards() : filterHandle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);
  useEffect(() => {
    filterHandle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeFilter]);
  useEffect(() => {
    getAllCards();
    loading && validateUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <>
      <Header />
    </>
  ) : (
    <>
      <Header />
      <CardsList />
      {user.email !== "" && <Decks></Decks>}
    </>
  );
}

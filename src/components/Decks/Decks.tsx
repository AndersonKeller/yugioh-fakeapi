import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext/UserContext";
import { StyledButton } from "../Button/style";
import { Input } from "../Input/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledDecks } from "./style";
import { StyledForm } from "../LoginForm/style";
import { apiAuth } from "../../service/api";
import { iCard } from "../../context/CardContext/CardContext";

export function Decks() {
  const { deck, setDeck } = useContext(UserContext);
  const [showCreate, setShowCreate] = useState(false);
  type iFormData = {
    name: string;
    cards: iCard[];
  };
  const nameSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
  });

  const { register, handleSubmit } = useForm<iFormData>({
    resolver: yupResolver(nameSchema),
  });
  const onSubmit: SubmitHandler<iFormData> = async (data: iFormData) =>
    onSubmitApi(data);

  function onSubmitApi(data: iFormData) {
    console.log(data);

    async function createNamedeck() {
      const id = window.localStorage.getItem("idUser");
      const token = window.localStorage.getItem("@tokenYuGiOh-fakeApi");
      try {
        const res = await apiAuth.post(`/users/${id}/userDecks`, data, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        console.log(res);
      } catch (error) {
        console.error(error);
      } finally {
        setShowCreate(false);
      }
    }
    createNamedeck();
  }
  function createDeck() {
    setShowCreate(!showCreate);
  }
  return (
    <StyledDecks>
      <h2>Meus decks</h2>
      <h2>{deck?.name}</h2>

      <StyledButton onClick={createDeck}>{showCreate ? "-" : "+"}</StyledButton>
      {showCreate && (
        <StyledForm noValidate onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="nome do deck"
            register={register("name")}
          />
          <StyledButton type="submit">Criar</StyledButton>
        </StyledForm>
      )}
    </StyledDecks>
  );
}

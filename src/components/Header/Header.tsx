import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../../context/CardContext/CardContext";

import { StyledModalWrapper } from "../../pages/CardPage/style";

import { StyledButton } from "../Button/style";
import { Input } from "../Input/Input";
import { InputSearchName } from "../InputSearchName/InputSearchName";

import { StyledHeader } from "./style";

export function Header() {
  const { setTypeFilter, setFname, setOffset } = useContext(CardContext);
  const [showFilter, setShowFilter] = useState(false);

  const searchNameSchema = yup.object().shape({
    fname: yup.string().required("Digite ao menos uma letra"),
  });
  type iFormData = {
    fname: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormData>({ resolver: yupResolver(searchNameSchema) });
  const onSubmit: SubmitHandler<iFormData> = async (data: iFormData) =>
    onSubmitFname(data);
  const navigate = useNavigate();

  function onSubmitFname(data: iFormData) {
    setFname(data.fname);
    setOffset(0);
  }

  function defineFilter(text: string) {
    setOffset(0);

    setTypeFilter(text);
    text === "" && filters();
  }

  function filters() {
    setShowFilter(!showFilter);
  }

  return (
    <StyledHeader>
      <h1>YU-GI-OH</h1>
      <div>
        <StyledButton onClick={filters}>Filtros</StyledButton>
        <StyledButton onClick={() => navigate("/login")}>Login</StyledButton>

        <StyledButton onClick={() => navigate("/register")}>
          Registrar
        </StyledButton>
      </div>
      <InputSearchName
        onSubmit={handleSubmit(onSubmit)}
        errorMsg={errors.fname?.message && errors.fname.message}
      >
        <Input
          placeholder="Pesquise pelo nome..."
          register={register("fname")}
        />
        <StyledButton type="submit">Pesquisar</StyledButton>
      </InputSearchName>
      {showFilter && (
        <StyledModalWrapper>
          <StyledButton onClick={() => defineFilter("")}>
            Resetar Filtros
          </StyledButton>
          <StyledButton onClick={() => defineFilter("Spell Card")}>
            Spell Card
          </StyledButton>
          <StyledButton onClick={() => defineFilter("Trap Card")}>
            Trap Card
          </StyledButton>
          <StyledButton onClick={() => defineFilter("Skill Card")}>
            Skill Card
          </StyledButton>
          <StyledButton onClick={() => defineFilter("Normal Monster")}>
            Normal Monster
          </StyledButton>
          <StyledButton onClick={() => defineFilter("Spirit Monster")}>
            Spirit Monster
          </StyledButton>
          <StyledButton onClick={filters}>OK</StyledButton>
        </StyledModalWrapper>
      )}
    </StyledHeader>
  );
}

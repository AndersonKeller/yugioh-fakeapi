import { useContext } from "react";

import { CardContext } from "../../context/CardContext/CardContext";

import { StyledButton } from "../Button/style";
import { StyledOrderList } from "./style";

export function OrderList() {
  const { typeFilter, setOffset, setRaceFilter } = useContext(CardContext);

  function defineRace(text: string) {
    setOffset(0);
    setRaceFilter(text);
  }
  const spellCardRaces = [
    "Normal",
    "Field",
    "Equip",
    "Continuous",
    "Quick-Play",
    "Ritual",
  ];
  const trapCardRaces = ["Normal", "Continuous", "Counter"];
  const normalMonsterRaces = [
    "Aqua",
    "Beast",
    "Beast-Warrior",
    "Cyberse",
    "Dinosaur",
    "Dragon",
    "Fairy",
    "Fiend",
    "Fish",
    "Insect",
    "Machine",
    "Plant",
    "Psychic",
    "Pyro",
    "Reptile",
    "Rock",
    "Sea Serpent",
    "Spellcaster",
    "Thunder",
    "Warrior",
    "Winged Beast",
    "Wyrm",
    "Zombie",
  ];
  const spiritMonsterRaces = [
    "Aqua",
    "Beast",
    "Beast-Warrior",
    "Dragon",
    "Fairy",
    "Fiend",
    "Pyro",
    "Rock",
    "Spellcaster",
    "Thunder",
    "Warrior",
    "Winged Beast",
    "Zombie",
  ];
  const effectMonsterRaces = [
    "Aqua",
    "Beast",
    "Beast-Warrior",
    "Creator-God",
    "Cyberse",
    "Dinosaur",
    "Divine-Beast",
    "Dragon",
    "Fairy",
    "Fiend",
    "Fish",
    "Insect",
    "Machine",
    "Plant",
    "Psychic",
    "Pyro",
    "Reptile",
    "Rock",
    "Sea Serpent",
    "Spellcaster",
    "Thunder",
    "Warrior",
    "Winged Beast",
    "Wyrm",
    "Zombie",
  ];
  const skillRaces = ["Ishizu", "Joey", "Kaiba", "Mai", "Pegasus", "Yugi"];

  return (
    <StyledOrderList>
      {typeFilter !== "" && <h3>Ordenar por raça: </h3>}
      {typeFilter === "Spell Card" &&
        spellCardRaces.map((race) => {
         
          return (
            <StyledButton key={race} onClick={() => defineRace(race)}>
              {race}
            </StyledButton>
          );
        })}
      {typeFilter === "Trap Card" &&
        trapCardRaces.map((race) => {
          return (
            <StyledButton key={race} onClick={() => defineRace(race)}>
              {race}
            </StyledButton>
          );
        })}
      {typeFilter === "Normal Monster" &&
        normalMonsterRaces.map((race) => {
          return (
            <StyledButton key={race} onClick={() => defineRace(race)}>
              {race}
            </StyledButton>
          );
        })}
      {typeFilter === "Spirit Monster" &&
        spiritMonsterRaces.map((race) => {
          return (
            <StyledButton key={race} onClick={() => defineRace(race)}>
              {race}
            </StyledButton>
          );
        })}
      {typeFilter === "Effect Monster" &&
        effectMonsterRaces.map((race) => {
          return (
            <StyledButton key={race} onClick={() => defineRace(race)}>
              {race}
            </StyledButton>
          );
        })}
      {typeFilter === "Skill Card" &&
        skillRaces.map((race) => {
          return (
            <StyledButton key={race} onClick={() => defineRace(race)}>
              {race}
            </StyledButton>
          );
        })}
    </StyledOrderList>
  );
}

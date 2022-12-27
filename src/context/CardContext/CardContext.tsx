import { createContext, ReactNode, useState } from "react";

interface iCardContextProps {
  children: ReactNode;
}
interface iCardContext {
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  cards: iCard[];
  setCards: React.Dispatch<React.SetStateAction<iCard[]>>;
  remaing: number;
  setRemaing: React.Dispatch<React.SetStateAction<number>>;
  idCard: string | number | null;
  setIdCard: React.Dispatch<React.SetStateAction<string>>;
}
interface iCard {
  name: string;
  id: number | string;
  image: string;
  desc: string;
  card_images: iImageArray[];
}
interface iImageArray {
  image_url: string;
  image_url_small: string;
}
export const CardContext = createContext<iCardContext>({} as iCardContext);

export function CardProvider({ children }: iCardContextProps) {
  const [cards, setCards] = useState([] as iCard[]);
  const [idCard, setIdCard] = useState("");
  const [offset, setOffset] = useState(0);
  const [remaing, setRemaing] = useState(0);

  return (
    <CardContext.Provider
      value={{
        remaing,
        setRemaing,
        cards,
        setCards,
        offset,
        setOffset,
        idCard,
        setIdCard,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

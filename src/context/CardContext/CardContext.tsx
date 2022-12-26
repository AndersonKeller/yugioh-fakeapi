import { createContext, ReactNode, useState } from "react";

interface iCardContextProps {
  children: ReactNode;
}
interface iCardContext {
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  cards: iCard[];
  setCards: React.Dispatch<React.SetStateAction<iCard[]>>;
}
interface iCard {
  name: string;
  id: number;
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
  const [cards, setCards] = useState({} as iCard[]);
  const [offset, setOffset] = useState(0);
  return (
    <CardContext.Provider value={{ cards, setCards, offset, setOffset }}>
      {children}
    </CardContext.Provider>
  );
}

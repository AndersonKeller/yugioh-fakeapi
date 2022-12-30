import { createContext, ReactNode, useState } from "react";
import { apiConsume } from "../../service/api";

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
  filterCards: iCard[];
  setFilterCards: React.Dispatch<React.SetStateAction<iCard[]>>;
  filterHandle: () => void;
  typeFilter: string;
  setTypeFilter: React.Dispatch<React.SetStateAction<string>>;
  searchName: iCard[];
  setSearchName: React.Dispatch<React.SetStateAction<iCard[]>>;
  fname: string;
  setFname: React.Dispatch<React.SetStateAction<string>>;
  searchByName: () => void;
}
interface iCard {
  name: string;
  id: number | string;
  image: string;
  desc: string;
  card_images: iImageArray[];
  type: string;
  race: string;
  archetype: string;
  atk?: number;
  attribute?: string;
  def?: number;
  level?: number;
}
interface iImageArray {
  image_url: string;
  image_url_small: string;
}
export const CardContext = createContext<iCardContext>({} as iCardContext);

export function CardProvider({ children }: iCardContextProps) {
  const [cards, setCards] = useState([] as iCard[]);
  const [filterCards, setFilterCards] = useState([] as iCard[]);
  const [searchName, setSearchName] = useState([] as iCard[]);
  const [idCard, setIdCard] = useState("");
  const [offset, setOffset] = useState(0);
  const [remaing, setRemaing] = useState(0);
  const [fname, setFname] = useState("");

  const [typeFilter, setTypeFilter] = useState("");

  function filterHandle() {
    async function getApiFilter() {
      try {
        //setLoading(true);
        const res = await apiConsume.get("", {
          params: { offset: offset, num: 28, type: `${typeFilter}` },
        });
        setRemaing(res.data.meta.pages_remaining);
        setFilterCards(res.data.data);
      } catch (error) {
        console.error(error);
        setFilterCards([]);
      } finally {
        //setLoading(false);
      }
    }
    getApiFilter();
  }

  function searchByName() {
    async function searchNameApi() {
      try {
        const res = await apiConsume.get("", {
          params: { offset: offset, num: 28, fname: fname },
        });

        setRemaing(res.data.meta.pages_remaining);

        setSearchName(res.data.data);
      } catch (error) {
        console.error(error);
        setSearchName([]);
      }
    }
    searchNameApi();
  }
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
        setFilterCards,
        filterCards,
        filterHandle,
        typeFilter,
        setTypeFilter,
        searchName,
        setSearchName,
        fname,
        setFname,
        searchByName,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

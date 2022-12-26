import { createContext, ReactNode, useState } from "react";

interface iCardContextProps {
  children: ReactNode;
}
interface iCardContext {
  card: iCard;
  setCard: React.Dispatch<React.SetStateAction<iCard>>;
}
interface iCard {
  name: string;
  email: string;
}
export const UserContext = createContext<iCardContext>({} as iCardContext);

export function CardProvider({ children }: iCardContextProps) {
  const [card, setCard] = useState({} as iCard);
  return (
    <UserContext.Provider value={{ card, setCard }}>
      {children}
    </UserContext.Provider>
  );
}

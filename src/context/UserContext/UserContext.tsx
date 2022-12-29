import { createContext, ReactNode, useState } from "react";
import { iCard } from "../CardContext/CardContext";

interface iUserContextProps {
  children: ReactNode;
}
interface iUserContext {
  user: iUser;
  setUser: React.Dispatch<React.SetStateAction<iUser>>;
  showRegister: boolean;
  setShowRegister: React.Dispatch<React.SetStateAction<boolean>>;
  showLogin: boolean;
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
  deck: iDeck;
  setDeck: React.Dispatch<React.SetStateAction<iDeck>>;
}
export interface iUser {
  name: string;
  email: string;
  password: string;
  id: number;
}
export interface iDeck {
  name: string;
  cards: iCard[];
}
export const UserContext = createContext<iUserContext>({} as iUserContext);

export function UserProvider({ children }: iUserContextProps) {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [deck, setDeck] = useState({} as iDeck);
  const [user, setUser] = useState<iUser>({ email: "", id: 0 } as iUser);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        showRegister,
        setShowRegister,
        setShowLogin,
        showLogin,
        deck,
        setDeck,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

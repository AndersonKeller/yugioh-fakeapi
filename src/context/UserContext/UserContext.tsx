import { createContext, ReactNode, useState } from "react";

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
}
interface iUser {
  name: string;
  email: string;
  password: string;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export function UserProvider({ children }: iUserContextProps) {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState({} as iUser);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        showRegister,
        setShowRegister,
        setShowLogin,
        showLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

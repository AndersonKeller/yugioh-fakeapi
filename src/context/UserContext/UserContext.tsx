import { createContext, ReactNode, useState } from "react";

interface iUserContextProps {
  children: ReactNode;
}
interface iUserContext {
  user: iUser;
  setUser: React.Dispatch<React.SetStateAction<iUser>>;
}
interface iUser {
  name: string;
  email: string;
}
export const UserContext = createContext<iUserContext>({} as iUserContext);

export function UserProvider({ children }: iUserContextProps) {
  const [user, setUser] = useState({} as iUser);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

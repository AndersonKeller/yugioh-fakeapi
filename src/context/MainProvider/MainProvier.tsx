import { createContext, ReactNode } from "react";
import { CardProvider } from "../CardContext/CardContext";
import { UserProvider } from "../UserContext/UserContext";

export const MainContext = createContext({});
interface iMainProvider {
  children: ReactNode;
}
export function MainProvider({ children }: iMainProvider) {
  return (
    <MainContext.Provider value={{}}>
      <UserProvider>
        <CardProvider>{children}</CardProvider>
      </UserProvider>
    </MainContext.Provider>
  );
}

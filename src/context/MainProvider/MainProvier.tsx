import { createContext, ReactNode } from "react";
import { toast } from "react-toastify";
import { CardProvider } from "../CardContext/CardContext";
import { UserProvider } from "../UserContext/UserContext";

export const MainContext = createContext({});
interface iMainProvider {
  children: ReactNode;
}
export interface iNotify {
  message?: string;
  type?: "error" | "sucess";
}
export function notify({ message, type }: iNotify) {
  return type === "error" ? toast.error(message) : toast.success(message);
}
export function MainProvider({ children }: iMainProvider): JSX.Element {
  return (
    <MainContext.Provider value={{}}>
      <UserProvider>
        <CardProvider>{children}</CardProvider>
      </UserProvider>
    </MainContext.Provider>
  );
}

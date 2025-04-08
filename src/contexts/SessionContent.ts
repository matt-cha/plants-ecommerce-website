import { createContext } from "react";

type SessionContextType = {
  username: string | null;
  signIn: (token: string) => void;
  signOut: () => void;
};
const SessionContext = createContext<SessionContextType | null>(null);
export default SessionContext;

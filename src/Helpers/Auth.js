import { createContext } from "react";
import useAuth from "./hooks/useAuth";
const Context = createContext();

function AuthProvider({ children }) {
  const { projetos,  } = useAuth();
  return (
    <Context.Provider
      value={{
        projetos,
        
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };

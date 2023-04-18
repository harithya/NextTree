import { AuthContextType, IAuth } from "@/types/contexts/auth-type";
import React, { PropsWithChildren, createContext, useState } from "react";

const AuthContext = createContext<any>(null);

const AuthContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IAuth>({
    name: "",
    username: "",
    image: "",
    bio: "",
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };

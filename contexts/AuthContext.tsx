import { AuthContextType, IAuth } from "@/types/contexts/auth-type";
import http from "@/utils/http";
import { getCookie } from "cookies-next";
import React, {
  PropsWithChildren,
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";

const AuthContext = createContext<any>(null);
const useAuth = () => {
  return useContext<AuthContextType>(AuthContext);
};

const AuthContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IAuth>({
    name: "",
    username: "",
    image: "",
    bio: "",
  });

  useEffect(() => {
    if (getCookie("token")) {
      http
        .get("/profile")
        .then((res) => {
          setUser({
            name: res.data.user.name,
            username: res.data.user.username,
            image: res.data.user.image,
            bio: res.data.user.bio,
          });
        })
        .catch((err) => {});
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider, useAuth };

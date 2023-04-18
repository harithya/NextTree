import React from "react";

export type IAuth = {
  name?: string;
  username?: string;
  bio?: string | null;
  image?: string | null;
};

export type AuthContextType = {
  user: IAuth;
  setUser: (value: IAuth) => void;
};

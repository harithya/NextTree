import React from "react";

export type IAuth = {
  name: string;
  email: string;
};

export type AuthContextType = {
  user: IAuth;
  isLoading: boolean;
  error: any;
  onLogin: (data: { email: string; password: string }) => void;
};

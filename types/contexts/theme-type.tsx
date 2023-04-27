import React from "react";
import { ThemeResult } from "../api";

export type ThemeContextType = {
  theme: ThemeResult;
  isLoading: boolean;
  handleSetTheme: (theme: ThemeResult) => void;
};

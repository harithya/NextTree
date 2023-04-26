import React from "react";
import { ThemeResult } from "../api";

export type ThemeContextType = {
  theme: ThemeResult;
  handleSetTheme: (theme: ThemeResult) => void;
};

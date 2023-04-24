import React from "react";
import { ThemeResult } from "../api";

export enum ThemeAction {
  SET_THEME = "SET_THEME",
  SET_ATTRIBUTE = "SET_ATTRIBUTE",
}

export type ThemeContextType = {
  theme: ThemeResult;
  dispatch: React.Dispatch<any>;
};

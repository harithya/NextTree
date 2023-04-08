import React from "react";

export type ITheme = {
  name: string;
  colors: {
    title: string;
    bg: string;
    button: string;
    textButton: string;
  };
};

export enum ThemeAction {
  SET_THEME = "SET_THEME",
  SET_ATTRIBUTE = "SET_ATTRIBUTE",
}

export type ThemeContextType = {
  theme: ITheme;
  dispatch: React.Dispatch<any>;
};

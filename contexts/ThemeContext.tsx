import React, { PropsWithChildren, createContext } from "react";

const ThemeContext = createContext<any>(null);

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <ThemeContext.Provider value={null}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };

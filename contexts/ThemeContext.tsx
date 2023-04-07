import React, {
  PropsWithChildren,
  createContext,
  useState,
  useEffect,
} from "react";

const ThemeContext = createContext<any>(null);

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState("pastel");

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "pastel";
    setTheme(theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

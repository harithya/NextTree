import { ThemeResult } from "@/types/api";
import http from "@/utils/http";
import React, {
  PropsWithChildren,
  createContext,
  useState,
  useEffect,
} from "react";
import { useToasts } from "react-toast-notifications";

const ThemeContext = createContext<any>(null);

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeResult | null>(null);
  const { addToast } = useToasts();

  useEffect(() => {
    http
      .get("/my-theme")
      .then((res) => {
        setTheme(res.data.theme.content);
      })
      .catch((err) => {
        alert("Opps something went wrong");
      });
  }, []);

  const handleSetTheme = async (theme: ThemeResult) => {
    try {
      setTheme(theme);
      await http.post("my-theme", {
        content: theme,
        _method: "PUT",
      });
    } catch (error) {
      addToast("Opps something went wrong", {
        appearance: "error",
      });
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

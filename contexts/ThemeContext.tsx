/* eslint-disable react-hooks/exhaustive-deps */
import Loading from "@/components/Loading";
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
  const [isLoading, setIsLoading] = useState(true);
  const { addToast } = useToasts();

  useEffect(() => {
    setIsLoading(true);
    http
      .get("/my-theme")
      .then((res) => {
        setIsLoading(false);
        setTheme(res.data.theme?.content);
      })
      .catch((err) => {
        setIsLoading(false);
        addToast("Opps something went wrong", {
          appearance: "error",
        });
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
    <ThemeContext.Provider value={{ theme, handleSetTheme, isLoading }}>
      <React.Fragment>
        {isLoading && <Loading />}
        {children}
      </React.Fragment>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

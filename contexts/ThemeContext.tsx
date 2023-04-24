import { ITheme } from "@/types/contexts/theme-type";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const initialState: ITheme = {
  name: "pastel",
  colors: {
    title: "",
    bg: "",
    button: "",
    textButton: "",
  },
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        name: action.payload.name,
        colors: action.payload.colors,
      };
    case "SET_ATRRIBUTE":
      return {
        ...state,
        colors: {
          ...state.colors,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

const ThemeContext = createContext<any>(null);

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, dispatch] = useReducer(reducer, initialState);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    const payload = localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme") ?? "")
      : initialState;

    if (payload) {
      dispatch({
        type: "SET_THEME",
        payload: payload,
      });
      setFirstRender(false);
    }
  }, []);

  useEffect(() => {
    if (!firstRender) {
      localStorage.setItem("theme", JSON.stringify(theme));
    }
  }, [firstRender, theme]);

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

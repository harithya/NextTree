import { ITheme, ThemeContextType } from "@/types/contexts/theme-type";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useReducer,
} from "react";

const initialState: ITheme = {
  name: "pastel",
  colors: {
    bg: null,
  },
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        name: action.payload,
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

  useEffect(() => {
    const value = localStorage.getItem("theme") || "pastel";
    dispatch({
      type: "SET_THEME",
      payload: value,
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

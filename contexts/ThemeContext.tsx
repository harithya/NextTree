import { ITheme } from "@/types/contexts/theme-type";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useReducer,
} from "react";

const initialState: ITheme = {
  name: "pastel",
  colors: {
    title: "#7dc4f",
    bg: "#f36e2d7",
    button: "#c7808ff",
    textButton: "#7f625",
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

  useEffect(() => {
    const payload =
      JSON.parse(localStorage.getItem("theme") ?? "") ?? initialState;
    if (theme) {
      dispatch({
        type: "SET_THEME",
        payload: payload,
      });
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

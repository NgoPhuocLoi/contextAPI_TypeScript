import { PropTypes } from "@material-ui/core";
import { createContext, useState } from "react";
import { ContextProps } from "./constInterface";

interface ThemeContextInitialValue {
  theme: PropTypes.Color;
  setTheme: (theme: PropTypes.Color) => void
}

const initialValue = {
  theme: "primary" as PropTypes.Color,
  setTheme: () =>{}
};

export const ThemeContext =
  createContext<ThemeContextInitialValue>(initialValue);

const ThemeContextProvider = ({ children }: ContextProps) => {
  const [theme, setTheme] = useState<PropTypes.Color>(initialValue.theme);
  const themeContextValue = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

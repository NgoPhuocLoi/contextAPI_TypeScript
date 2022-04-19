import { Fab } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import useStyles from "../hooks/useStyles";

const ToggleThemeBtn = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  const classes = useStyles();

  return (
    <Fab
      color={theme }
      variant="extended"
      className={classes.floatBtn}
      onClick={() => setTheme(theme === "primary" ? "secondary" : "primary")}
    >
      ToggleTheme
    </Fab>
  );
};

export default ToggleThemeBtn;

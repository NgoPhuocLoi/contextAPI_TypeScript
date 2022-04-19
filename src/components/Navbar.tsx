import {
  AppBar,
  Box,
  Button,
  Chip,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { ChangeEvent } from "react";
import { useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import useStyles from "../hooks/useStyles";
import { useEffect } from "react";
import { useContext } from "react";
import { ProgressContext } from "../Context/ProgressContext";
import { ThemeContext } from "../Context/ThemeContext";
import Login from "./Login";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  // Context Api
  const { lastTime, status } = useContext(ProgressContext);
  const { theme } = useContext(ThemeContext);
  const {
    authInfo: { isAuthenticated },
    toggleAuth,
  } = useContext(AuthContext);

  // styles
  const classes = useStyles();

  //state
  const [position, setPosition] = useState<string>("Full-stack Developer");
  const [time, setTime] = useState<Date>(new Date(Date.now()));
  const [openLoginForm, setOpenLoginForm] = useState(false);

  //   useEffect
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000);

    return () => clearInterval(timer);
  }, []);

  const onPositionChange = (
    e: ChangeEvent<{
      value: unknown;
    }>
  ) => {
    setPosition(e.target.value as string);
  };

  const handleLogout = () => {
    toggleAuth("");
  };

  return (
    <AppBar position="static" color={theme}>
      <Toolbar>
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          width={1}
          py={2}
        >
          <Typography variant="h6">My movies</Typography>

          {isAuthenticated && (
            <Box textAlign={"center"}>
              <WelcomeMessage position={position} />
              <Chip
                label={`Last time working on this project: ${lastTime} - Status: ${status}`}
              ></Chip>
              <Box mt={1}>
                <FormControl>
                  <Select
                    value={position}
                    onChange={onPositionChange}
                    className={classes.positionSelect}
                  >
                    <MenuItem value="Full-stack Developer">
                      Full-stack Developer
                    </MenuItem>
                    <MenuItem value="Frontend Developer">
                      Frontend Developer
                    </MenuItem>
                    <MenuItem value="Backend Developer">
                      Backend Developer
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          )}
          <Box textAlign={"center"}>
            <Box my={1}>
              <Typography variant="h6">{time.toUTCString()}</Typography>
            </Box>
            {isAuthenticated ? (
              <Button variant="contained" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={() => setOpenLoginForm(true)}
              >
                Login
              </Button>
            )}
          </Box>

          <Login isOpen={openLoginForm} setOpen={setOpenLoginForm} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

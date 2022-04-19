import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { ChangeEvent } from "react";
import { useState } from "react";
import { AuthContext } from "../Context/AuthContext";

interface LoginProps{
    isOpen: boolean
    setOpen: (status: boolean) => void
}

const Login = ({isOpen, setOpen}: LoginProps) => {
  // context
  const { toggleAuth } = useContext(AuthContext);
  // state
  const [username, setUsername] = useState<string>("");
  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmitLogin = () => {
    toggleAuth(username);
    setUsername("");
    setOpen(false)
  };

  const handleCloseLoginForm = () => {
      setOpen(false)
      setUsername("")
  }
  return (
    <Dialog open={isOpen} onClose={handleCloseLoginForm}>
      <DialogContent>
        <TextField
          label="username"
          onChange={onUsernameChange}
          required
          value={username}
        />
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          variant="contained"
          onClick={handleSubmitLogin}
          disabled={username === ""}
        >
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;

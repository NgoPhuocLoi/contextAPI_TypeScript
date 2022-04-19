import { Box } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

interface WelcomeMessageProps {
  position: string;
  country?: string;
}

const WelcomeMessage = ({
  position,
  country = "Viet Nam",
}: WelcomeMessageProps) => {
  const {authInfo} = useContext(AuthContext)
  return (
    <Box mb={1}>
      Welcome {authInfo.username} -  {position} from {country}
    </Box>
  );
};

export default WelcomeMessage;

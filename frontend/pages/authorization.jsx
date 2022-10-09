import React from "react";
import { Container, Typography} from "@mui/material";
import Box from '@mui/material/Box';
import LogIn from "../components/Authorization/LogIn";

const Authorization = () => {
  return (
    <Box sx={{ flexGrow: 1, height: '100vh', width: '100vw', background: '#323855'}}>
      <LogIn />
    </Box>
  );
};

export default Authorization;
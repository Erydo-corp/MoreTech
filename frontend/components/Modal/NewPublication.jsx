import React from "react";
import { Typography} from "@mui/material";
import Box from '@mui/material/Box';
import { AddPublication } from "./AddPublication";

const NewPublication = ({active, setActive}) => {
  return (
    <Box className={active ? "modal active" : "modal"} sx={{ 
      flexGrow: 1, 
      height: '100vh', 
      width: '100vw', 
      background: ' rgba(220, 222, 243, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 10,
      }} onClick={() => setActive(false)}>
      <AddPublication />
    </Box>
  );
};

export default NewPublication;
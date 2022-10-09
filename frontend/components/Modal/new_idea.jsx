import React from "react";
import Box from '@mui/material/Box';
import { AddIdea } from "./AddIdea";

const NewIdea = () => {
  return (
    <Box sx={{ 
      flexGrow: 1, 
      height: '100vh', 
      width: '100vw', 
      background: ' rgba(220, 222, 243, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
      }}>
      <AddIdea />
    </Box>
  );
};

export default NewIdea;
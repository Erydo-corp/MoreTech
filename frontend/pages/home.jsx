import React from "react";
import {Typography, Container} from '@mui/material';

const HomePages = ({children}) => {
  return (
    <>
      <Container maxWidth="xl" sx={{backgroundColor: '#161826'}}>
          {children}
      </Container>
    </>
  );
};

export default HomePages;
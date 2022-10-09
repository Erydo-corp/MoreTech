import React from "react";
import {Typography} from "@mui/material";
import Box from '@mui/material/Box';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export const Basket = () => {
  return (
    <Box sx={{
      padding: '24px',
      backgroundColor: '#252A41',
      display: 'flex',
      alignItems: 'center',
      columnGap: '16px',
      borderRadius: '12px'
    }}>
      <Box sx={{width: '40px', height: '40px', borderRadius: '12px', backgroundColor: '#4338CA', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <ShoppingBagOutlinedIcon />
      </Box>
      <Typography
      sx={{
        color: "#FFFFFF",
        fontSize: '16px'
      }}>
      Моя корзина</Typography>
    </Box>
  );
};
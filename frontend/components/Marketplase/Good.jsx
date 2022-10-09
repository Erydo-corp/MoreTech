import React from "react";
import { Box, Button } from "@mui/material";
import { Typography } from "@mui/material";

export const Good = ({goods}) => {
  return (
    <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
      {goods.map((good) => {
        return(
          <Box sx={{backgroundColor: '#252A41', borderRadius: '12px', padding: '24px'}}>
            <Box className="good__image"></Box>
            <Typography sx={{color: '#FFFFFF', fontSize: '16px', paddingTop: '8px'}}>
              {good.name}
            </Typography>
            <Typography sx={{color: '#ABADC6', fontSize: '12px', paddingTop: '4px', paddingBottom: '16px', fontWeight: '400'}}>
              {good.description}
            </Typography>
            <Box sx={{display: 'flex', columnGap: '16px', alignItems: 'center'}}>
              <Typography sx={{color: '#FFFFFF', fontSize: '12px', fontWeight: '400'}}>
                {good.price}
              </Typography>
              <Button className="good__btn" sx={{backgroundColor: '#4338CA'}}>Купить</Button>
            </Box>          
            
          </Box>
        );
      })}
    </Box>
   
  );
};
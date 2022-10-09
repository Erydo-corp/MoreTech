import React from "react";
import {Typography} from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = ['Все', 'Мерч', 'Курсы', 'Сертификаты'];

const BlockSearch = () => {
  return(
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 9" sx={{
          padding: "36px 5px"
        }}>

        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography 
            sx={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#FFFFFF'
            }}>            
              Товары
            </Typography>
        
          <ButtonGroup>
            {buttons.map((btn) => {
              return <Button key={btn} className="shop__btn" sx={{
                  border: 'none',
                  color: '#ABADC6',
                  fontSise: '14px',
                  textTransform: 'capitalize'
              }}>{btn}</Button>
            })}
        </ButtonGroup>            
        </Box>
        </Box>
      </Box>
  );
};

export default BlockSearch;
import React from "react";
import CountFinance from "../main/CountFinance";
import {Typography} from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  height: '276px',
  borderRadius: '12px',
}));

const BlockSales = () => {
  return(
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box sx={{position: 'relative'}} gridColumn="span 9">
          <Item sx={{paddingTop: '40px', paddingLeft: '42px', backgroundColor: '#701A75'}}>
            <div className="shop__coloring"></div>
            <Typography 
            sx={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#FFFFFF'
            }}>            
              Скидки до 90%
            </Typography>
            <Typography
            sx={{
              fontSize: '14px',
              fontWeight: '400',
              color: '#FFFFFF'
            }}>
              Скидки в обмен на бонусы
            </Typography>
          </Item>
        </Box>
        <Box gridColumn="span 3">
          <Item sx={{backgroundColor: '#252A41'}}>
            <Typography sx={{
              color: '#FFFFFF',
              fontWeight: '700',
              fontSize: '20px',
              padding: '24px'
            }}>
              Мои финансы
            </Typography>
            <Box ml={3}>
              <CountFinance />
            </Box>            
          </Item>
        </Box>
      </Box>
  );
};

export default BlockSales;
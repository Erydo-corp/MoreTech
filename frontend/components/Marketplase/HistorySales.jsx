import React from "react";
import {Typography} from "@mui/material";
import Box from '@mui/material/Box';
import {List} from "@mui/material";
import {ListItem} from "@mui/material";

const historySales = [
  {id: 1, category: "Обучающие курсы", data: new Date().toLocaleDateString()},
  {id: 2, category: "Подарок коллеге", data: new Date().toLocaleDateString()},
  {id: 3, category: "Толстовка", data: new Date().toLocaleDateString()}
];

export const HistorySales = () => {
  return (
    <Box sx={{
          padding: '16px 24px',
          backgroundColor: '#252A41',
          borderRadius: '12px',
          marginTop: '16px'
          }}>
      <Typography
        sx={{
          color: "#FFFFFF",
          fontSize: '18px',
          paddingBottom: '16px'
        }}>
        История покупок</Typography>

      <List>
        {historySales.map((pay) => {
          return <ListItem className="history__sales" key={pay.id} sx={{display: 'flex', columnGap: '16px', justifyContent: 'start', paddingLeft: '0'}}>

          <Box
            sx={{
              width: '40px',
              height: '40px',
              backgroundColor: '#424867',
              borderRadius: '12px',
            }}
          ></Box>
          <Box>
            <Typography sx={{fontSize: '14px', color: '#FFFFFF'}}>{pay.category}</Typography>  
            <Typography sx={{fontSize: '12px', color: '#ABADC6'}}>{pay.data}</Typography> 
          </Box>
        </ListItem>
        })}
      </List>  

    </Box>
  );
};
import React from "react";
import {Typography, List, ListItem, Box} from "@mui/material";

const wallet = [{"typeMoney": "NFT-сертификаты", "count": 30, "id": 1}, {"typeMoney": "Монеты", "count": 20, "id": 2}];

const CountFinance = () => {

//Списком выводим финансы по типам 
  return (
    <>
      <List sx={{
        padding: 0,
        width: '100%',
        }}>
        {wallet.map((el) => {
          return <ListItem className="my__fnance" key={el.id} 
            sx={{
              display: 'flex',
              alignItems: 'center',
              columnGap: '16px',
              }}>
          <Box
            sx={{
              width: 44,
              height: 44,
              backgroundColor: '#424867',
              borderRadius: 2
            }}
          ></Box>
            <Box>
              <Typography sx={{
                fontSize: 12,
                color: '#ABADC6',
                textAlign: 'left',
              }}>{el.typeMoney}</Typography>
              {el.typeMoney == "Монеты"? <Typography sx={{
                fontSize: 30,
                fontWeight: 700,
                color: '#FFFFFF'
              }}>{el.count} шт</Typography>: <Typography sx={{
                fontSize: 30,
                fontWeight: 700,
                color: '#FFFFFF'
              }}>${el.count}</Typography>}
            </Box>
          </ListItem>
        })}
      </List>
    </>
  );
};

export default CountFinance;
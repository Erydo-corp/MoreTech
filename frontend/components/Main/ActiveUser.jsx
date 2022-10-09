import React, {useContext} from "react";
import {Card, CardHeader, CardContent, Button, Typography} from "@mui/material";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import { ListUser } from "./ListUser";
import UserService from "../../service/UserService";
import {Context} from "../../pages/_app";

export const ActiveUser = () => {

  return (
    <>
      <Card sx={{ minWidth: 300,
        padding: '24px',
        borderRadius: '12px',
        backgroundColor: '#252A41',
        color: '#FFFFFF', }}>
        <CardHeader sx={{padding: '0 0 36px 0',
        }} title={"Активные пользователи"} 
          subheader="Все"
          subheaderTypographyProps={{                
                fontSize: 14,
                color: '#818CF8',
                position: 'relative',
                top: -27,
                align: 'right'
              }}
        />
        <CardContent sx={{padding: 0}}>
          <Box
            sx={{
              paddingBottom: '20px',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          ><Typography
          sx={{
            fontSize: 14,
            color: '#ABADC6',
          }}
          >
            Работник</Typography>
            <Typography
              sx={{
              fontSize: 14,
              color: '#ABADC6',
              }}
            >Доход</Typography></Box>
            <ListUser/>
        </CardContent>
      </Card>
    </>
  );
};
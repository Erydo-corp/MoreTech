import React from "react";
import {Card, CardHeader, CardContent, CardActions, Button, Typography} from "@mui/material";
import CachedIcon from '@mui/icons-material/Cached';
import CountFinance from "./CountFinance";

export const MyFinance = () => {
  return (
    <>
      <Card sx={{ 
        minWidth: 300,
        padding: '24px',
        borderRadius: '12px',
        backgroundColor: '#252A41',
        color: '#FFFFFF',
        }}>
        <CardHeader title={"Мои финансы"} sx={{padding: 0}}/>
        <CardContent sx={{padding: '40px 0 0 0'}}>
          <CountFinance />       
        </CardContent>
        <CardActions sx={{padding: '40px 0 0 0'}}>
          <Button
            variant="contained"
            startIcon={<CachedIcon />}
            sx={{
              width: '100%',
              borderRadius: '12px',
              paddingTop: '18px',
              paddingBottom: '18px',
              backgroundColor: '#4338CA',}}
          >
          Обменять на рубли</Button>
        </CardActions>
      </Card>
    </>
  )
};
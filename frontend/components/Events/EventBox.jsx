import React from "react";
import Box from '@mui/material/Box';
import {Button, Typography} from "@mui/material";
import {Grid} from "@mui/material";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';

const events = [
  {id: 1, title: "Курсы менеджеров", text: "Какое-то описание событияКакое-то описание события", data: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString(), money: '$12,202', coin: 22},
  {id: 2, title: "Курсы менеджеров", text: "Какое-то описание событияКакое-то описание события", data: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString(), money: '$12,202', coin: 22},
  {id: 3, title: "Курсы менеджеров", text: "Какое-то описание событияКакое-то описание события", data: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString(), money: '$12,202', coin: 22},
  {id: 4, title: "Курсы менеджеров", text: "Какое-то описание событияКакое-то описание события", data: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString(), money: '$12,202', coin: 22},
  {id: 5, title: "Курсы менеджеров", text: "Какое-то описание событияКакое-то описание события", data: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString(), money: '$12,202', coin: 22},
  {id: 6, title: "Курсы менеджеров", text: "Какое-то описание событияКакое-то описание события", data: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString(), money: '$12,202', coin: 22},
  {id: 7, title: "Курсы менеджеров", text: "Какое-то описание событияКакое-то описание события", data: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString(), money: '$12,202', coin: 22},
  {id: 8, title: "Курсы менеджеров", text: "Какое-то описание событияКакое-то описание события", data: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString(), money: '$12,202', coin: 22},
  {id: 9, title: "Курсы менеджеров", text: "Какое-то описание событияКакое-то описание события", data: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString(), money: '$12,202', coin: 22},
  {id: 10, title: "Курсы менеджеров", text: "Какое-то описание событияКакое-то описание события", data: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString(), money: '$12,202', coin: 22},
]

//Компонент, который выводит все идеи на странице События

const EventBox = () => {
  return(
  <Box sx={{ width: 1 }} display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
    {events.map((event) => (
      <Box sx={{
        backgroundColor: '#252A41',
        borderRadius: '12px',
        padding: '24px',
        color: '#FFFFFF',
      }}>
        {/* Вывод начала мероприятия */}
        <Box pb={2} sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Box>
            <Typography sx={{fontSize: '12px'}}>
              {event.data}
            </Typography>
          </Box>
          <Box>
          <Typography sx={{fontSize: '12px'}}>
              {event.time}
            </Typography>
          </Box>
        </Box> 

         {/*Вывод информации по курсам  */}
         <Typography pb={1}
              variant="h6"
              component="h2"
              color='#FFFFFF'>
            {event.title}
          </Typography>
          <Typography pb={2} sx={{fontSize: '14px', color: '#ABADC6'}}>
            {event.text}
          </Typography>

          <Typography pb={1} sx={{fontSize: '12px', color: '#DCDEF3'}}>
            Можно заработать
          </Typography> 

           {/* Сколько можно заработать */}
           <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{display: 'flex', columnGap: 3}}>
              <Box sx={{display: 'flex', columnGap: 1}}>
                <Box className="event__icon" sx={{backgroundColor: '#059669'}}><CurrencyExchangeIcon sx={{ fontSize: 15, paddingLeft: '3px' }}/></Box>
                <Typography pb={1} sx={{fontSize: '12px', color: '#DCDEF3'}}>
                  {event.money}
                </Typography>
              </Box>

              <Box sx={{display: 'flex', columnGap: 1}}>
                <Box className="event__icon" sx={{backgroundColor: '#7C3AED'}}><SummarizeOutlinedIcon sx={{ fontSize: 15, paddingLeft: '3px' }}/></Box>
                <Typography pb={1} sx={{fontSize: '12px', color: '#DCDEF3'}}>
                  {event.coin}
                </Typography>
              </Box>
            </Box>
            
            <Button sx={{
                          padding: '12px 16px',
                          background: "#4338CA",
                          color: "white",
                          fontSize: 10,
                          borderRadius: 2,
                          "&:hover": {
                              background: "#4338CA"
                              }
                          }}>
                          Пойду
            </Button>
           </Box>
      </Box>
    ))}
  </Box>
  );
};

export default EventBox;
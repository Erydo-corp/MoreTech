import React, {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Good } from "./Good";
import { Basket } from "./Basket";
import { HistorySales } from "./HistorySales";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  height: 'auto',
  borderRadius: '12px',
}));

const goodss = [
  { title: "Кепка","description": "Описание товара", "price": "12$", "category": "мерч", "id": "1"},
  { title: "Курсы менеджеров", "description": "Описание товара", "price": "20$", "category": "курсы", "id": "2"},
  { title: "Футболка", "description": "Описание товара", "price": "12$", "category": "мерч", "id": "3" },
  { title: "Книга", "description": "Описание товара", "price": "20$", "category": "сертификаты", "id": "4" },
  { title: "Толстовка", "description": "Описание товара", "price": "20$", "category": "курсы", "id": "5" },
  { title: "Курсы менеджеров", "description": "Описание товара", "price": "20$", "category": "сертификаты", "id": "6" }
];

export const BlockGoods = () => {
  const [goods, setGoods] = useState([])
  const [load, setLoad] = useState(false)

  useEffect(()=>{
    const goodsServ = async () =>{
      setLoad(true)
      const res = await axios(
          "https://2745-79-172-96-106.eu.ngrok.io/api/v1/shop/products/"
      )
      setGoods(res.data)
      setLoad(false)
    }
    goodsServ()
  }, [])

  return (
    <>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box sx={{position: 'relative'}} gridColumn="span 9">
          <Good goods={goods}/>          
        </Box>

        <Box gridColumn="span 3">
          <Basket />
          <HistorySales />
        </Box>
      </Box>
    </>
  );
};
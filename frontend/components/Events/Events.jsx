import React, {useEffect, useState} from "react";
import { Card } from "@mui/material";
import { CardHeader } from "@mui/material"; 
import { CardContent } from "@mui/material";
import EventDiscription from "./EventDiscription";
import Link from "next/link";
import {useRouter} from "next/router";
import axios from "axios";

export default function Events() {
    const event = useRouter()
    const [eventList, setEventList] = useState([])
    const [load, setLoad] = useState(false)
  const list = [
      {id: 1, title: "Курсы менеджеров", discription: "Какое-то описание событияКакое-то описание события"},
      {id: 1, title: "Курсы менеджеров", discription: "Какое-то описание событияКакое-то описание события"},
  ]

    useEffect(()=>{
        const social = async ()=>{
            setLoad(true)
            const list = await axios("https://38cf-79-172-71-109.eu.ngrok.io/api/v1/social/post/")
            setEventList(list.data)
            setLoad(false)
        }
        social()
    },[])

  return (
      <Card sx={{ 
        minWidth: 300,
        padding: '24px',
        borderRadius: '12px',
        backgroundColor: '#252A41',
        color: '#FFFFFF',
        }}>
          <CardHeader sx={{padding: '0 0 32px 0'}} title={"Предстоящие события"} 
        subheader="Все"
        subheaderTypographyProps={{                
              fontSize: 14,
              color: '#818CF8',
              position: 'relative',
              top: -27,
              align: 'right',
            }}
                      onClick={()=>event.push("/event")}
      />
          <CardContent sx={{padding: 0,
              display: 'flex',
              overflow: 'hidden'
          }}>
            <EventDiscription list={eventList}/>
          </CardContent>
      </Card>
  );
}
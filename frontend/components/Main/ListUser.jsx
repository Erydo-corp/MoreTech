import React, {useContext, useEffect, useState} from "react";
import {List, ListItem, ListItemAvatar, Box, Typography} from "@mui/material";
import {Context} from "../../pages/_app";
import UserService from "../../service/UserService";
import axios from "axios";
import {useRouter} from "next/router";

const users = [
  {name: "Albert Flores", summa: "$12.202", lastSumma: "+12%", id: 1}, {name: "Theresa Webb", summa: "$10.582", lastSumma: "+9%", id: 2}, {name: "Floyd Miles", summa: "$8.954", lastSumma: "+5%", id: 3}, {name: "Annette Black", summa: "$6.719", lastSumma: "-2%", id: 4}
];

export const ListUser = () => {
    const [users, setUsers] = useState([])
    const [load, setLoad] = useState(false)
    const router = useRouter()

   useEffect(()=>{
       const usersList = async () => {
           setLoad(true)
           const list = await axios("https://38cf-79-172-71-109.eu.ngrok.io/api/v1/account/users/")
           setUsers(list.data)
           setLoad(false)
           console.log(users)
       }
       usersList()
   },[])

    const profileUser = async (id) => {
        setLoad(true)
        const user = await axios("https://38cf-79-172-71-109.eu.ngrok.io/api/v1/account/user/"+id)
        setLoad(false)
        return user.data
    }

  return (
      <>
          {users && users.map(item=>(
              <List sx={{width: '100%'}}  key={item.id} onClick={()=>{
                  router.push(profileUser(item.id))
              }}>
              <ListItem className="finance__list_user" sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
              }}>
                  <Box
                      sx={{
                          width: 44,
                          height: 44,
                          backgroundColor: '#424867',
                          borderRadius: 50
                      }}
                  ></Box>
                  <Box >
                      <Typography sx={{
                          fontSize: 12,
                          color: '#ABADC6'
                      }}>{item.first_name}</Typography><Typography sx={{
                              fontSize: 12,
                              color: '#22C55E',
                              textAlign: 'center',
                          }}>{users.last_name}</Typography>
                      <Typography sx={{
                              fontSize: 12,
                              color: '#EF4444',
                              textAlign: 'center',
                          }}>{users.lastSumma}</Typography>
                  </Box>

                  <Typography sx={{
                      fontSize: 16,
                      alignSelf: 'center'
                  }}>{users.summa}</Typography>
              </ListItem>
          </List>))}
      </>
  );
}

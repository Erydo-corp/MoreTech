import React, {useEffect, useState} from "react";
import { Container, Typography} from "@mui/material";
import Box from '@mui/material/Box';
import { FormControl, Input, InputLabel, FormHelperText, TextField} from '@mui/material';
import {Button} from "@mui/material";
import AuthSevice from "../../service/AuthSevice";

const LogIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const getUsername = (e) => {
      setUsername(e.target.value)
    }
    const getPassword = (e) => {
      setPassword(e.target.value)
    }

  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
       <Box className="autho__image" gridColumn="span 4" sx={{
        height: '100vh',
       }}>
       </Box>
       <Box gridColumn="span 8" sx={{padding: '10% 5%'}}>
               <FormControl sx={{padding: '10% 5%', width: '90%'}} onSubmit={AuthSevice.login}>
                   <Typography
                       variant="h6"
                       component="h2"
                       color='#FFFFFF'
                       fontSize={30}
                       fontWeight={700}
                       paddingBottom={3}
                   >
                       Вход
                   </Typography>
                   <Box
                       paddingBottom={3}>
                       <Typography
                           variant="h6"
                           component="p"
                           color='#FFFFFF'
                           fontSize={14}
                           fontWeight={600}
                           paddingBottom={1}
                       >
                           Введите Логин
                       </Typography>

                       <TextField placeholder="Введите Email"
                                  onChange={getUsername}
                                  value={username}
                                  sx={{width: '100%'}}/>
                   </Box>

                   <Box pb={3}>
                       <Typography
                           variant="h6"
                           component="p"
                           color='#FFFFFF'
                           fontSize={14}
                           fontWeight={600}
                           paddingBottom={1}
                       >
                           Введите пароль
                       </Typography>

                       <TextField placeholder="Введите пароль"
                                  value={password}
                                  onChange={getPassword}
                                  sx={{width: '100%'}}
                       />
                   </Box>
                   <Button type={"submit"}
                           variant="contained"
                           sx={{
                               width: '100%',
                               borderRadius: '12px',
                               paddingTop: '18px',
                               paddingBottom: '18px',
                               backgroundColor: '#4338CA',}}
                        onClick={()=>AuthSevice.login(username, password)}
                   >
                       Войти</Button>
               </FormControl>
       </Box>
    </Box>
  );
};

export default LogIn;




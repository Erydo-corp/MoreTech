import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import {ListItem} from '@mui/material';
const working = [
 {id: 1, title: '10 вещей, которые нельзя делать на сайтах в 2022 году', data: new Date().toLocaleTimeString(), time: new Date().toLocaleTimeString(), style: 'icon__working'},
 {id: 2, title: 'Инвестировать экологично — это как?', data: new Date().toLocaleTimeString(), time: new Date().toLocaleTimeString(), style: 'icon__working'},
 {id: 3, title: 'Как сэкономить во время жизни в Турции', data: new Date().toLocaleTimeString(), time: new Date().toLocaleTimeString(), style: 'icon__working'},
];
 
const CreativeWorking = () => {
  return (
    <Box gridColumn="span 3"
    sx={{
        backgroundColor: '#252A41',
        padding: '14px 14px',
        borderRadius: '12px',
      }}>

        <List>
          {working.map((work) => (
            <ListItemButton key={work.id}
              sx={{padding: '0'}}> 
              
              <ListItem
                sx={{
                  cursor: 'pointer',
                  borderRadius: '12px',
                  marginBottom: "20px"
                  }}>
                  <Box sx={{
                    display: 'flex',
                    columnGap: 2,
                    
                  }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        backgroundColor: '#424867', 
                      }}
                    ><Box className='working__icon'></Box></Box>
                    <Box>
                      <Typography>
                        {work.title}
                      </Typography>

                      <Typography sx={{
                        fontSize: '12px',
                        color: '#ABADC6',
                      }}>
                        Файл редактировался {work.data} {work.time}    
                      </Typography>
                    </Box>
                  </Box>
              </ListItem>    
            </ListItemButton>

          ))}
        </List>
        {/* </Box> */}
       
    </Box>
  );
};

export default CreativeWorking;
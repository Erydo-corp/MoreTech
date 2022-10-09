import React from 'react';
import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import { AddPublication } from '../Modal/AddPublication';
import NewPublication from '../Modal/NewPublication';

const eventHistory = [
 {id: 1, event: 'Недавние', style: 'recent'},
 {id: 2, event: 'Отмеченные', style: 'marked'},
 {id: 3, event: 'Черновики', style: 'drafts'},
];
 
const UserHistory = () => {

  const [modalActive, setModalActive] = useState(false);

  return (
    <Box gridColumn="span 3">
      <Box
      sx={{
          backgroundColor: '#252A41',
          padding: '2px',
          borderRadius: '12px',
          background: 'linear-gradient(to right, #F158C0, #6E49F5)'
        }}>
        
        <Box sx={{
          backgroundColor: '#252A41',
          borderRadius: '12px',
          padding: '22px'
        }}>
          <Typography
            variant="h6"
            component="h2"
            color='#FFFFFF'
            pb={3}
          >
          Иван Петров
          </Typography> 

          <Box pb={3} sx={{display: 'flex', columnGap: 2, alignItems: 'center'}}>
            <Avatar sx={{
              width: '100px',
              height: '100px',
            }}>A</Avatar>

            <Box>
              <Box
                sx={{
                  fontSize: '16px'
                }}>
                ivan.petrov@yandex.ru</Box>
              <Box
                  sx={{
                    fontSize: '14px',
                    color: '#ABADC6'
                  }}
                >
                Moskow</Box>
            </Box>
          </Box>

          <List>
            {eventHistory.map((event) => (
              <ListItemButton key={event.id}
                sx={{padding: '8px 0'}}
              >
                <ListItemText primary={event.event} className={event.style}
                  sx={{
                    fontSize: '16px', 
                    display: 'flex', 
                    columnGap: 2,
                    cursor: 'pointer',
                    backgroundColor: '#303650',
                    padding: '12px 19px',
                    borderRadius: '12px'
                    
                    }}/>
              </ListItemButton>

            ))}
          </List>
          
          <Button onClick={() => setModalActive(true)} className='button__design'
                variant="contained"
                startIcon={<AddIcon />}
                sx={{
                  width: '100%',
                  borderRadius: '12px',
                  paddingTop: '18px',
                  paddingBottom: '18px',
                  backgroundColor: '#4338CA',
                  }}
              >
              Добавить публикацию</Button>  
          </Box>
      </Box>

      {/* модальное окно */}
      <NewPublication active={modalActive} setActive={setModalActive}/>

    </Box>
  );
};

export default UserHistory;
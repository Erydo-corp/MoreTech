// Create section Header for application
import {AppBar, List, ListItem, ListItemText, ListItemButton, Container, Toolbar, Typography} from '@mui/material';
import React, {memo} from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import Avatar from '@mui/material/Avatar';
import {InputBase, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// массив с хранением названия и ссылки на страницу
const menuItems = [
    {nameLink: "Главная", path: '/'},
    {nameLink: "Маркетплейс", path: '/shop'},
    {nameLink: "Банк идей", path: '/idea'},
    {nameLink: "События", path: '/event'}, 
    {nameLink: "Творческая среда", path: '/creative'},
  ];

const Header = ({children}) => {
   return(
    <>
    <Box>
      
        <AppBar position='static'
        sx={{display: 'flex', justifyContent: 'space-between', backgroundColor: '#1E2235'}}>
          <Container maxWidth='xl' sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              columnGap: '15px'
            }}>
              <MenuIcon />
              <img src='../assets/image/svg/logo.svg' alt='logo'/>
            </Box>
            
            <Toolbar disableGutters>
              <List sx={{display: 'flex', columnGap: 2}}>
                {menuItems.map((list) => {
                  return <Link href={list.path}><ListItem
                            sx={{whiteSpace: 'nowrap', fontSize: '18px', fontWeight: 600, color: '#ABADC6'}}
                            button
                            key={list.nameLink}
                            >
                    <ListItemText primary={list.nameLink}/>
                    </ListItem></Link>})}
              </List>
            </Toolbar>

            <Box component="form"
              sx={{
                '& .MuiTextField-root': { m: 2, width: '271px' },
                display: 'flex',
                alignItems: 'center',
                columnGap: '30px'
              }}
              noValidate
              autoComplete="off"
              >
                <Box sx={{display: 'flex'}}>
                  <InputBase
                    sx={{ ml: 1, flex: 1, backgroundColor: '#252A41',
                          borderRadius: '12px',
                          padding: '1px 18px', 
                          color: '#DCDEF3',
                          fontSize: '14px'
                      }}
                    placeholder="Поиск"
                    inputProps={{ 'aria-label': 'поиск' }}
                  />
                  <IconButton type="button" sx={{ 
                      p: '10px',
                      position: 'relative',
                      left: '-45px' 
                    }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Box>
                {/* <TextField id="outlined-search" label="Поиск" type="search" /> */}
                
                <NotificationsNoneIcon sx={{cursor: 'pointer'}}/>
                <NightlightOutlinedIcon sx={{cursor: 'pointer'}}/>
                <GridViewOutlinedIcon sx={{cursor: 'pointer'}}/>
                <Avatar><Link href="/1">A</Link></Avatar>
              </Box>
          </Container>
        </AppBar>
      
      </Box>
      {children}
    </>    
  );
}

export default  memo(Header);
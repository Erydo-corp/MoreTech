import React from "react";
import {Typography} from "@mui/material";
import HomePages from "./home";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddIcon from '@mui/icons-material/Add';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import EventBox from "../components/Events/EventBox";
import { GroupBtnBankIdea } from "../components/BankIdea/GroupBtnBankIdea";


const PagesBankIdea = () => {

  return (
    <HomePages>
      <Box pt={3} pl={7} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Typography
              variant="h6"
              component="h2"
              color='#FFFFFF'
            >
            События
          </Typography>
        <Box sx={{display: 'flex', alignItems: 'center', columnGap: '16px'}}>
          <FormControlLabel
            value="go"
            control={<Switch color="primary" />}
            label="Я иду"
            labelPlacement="go"
          />
        </Box>
      </Box>
      
      <Box sx={{ width: 1, paddingTop: '34px', paddingBottom: '30px' }}>
        
        {/* Вывод всех сoбытий */}
        <EventBox />
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center', paddingBottom: 5}}>

        {/* Кнопки для перелистывания coбытий*/}
        <GroupBtnBankIdea />
      </Box>
    </HomePages>    
  );
};

export default PagesBankIdea;
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
import IdeaBox from "../components/BankIdea/IdeaBox";
import { GroupBtnBankIdea } from "../components/BankIdea/GroupBtnBankIdea";


const PagesBankIdea = () => {

  const [population, setPopulation] = React.useState('');

  const handleChange = (event) => {
    setPopulation(event.target.value);
  };

  return (
    <HomePages>
      <Box pt={3} pl={7} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Typography
              variant="h6"
              component="h2"
              color='#FFFFFF'
            >
            Банк идей
          </Typography>
        <Box sx={{display: 'flex', alignItems: 'center', columnGap: '16px'}}>
          <FormControl sx={{ m: 1, minWidth: 170, fontSize: '12px' }}>
            <InputLabel id="demo-select-small">Популярные</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={population}
              label="Популярные"
              onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Популярные</MenuItem>
            </Select>
          </FormControl>
          <Button sx={{backgroundColor: '#4338CA', padding: '12px 16px', borderRadius: '12px'}}
            variant="contained"
            startIcon={<AddIcon />}
          >
          Добавить идею</Button>
        </Box>
      </Box>
      
      <Box sx={{ width: 1, paddingTop: '34px', paddingBottom: '30px' }}>
        
        {/* Вывод всех идей */}
        <IdeaBox />
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center', paddingBottom: 5}}>

        {/* Кнопки для перелистывания идей*/}
        <GroupBtnBankIdea />
      </Box>
    </HomePages>    
  );
};

export default PagesBankIdea;
import React from "react";
import {Typography} from "@mui/material";
import HomePages from "./home";
import Box from '@mui/material/Box';
import UserHistory from "../components/Creative/UserHistory";
import CreativeWorking from "../components/Creative/CreativeWorking";
import LastPublications from "../components/Creative/LastPublications";

const Creative = () => {

  return (
    <HomePages>
      <Box pt={3} pb={3} pl={7} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Typography
              variant="h6"
              component="h2"
              color='#FFFFFF'
            >
            Творческая среда
          </Typography>  
      </Box>


      <Box sx={{ width: 1 }}>
        <Box display="grid" gridTemplateColumns="repeat(9, 1fr)" gap={2}>
          <UserHistory />


          <Box gridColumn="span 6">
            
            <Typography pb={2}>
              Продолжите работу с того места, где закончили
            </Typography>

            <CreativeWorking />

            <LastPublications />
            
          </Box>      
        </Box>
      </Box>
    </HomePages>    
  );
};
export default Creative;
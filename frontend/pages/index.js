import React from "react"
import HomePages from "./home";
import Grid from "@mui/material/Grid";
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { MyFinance } from "../components/Main/MyFinance";
import { ActiveUser } from "../components/Main/ActiveUser";
import Events from "../components/Events/Events";
import Bankidea from "../components/BankIdea/BankIdea";

export default function Home() {
  return (

    <HomePages>
          <Typography
              variant="h6"
              component="h2"
              color='#FFFFFF'
              pt={3}
              pl={7}
            >
            Главная
          </Typography>

          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} pt={'32px'} pb={'86px'}>
            <Box gridColumn="span 4">
              <MyFinance />
            </Box>
            <Box gridColumn="span 8">
              <Events />
            </Box>
            <Box gridColumn="span 4">
              <ActiveUser />
            </Box>
            <Box gridColumn="span 8">
              <Bankidea />
            </Box>
          </Box>

    </HomePages>    
  )
}

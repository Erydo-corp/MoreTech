import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import {Grid} from "@mui/material";
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';

const list = [
  {id: 1, title: "Самая лучшая инновационная идея среди всех инновационных.", disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla arcu eleifend blandit urna arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla arcu eleifend blandit urna arcu."},
  {id: 2, title: "Самая лучшая инновационная идея среди всех инновационных.", disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla arcu eleifend blandit urna arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla arcu eleifend blandit urna arcu."},
];
 
const LastPublications = () => {
  return (
    <Box gridColumn="span 3" mt={2}
    sx={{
        backgroundColor: '#252A41',
        padding: '24px 24px',
        borderRadius: '12px',
      }}>

      <Typography pb={2}
        variant="h6"
        component="h2"
        color='#FFFFFF'
      >
        Последние публикации
      </Typography>  

      <Box>{
      list.map((item) => {
       return (
       <Box my={2} sx={{
         backgroundColor: '#252A41',
         border: '1px solid #424867',
         borderRadius: '12px',
         padding: '24px',
         }}>
        
         <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
           <Box sx={{display: 'flex', columnGap: 1}}>
               <Avatar/>
               <Box>
                   <Typography color="white">
                       Мария Петрова
                   </Typography>
                   <Typography sx={{
                    color: '#ABADC6',
                    fontSize: '12px',
                   }}>
                       2 часа назад
                   </Typography>
               </Box>
           </Box>
       </Box>
       <Grid container sx={{marginBotton: '16px', marginTop: '16px'}}>
         <Grid>
             <Typography color="white" sx={{
                 fontSize: 20,
                 fontWeight: 600,
                 lineHeight: '28px'
             }}>
                 {item.title}
             </Typography>
         </Grid>
         <Grid xs={10} sx={{marginTop: '10px'}}>
             <Typography color="#ABADC6" sx={{
              lineHeight: '24px'
             }}>
                 {item.disc}
             </Typography>
         </Grid>
       </Grid>
      <Grid mt={2} sx={{display: 'flex', justifyContent: 'space-between'}}>
         <Box sx={{
          display: 'flex',
          alignItems: 'center',
          columnGap: 2,
         }}>
          <SpeakerNotesIcon/>
          <Typography color="white">
             69
            </Typography>
         </Box>
         <Box className='last__publication__icon'></Box>
       </Grid>
     </Box>
     );
   })
   }
  </Box>
 
  </Box>
  );
};

export default LastPublications;

// <Grid xs={2}>
//                  <Typography color="white">
//                      <SpeakerNotesIcon sx={{
//                       marginRight: '16px',
//                       marginTop: '20px', 
//                      }}/>
//                      69
//                  </Typography>
//              </Grid>
             
//              <Grid xs={2}>
//                  <Typography color="white">
//                      Поделиться
//                  </Typography>
//              </Grid>


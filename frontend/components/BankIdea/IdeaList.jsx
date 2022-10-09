import React from 'react';
import Grid from "@mui/material/Grid";
import {Avatar, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';


export default function IdeaList({list}){
    return(
        <>
        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
        {list.map(item=>(
            <Box key={item.id} sx={{
                border:'1px solid #424867',
                borderRadius: 3,
                width: '600px',
                padding: '26px',
            }}>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Box sx={{display: 'flex', columnGap: 1}}>
                        <Avatar/>
                        <Box>
                            <Typography color="white">
                                Мария Петрова
                            </Typography>
                            <Typography color="white">
                                Менеджер
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', columnGap: 1}}>
                        <Typography sx={{padding: '4px 8px', marginTop: '11px', backgroundColor: '#A5F3FC', color: '#0891B2', borderRadius: '15px', fontWeight: 600}}>
                            Обучение
                        </Typography>
                        <Typography sx={{padding: '4px 8px', marginTop: '11px', backgroundColor: '#FBCFE8', color: '#DB2777', borderRadius: '15px', fontWeight: 600}}>
                                Тимбилдинг
                        </Typography>
                    </Box>
                </Box>
                
                <Grid container sx={{marginBotton: '16px', marginTop: '16px'}}>
                    <Grid>
                        <Typography color="white" sx={{
                            fontSize: 20,
                        }}>
                            {item.title}
                        </Typography>
                    </Grid>
                    <Grid xs={10} sx={{marginTop: '10px'}}>
                        <Typography color="#ABADC6">
                            {item.disc}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid ml={1}>
                    <Grid container mb={2} mt={3}>
                        <Grid xs={2}>
                            <Typography color="white">
                                <ThumbUpOffAltIcon sx={{
                                    marginRight: "12%",
                                    borderRadius: 20,
                                    background: "rgba(220, 222, 243, 0.5)",
                                    boxShadow: "0px 0px 0px 5px rgba(220, 222, 243, 0.5)",
                                    "&:hover":{
                                        background: "rgba(49, 255, 0, 1)",
                                        borderRadius: 20,
                                        boxShadow: "0px 0px 0px 5px rgba(49, 255, 0, 1)"
                                    }
                                }}/>
                                420
                            </Typography>
                        </Grid>
                        <Grid xs={8}>
                            <Typography color="white" >
                                <ThumbDownOffAltIcon sx={{
                                    marginRight: "3%",
                                    borderRadius: 20,
                                    background: "rgba(220, 222, 243, 0.5)",
                                    boxShadow: "0px 0px 0px 5px rgba(220, 222, 243, 0.5)",
                                    "&:hover":{
                                        background: "rgba(210, 0, 0, 1)",
                                        borderRadius: 20,
                                        boxShadow: "0px 0px 0px 5px rgba(210, 0, 0, 1)"
                                    }
                                }} />
                                69
                            </Typography>
                        </Grid>
                        <Grid xs={2}>
                            <Typography color="white">
                                Поделиться
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>))}
        </Box>
        </>
    );
}














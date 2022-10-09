import React from "react";
import {Container, ImageList, ImageListItem, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {Image} from "@mui/icons-material";
import BoxElements from "../../layouts/BoxElements";
import ImageListItemBar from '@mui/material/ImageListItemBar';

const imageData = [
    {
        src: '../../public/image/1.svg',
        alt: 'Меценат',
        id: 1,
    },
    {
        src: '../../public/image/2.svg',
        alt: 'Филантроп',
        id: 2,
    },
    {
        src: '../../public/image/3.svg',
        alt: 'Гуманист',
        id: 3,
    },
];

export default function AwardsUser(){
    return(
        <>
            <BoxElements>
                <Box sx={{padding: '24px 4px 40px'}}>
                    <Grid container color={"white"}>
                       <Grid container>
                           <Grid xs={10}>
                               <Typography pb={2} sx={{fontSize: '20px'}}>
                                   Достижения
                               </Typography>
                           </Grid>
                           <Grid xs={2}>
                               <Typography color={'#818CF8'}>
                                   Все
                               </Typography>
                           </Grid>
                       </Grid>
                    </Grid>
                    <Grid>
                    {/* <img src="../../public/image/1.svg" /> */}
                        <ImageList sx={{
                            display: 'flex',
                            fontSize: 12,
                            justifyContent: 'space-between',
                            height: '139px'
                            }}>
                            {
                                imageData.map((item) => (
                                    <ImageListItem key={item.id} sx={{
                                                backgroundColor: '#303650',
                                                borderRadius: '12px',
                                                padding: '16px',
                                                width: '120px',
                                                }}>
                                        <ImageListItemBar position="below" title={item.alt} sx={{fontSize: 12, textAlign: 'center'}}/>
                                        
                                        <img src={`${item.src}`} />
                                        
                                    </ImageListItem>
                                ))
                            }
                        </ImageList>
                    </Grid>
                </Box>
            </BoxElements>
        </>
    )
}
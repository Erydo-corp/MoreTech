import React from "react";
import Box from "@mui/material/Box";
import {Button, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";

export default function EventDiscription({list}){
  return(
      <>
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
      {list.map((item) => 
          <Box key={item.id} sx={{
              border:'1px solid #424867',
              borderRadius: 3,
              width: '392px',
              padding: '26px',
              }}>
              <Grid container>
                  <Grid xs={9}>
                      <Typography sx={{
                          color: "white",
                          }}>
                          12.11.2020
                      </Typography>
                  </Grid>
                  <Grid xs={3}>
                      <Typography sx={{
                          color: "white",
                          textAlign: 'right',
                      }}>
                      11:00
                      </Typography>
                  </Grid>    
              </Grid>

              <Grid container>
                  <Grid mt={2}>
                      <Typography sx={{
                      color: "white",
                      fontSize: "20px"
                      }}>
                      Курсы менеджеров
                      </Typography>
                  </Grid>
                  <Grid xs={10} mt={1}>
                      <Typography sx={{
                      color: "#ABADC6",
                      }}>
                      Какое-то описание событияКакое-то описание события
                      </Typography>
                  </Grid>
              </Grid>

              <Grid container mt={2} sx={{display: 'flex', justifyContent: 'space-between'}}>
                  <Grid container xs={8}>
                      <Grid xs={12}>
                          <Typography sx={{
                          color: "#ABADC6",
                          }}>
                          Можно заработать
                          </Typography>
                      </Grid>
                      <Grid xs={5}>
                          <Typography sx={{
                          color: "white",
                          }}>
                          $12,202
                          </Typography>
                      </Grid>
                      <Grid>
                          <Typography sx={{
                          color: "white",
                          }}>
                          22
                          </Typography>
                      </Grid>
                  </Grid>
                  <Grid mt={1}>
                      <Button sx={{
                          padding: '12px 16px',
                          background: "#4338CA",
                          color: "white",
                          fontSize: 10,
                          borderRadius: 2,
                          "&:hover": {
                              background: "#4338CA"
                              }
                          }}>
                          Пойду
                      </Button>
                  </Grid>
              </Grid>   
          </Box> 
          )}
      </Box>    
      </>
  )
}
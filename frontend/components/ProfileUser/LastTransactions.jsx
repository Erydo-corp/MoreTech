import React from "react";
import {Container, Typography, Box} from "@mui/material";
import BoxElements from "../../layouts/BoxElements";
import Grid from "@mui/material/Grid";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { border, borderColor } from "@mui/system";

function createTable(name, transaction, data) {
    return { name, transaction, data };
}

const transactions = [
    createTable('Начисление NFT-сертификата', "+5 шт", new Date().toLocaleString()),
    createTable('Участие в конкурсе', "+$134", new Date().toLocaleString()),
    createTable('Покупка мерча', "-$12.202", new Date().toLocaleString()),
    createTable('Лайки за идеюе', "+$3988", new Date().toLocaleString()),
    createTable('Начисление монет', "+$130", new Date().toLocaleString()),
    createTable('Начисление монет', "+$134", new Date().toLocaleString()),
  ];

export default function LastTransactions(){
    return(
        <>
            <Container sx={{
                    background: "#252A41",
                    borderRadius: 3}}>

                <Grid color={"white"} pt={2} pb={3}>
                    <Grid xs={11} sx={{fontSize: '20px'}}>Последние операции</Grid>
                </Grid>
                <Grid color={"white"}>
                       <TableContainer sx={{width: '100%', paddingBottom: 2}}>
                            <Table>
                                <TableBody>
                                        {
                                          transactions.map((item) => (
                                                <TableRow key={item.name}
                                                sx={{ border: 0 }}>
                      
                                                      <TableCell component="th" sx={{
                                                          color: '#FFFFFF', 
                                                          fontSize: 16, 
                                                          border: 'none',
                                                          padding: 1,
                                                          display: 'flex',
                                                          alignItems: 'center',
                                                          columnGap: 2
                                                      }}>
                                                        <Box sx={{
                                                            width: '44px',
                                                            height: '44px',
                                                            backgroundColor: '#424867',
                                                            borderRadius: '12px'
                                                        }}></Box>
                                                        <Box>
                                                            <Typography>{item.name}</Typography>
                                                            <Typography
                                                            sx={{
                                                            color: '#ABADC6', 
                                                            fontSize: 12,
                                                        }}
                                                            >{item.data}</Typography>
                                                        </Box>
                                                      </TableCell>
                                
                                                {/* вывод итого */}    
                                                    {item.transaction.includes('+') ?
                                                    <TableCell sx={{
                                                        color: '#10B981', 
                                                        fontSize: 12, 
                                                        border: 'none',
                                                        padding: 1,
                                                        textAlign: "right"
                                                    }}>{item.transaction}</TableCell>
                                                    : <TableCell sx={{
                                                        color: '#EF4444', 
                                                        fontSize: 12, 
                                                        border: 'none',
                                                        padding: 1,
                                                        textAlign: "right"
                                                    }}>{item.transaction}</TableCell>
                                                    }
                                               </TableRow>
                                            ))
                                        }
                                    </TableBody>
                            </Table>
                        </TableContainer>


                    <Grid>

                    </Grid>
                </Grid>
            </Container>
        </>

    )
}
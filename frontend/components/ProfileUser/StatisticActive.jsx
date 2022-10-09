import React from "react";
import {Container, Typography} from "@mui/material";
import BoxElements from "../../layouts/BoxElements";
import Grid from "@mui/material/Grid";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { border, borderColor } from "@mui/system";

function createTable(value1, value2) {
    return { value1, value2 };
}

const statistics = [
    createTable('Обучающие курсы', "+$15"),
    createTable('Тренинг личностьного роста', "+$1"),
    createTable('Обучающие курсы', "+$6"),
    createTable('Тренинг личностьного роста', "+$15"),
  ];

export default function StatisticActive(){
    return(
        <>
            <BoxElements >
                <Grid container color={"white"} pt={2}>
                    <Grid xs={11} sx={{fontSize: '20px'}}>Статистика активности</Grid>
                    <Grid xs={1}>Все</Grid>
                </Grid>
                <Grid container color={"white"}>
                        <Grid container mt={2} pb={3}>
                            <Grid mr={2} p={1} xs={5} sx={{
                                borderRadius: "12px",
                                background: "#303650"
                            }}>
                                <Typography color="#ABADC6" sx={{
                                    fontSize: 13
                                }}>
                                    Монеты
                                </Typography>
                                <Typography>$12,202</Typography>
                            </Grid>
                            <Grid ml={0.7} p={1} xs={6} sx={{
                                borderRadius: "12px",
                                background: "#303650"
                            }}>
                                <Typography color="#ABADC6" sx={{
                                    fontSize: 12
                                }}>
                                    NFT-сертификаты
                                </Typography>
                                <Typography >24.2%</Typography>
                            </Grid>
                        </Grid>

                        <TableContainer sx={{width: '100%', paddingBottom: 2}}>
                            <Table>
                                <TableHead>
                                    <TableCell align="left" sx={{color: '#ABADC6', fontSize: 12}}>За что начислено</TableCell>
                                    <TableCell align="right" sx={{color: '#ABADC6', fontSize: 12}}>Доход</TableCell>
                                </TableHead>
                                <TableBody>
                                        {
                                            statistics.map((item) => (
                                                <TableRow key={item.value1}
                                                sx={{ border: 0 }}>
                                                {/* вывод за что */}
                                                    <TableCell component="th" sx={{
                                                        color: '#FFFFFF', 
                                                        fontSize: 12, 
                                                        border: 'none',
                                                        padding: 1,
                                                    }}>{item.value1}</TableCell>
                                                {/* вывод итого */}    
                                                    <TableCell sx={{
                                                        color: '#10B981', 
                                                        fontSize: 12, 
                                                        border: 'none',
                                                        padding: 1,
                                                        textAlign: "right"
                                                    }}>{item.value2}</TableCell>
                                               </TableRow>
                                            ))
                                        }
                                    </TableBody>
                            </Table>
                        </TableContainer>
                    <Grid>
                    </Grid>
                </Grid>
            </BoxElements>
        </>
    )
}
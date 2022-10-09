import React, {useState} from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import {Button, Container, Typography} from "@mui/material";
import AwardModal from "../../components/Modal/AwardModal";

export default function Employees(){
    const [open,setOpen] = useState(false)

    const employees = [{id: 1, name: "David", email: "2adsdas"}]
    return(
        <Container  maxWidth="xl" sx={{
            background: "#323855",
            paddingBottom: "46px"
        }}>
            <AwardModal active={open} setActive={setOpen}/>
            <Grid container>
                <Box m={5} sx={{
                    background: "#252A41",
                    borderRadius: 3,
                    width: "100%",
                    paddingLeft: 5,
                    paddingRight: 5
                }}>
                    <TableContainer sx={{
                        width: '100%',
                        paddingBottom: 2,
                    height: "75vh"}}>
                        <Table>
                            <TableHead>
                                <TableCell align="left"
                                           sx={{color: '#ABADC6', fontSize: 12}}>
                                    ФИО
                                </TableCell>
                                <TableCell align="right"
                                           sx={{color: '#ABADC6', fontSize: 12}}>
                                    E-mail
                                </TableCell>
                                <TableCell align="right"
                                           sx={{color: '#ABADC6', fontSize: 12}}>
                                    Начисления
                                </TableCell>
                                <TableCell align="right"
                                           sx={{color: '#ABADC6', fontSize: 12}}>
                                    Действия
                                </TableCell>
                            </TableHead>
                            <TableBody>
                                {
                                    employees.map((item) => (
                                        <TableRow key={item.id}
                                                  sx={{ border: 0}}>
                                            {/* вывод за что */}
                                            <TableCell component="th" sx={{
                                                color: '#FFFFFF',
                                                fontSize: 12,
                                                border: 'none',
                                                padding: 1,
                                            }}>
                                                {item.name}
                                            </TableCell>
                                            {/* вывод итого */}
                                            <TableCell sx={{
                                                color: '#10B981',
                                                fontSize: 12,
                                                border: 'none',
                                                padding: 1,
                                                textAlign: "right"
                                            }}>
                                                {item.email}
                                            </TableCell>
                                            <TableCell sx={{
                                                color: '#10B981',
                                                fontSize: 12,
                                                border: 'none',
                                                padding: 1,
                                                textAlign: "right",
                                            }}>
                                                0
                                            </TableCell>
                                            <TableCell sx={{
                                                color: '#10B981',
                                                fontSize: 12,
                                                border: 'none',
                                                padding: 1,
                                                textAlign: "right"
                                            }}>
                                                <Button onClick={()=>setOpen(true)}>
                                                    +
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Grid>
        </Container>
    )
}
import React, {useEffect, useState} from "react"
import Box from "@mui/material/Box";
import {Avatar, Button, Container, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import BoxElements from "../../layouts/BoxElements";
import City from "./City";
import axios from "axios";

export default function ProfileUser(){
    const [users, setUsers] = useState("")
    const [load, setLoad] = useState(false)

    useEffect(()=>{
        const usersList = async () => {
            setLoad(true)
            const list = await axios(
                "https://38cf-79-172-71-109.eu.ngrok.io/api/v1/account/user/2/"
            )
            setUsers(list.data)
            setLoad(false)
        }
        usersList()
    },[])


    return(<>
            {users &&  <BoxElements>
                <Box>
                    <Grid container color={"white"} >
                        <Grid xs={12} ml={1} mt={2}>
                            <Typography variant={"h5"}>{users.first_name +
                                " " + users.last_name}</Typography>
                        </Grid>
                        <Grid container m={2}>
                            <Grid xs={1}>
                                <Avatar/>
                            </Grid>
                            <Grid ml={4}>
                                <Typography>{users.email}</Typography>
                                <City city={users.account} />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid xs={12} container>
                                <Grid mt={1} xs={3}>
                                    <LocalAtmIcon sx={{
                                        width: 50,
                                    }}/>
                                </Grid>
                                <Grid>
                                    <Typography color="#ABADC6" sx={{
                                        fontSize: 15
                                    }}>NFT-сертификаты</Typography>
                                    <Typography sx={{
                                        fontSize: 20
                                    }}>25 шт</Typography>
                                </Grid>
                            </Grid>
                            <Grid xs={12} container>
                                <Grid mt={2} xs={3}>
                                    <AddReactionIcon sx={{
                                        width: 50,
                                    }}/>
                                </Grid>
                                <Grid>
                                    <Typography color="#ABADC6" sx={{
                                        fontSize: 15
                                    }}>Монеты</Typography>
                                    <Typography sx={{
                                        fontSize: 20
                                    }}>12,202</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={12} mb={2} mt={2} container>
                            <Button sx={{
                                width: "100%",
                                borderRadius: "12px",
                                background: "#4338CA",
                                color: 'white',
                                "&:hover":{
                                    background: "#4338CA"
                                }
                            }}>
                                <Grid xs={2} mt={1}>
                                    <CompareArrowsIcon/>
                                </Grid>
                                <Grid>
                                    <Typography>Обменять рубли</Typography>
                                </Grid>
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </BoxElements>}
    </>
    )
}
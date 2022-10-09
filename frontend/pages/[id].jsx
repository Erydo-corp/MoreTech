import React, {useEffect, useState} from "react";
import {Button, Container, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import ProfileUser from "../components/ProfileUser/ProfileUser";
import AwardsUser from "../components/ProfileUser/AwardsUser";
import Calendar from "../components/ProfileUser/Calendar";
import StatisticActive from "../components/ProfileUser/StatisticActive";
import LastTransactions from "../components/ProfileUser/LastTransactions";
import GroupsIcon from '@mui/icons-material/Groups';
import BtnDirector from "../components/ProfileUser/director/btnDirector";

export default function User(){
    const load = true
    return(
        <>
            <Container maxWidth={"xl"} sx={{
                background: "#323855",
                paddingBottom: '46px'
            }}>
                <Grid container ml={3}>
                    <Grid xs={9} ml={2}>
                        <Typography variant={"h4"} mt={2} mb={2} color={"white"}>
                            Профиль
                        </Typography>
                    </Grid>
                    {load && <BtnDirector/>}
                    <Grid xs={3} ml={2}>
                        <ProfileUser/>
                    </Grid>
                    <Grid xs={4.5} ml={2}>
                        <AwardsUser/>
                    </Grid>
                    <Grid xs={3} ml={2}>
                        <Calendar/>
                    </Grid>
                    <Grid xs={3} ml={2} mt={2}>
                        <StatisticActive/>
                    </Grid>
                    <Grid xs={7.7} mt={-3.5} ml={2}>
                        <LastTransactions />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
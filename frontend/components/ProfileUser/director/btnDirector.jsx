import React from "react";
import {Button, Typography} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import Grid from "@mui/material/Grid";
import Link from "next/link";

export default function BtnDirector(){
    return(
        <Grid xs={2} ml={-1.5} mt={2}>
            <Button sx={{
                background: "linear-gradient(90deg, #F974EB, #9F7CE0)",
                color: "white"
            }}>
                <GroupsIcon/>
                <Link href={"personal/employees"}>
                    <Typography ml={1} sx={{
                        fontSize: 15
                    }}>
                        Мои подчиненные
                    </Typography>
                </Link>
            </Button>
        </Grid>
    )
}
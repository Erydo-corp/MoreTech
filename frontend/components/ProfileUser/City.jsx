import React from "react"
import {Typography} from "@mui/material";

export default function City({city}){
    return(
        <>
            <Typography color="#ABADC6" sx={{fontSize: 16}}>
                {city.city}
            </Typography>
        </>
    )
}
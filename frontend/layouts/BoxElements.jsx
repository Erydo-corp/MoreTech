import React  from "react";
import {Container} from "@mui/material";

export default function BoxElements({children, height, width}){
    return(
        <>
            <Container maxWidth={"sm"} sx={{
                background: "#252A41",
                borderRadius: 3,
                height: {height},
                width: {width}
            }}>
                {children}
            </Container>
        </>
    )
}
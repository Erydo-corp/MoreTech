import React, {useState} from "react";
import {FormControl, Modal, Select, Typography} from "@mui/material";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    borderRadius: 5,
    bgcolor: '#1E2235',
    border: '2px solid #000',
    p: 4,
};

const textStyle = {
    color: "white"
}

export default function AwardModal({active, setActive}){
    const close = () => {
      setActive(false)
    }

    return(
        <Modal
            open={active}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Grid container>
                    <Grid xs={12} mb={2}>
                        <Typography id="modal-modal-title" variant="h6" component="h2"
                                    sx={textStyle}>
                            Начислить вознаграждение
                        </Typography>
                    </Grid>
                    <Grid>
                        <Grid>
                            <Typography mb={1} sx={textStyle}>
                                Иван Петров
                            </Typography>
                            <Avatar/>
                        </Grid>
                        <Grid mt={2}>
                            <Typography sx={textStyle}>
                                Вид начисления
                            </Typography>
                            <FormControl fullWidth sx={{width: 300, mt: 2}}>
                                <InputLabel id="demo-simple-select-label" sx={{
                                    color:"white",
                                }}>
                                    Выбрать
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                   // value={age}
                                    label="Age"
                                    //onChange={handleChange}
                                    sx={{
                                        borderColor: "white",
                                        borderRadius: 3
                                    }}
                                >
                                    <MenuItem value={10}>NFT</MenuItem>
                                    <MenuItem value={20}>Монеты</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid>
                            <Typography mt={2} sx={textStyle}>Размер начисления</Typography>
                            <TextField label="Введите" variant="filled" sx={{
                                marginTop: 2,
                                fontSize: 35,
                                width: 300,
                            }}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}
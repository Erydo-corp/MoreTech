import React, {useState} from "react";
import {FormControl, Modal, Select, Typography} from "@mui/material";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import CloseIcon from '@mui/icons-material/Close';
import { fontSize } from "@mui/system";
import {Button} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    borderRadius: 5,
    bgcolor: '#1E2235',
    p: '24px',
};

const textStyle = {
    color: "white",
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
                <Box mb={3} sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2"
                            sx={textStyle}>
                            Начислить вознаграждение
                        </Typography>
                        <CloseIcon sx={{cursor: 'pointer'}}/>
                </Box>

                <Box>
                    <Box mb={3}>
                        <Typography mb={1} sx={{fontSize: '14px'}}>
                            Иван Петров
                        </Typography>
                        <Avatar>A</Avatar>
                    </Box>
                </Box>    

                <Box sx={{width: '100%',}}>
                    <Box mt={2}>
                        <Typography sx={{fontSize: '14px'}}>
                            Вид начисления
                        </Typography>

                        <FormControl fullWidth sx={{width: '100%', mt: 2}}>
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
                                    borderRadius: 3,
                                    marginBottom: 2,
                                    }}>
                                <MenuItem value={10}>NFT</MenuItem>
                                <MenuItem value={20}>Монеты</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <Box>
                    <Typography mt={2} sx={{fontSize: '14px'}}>Размер начисления</Typography>
                    <TextField label="Введите" variant="filled" sx={{
                        width: '100%',
                        marginTop: 2,
                        fontSize: 35,
                            "::placeholder":{
                                color: '#FFFFFF',
                            }
                        }}/>
                </Box>

                <Box mt={3} sx={{
                    display: 'flex',
                    columnGap: '16px',
                    justifyContent: 'flex-end',
                }}>
                    <Button sx={{
                        backgroundColor: '#424867',
                        color: '#FFFFFF', 
                        textTransform: 'capitalize',
                        padding: '12px 15px',
                        borderRadius: '12px'
                    }}>
                        Отменить
                    </Button>
                    <Button className='btn__style_medium' sx={{
                        color: '#FFFFFF',
                        textTransform: 'capitalize',
                        padding: '12px 15px',
                        borderRadius: '12px'
                    }}>
                        Начислить
                    </Button>
                </Box>
            </Box>
            
        </Modal>
    )
}
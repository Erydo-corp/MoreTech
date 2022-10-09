import React, { useState } from 'react';
import { Box } from '@mui/material';
import {Card, CardHeader, CardContent, CardActions, Button, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {FormControl} from '@mui/material';
import {TextField} from '@mui/material';
import { TextareaAutosize } from '@mui/base';
import AddIcon from '@mui/icons-material/Add';


export const ExchangeRub = () => {
  // состояние, перенесен файл или нет для загрузки
  const [file, setFile] = useState(false);

  return (
    <Card sx={{
      width: '70%',
      height: 'auto',
      padding: '24px 32px 18px',
      backgroundColor: '#1E2235',
      borderRadius: '12px',
    }}>
      
      <CardHeader sx={{padding: '0 0 36px 0', color: '#FFFFFF'
      }} title={"Обменять на рубли"} 
          action={
            <CloseIcon/>
          }
        />
        <CardContent sx={{padding: '0 0 1% 0'}}>
          <FormControl sx={{width: '100%'}}>
            <Box
              paddingBottom={3}>
              <Typography
                  variant="h6"
                  component="p"
                  color='#FFFFFF'
                  fontSize={14}
                  fontWeight={600}
                  paddingBottom={1}
                >
                Категория
              </Typography>

              <TextField placeholder="Введите категорию" 
                sx={{width: '100%'}}
              />
            </Box>

            <Box
              paddingBottom={3}>
              <Typography
                  variant="h6"
                  component="p"
                  color='#FFFFFF'
                  fontSize={14}
                  fontWeight={600}
                  paddingBottom={1}
                >
                Куда зачислить
              </Typography>

              <TextField placeholder="Куда зачислить" 
                sx={{width: '100%'}}
              />
            </Box>

            <Box
              paddingBottom={3}>
              <Typography
                  variant="h6"
                  component="p"
                  color='#FFFFFF'
                  fontSize={14}
                  fontWeight={600}
                  paddingBottom={1}
                >
                Сколько списать
              </Typography>

              <TextField placeholder="Введите сумму" 
                sx={{width: '100%'}}
              />
            </Box>

            <Box
              paddingBottom={3}>
              <Typography
                  variant="h6"
                  component="p"
                  color='#FFFFFF'
                  fontSize={14}
                  fontWeight={600}
                  paddingBottom={1}
                >
                Будут начислено
              </Typography>

              <TextField placeholder="Введите сумму"
                sx={{width: '100%'}}
              />
            </Box>
          </FormControl>
        </CardContent>
        <CardActions sx={{float: 'right'}}>
          <Button sx={{
            backgroundColor: '#424867',
            color: '#FFFFFF', 
            textTransform: 'capitalize',
            padding: '12px 15px',
            borderRadius: '12px'
          }}>Отменить</Button>
          <Button sx={{
            backgroundColor: '#4338CA',
            color: '#FFFFFF',
            textTransform: 'capitalize',
            padding: '12px 15px',
            borderRadius: '12px'
          }}>Сохранить</Button>
        </CardActions>
    </Card>
  );
};
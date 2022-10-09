import React, { useState } from 'react';
import { Box } from '@mui/material';
import {Card, CardHeader, CardContent, CardActions, Button, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {FormControl} from '@mui/material';
import {TextField} from '@mui/material';
import { TextareaAutosize } from '@mui/base';
import AddIcon from '@mui/icons-material/Add';


export const AddIdea = () => {
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
      }} title={"Новая идея"} 
          action={
            <CloseIcon/>
          }
        />
        <CardContent sx={{padding: '0 0 5% 0'}}>
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
                Наименование
              </Typography>

              <TextField placeholder="Введите наименование"
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
                Описание идеи
              </Typography>

              <TextareaAutosize placeholder='Введите описание...'
                style={{
                  width: '100%',
                  resize: 'none',
                  padding: '16px',
                  height: '120px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  color: '#DCDEF3',
                  backgroundColor: '#1E2235',
                  border: '1px solid #424867'
                }}
              />
            </Box>

            <Box sx={{
              width: '100%',
              height: 'auto',
              border: '2px dashed #424867',
              backgroundColor: '#252A41',
              borderRadius: '12px',
              padding: '16px',
              color: '#DCDEF3',
            }}>
              {
                file ? <Box>Отпустите клавишу мыши для загрузки</Box> :
                       <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        rowGap: 2
                       }}>
                          <AddIcon />
                          <Box>
                          <Typography sx={{
                            fontSize: '12px',
                            fontWeight: 400,
                            }}>
                            Загрузите файл или перетащите файлы в выделенную область</Typography>
                          <Typography sx={{
                            fontSize: '12px',
                            fontWeight: 400,
                            }}>
                            Формат файлов: JPEG, JPG, PDF. Размер файла не более 5MB</Typography>
                          </Box>
                       </Box>
              }
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
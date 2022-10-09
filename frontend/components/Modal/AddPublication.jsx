import React, { useState } from 'react';
import { Box } from '@mui/material';
import {Card, CardHeader, CardContent, CardActions, Button, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {FormControl} from '@mui/material';
import {TextField} from '@mui/material';
import { TextareaAutosize } from '@mui/base';
import AddIcon from '@mui/icons-material/Add';
import {FormControlLabel} from '@mui/material';
import Switch from '@mui/material/Switch';
import CustomizedDividers from './RedactorPublication';

export const AddPublication = () => {

  const [file, setFile] = useState(false);

  return (
    
    <Card onClick={e => e.stopPropagation()} sx={{
      width: '70%',
      height: 'auto',
      padding: '24px 32px 18px',
      backgroundColor: '#1E2235',
      borderRadius: '12px',
    }}>
      
      <CardHeader sx={{padding: '0 0 36px 0', color: '#FFFFFF'
      }} title={"Добавление публикации"} 
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
                Наименование публикации
              </Typography>

              <TextField placeholder="Введите наименование" 
                sx={{width: '100%'}}
              />
            </Box>

            <Box sx={{
              padding: '20px',
              borderRadius: '12px',
              border: '2px solid #323855'
            }}>

            {/* панель управления */}
              <Box sx={{
                display: 'flex',

              }}>
                <CustomizedDividers />
        
              </Box>
              <TextareaAutosize placeholder='Введите описание...'
                style={{
                  width: '100%',
                  resize: 'none',
                  height: '120px',
                  border: 'none',
                  fontSize: '14px',
                  color: '#DCDEF3',
                  backgroundColor: '#1E2235',
                  outline: 'none'
                }}
              />
            </Box>

            <Box mt={3} sx={{
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

            <Box sx={{display: 'flex', alignItems: 'center', columnGap: '16px'}}>
              <FormControlLabel sx={{color: '#FFFFFF'}}
                value="comment"
                control={<Switch color="primary" />}
                label="Комментарии включены"
                labelPlacement="comment"
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
          <Button className='btn__style_medium' sx={{
            color: '#FFFFFF',
            textTransform: 'capitalize',
            padding: '12px 15px',
            borderRadius: '12px'
          }}>Сохранить</Button>
        </CardActions>
    </Card>
  );
};
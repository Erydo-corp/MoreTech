import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const buttons = [
  <Button sx={{border: '1px solid #424867', color: '#FFFFFF', fontSize: '16px', textTransform: 'capitalize'}} key="back">Назад</Button>,
  <Button sx={{border: '1px solid #424867', color: '#FFFFFF'}} key="one">1</Button>,
  <Button sx={{border: '1px solid #424867', color: '#FFFFFF'}} key="two">2</Button>,
  <Button sx={{border: '1px solid #424867', color: '#FFFFFF'}} key="three">3</Button>,
  <Button sx={{border: '1px solid #424867', color: '#FFFFFF'}} key="dot">...</Button>,
  // <Button key="four">4</Button>,
  // <Button key="five">5</Button>,
  // <Button key="six">6</Button>,
  // <Button key="seven">7</Button>,
  // <Button key="eight">8</Button>,
  // <Button key="nine">9</Button>,
  <Button sx={{border: '1px solid #424867', color: '#FFFFFF'}} key="ten">10</Button>,
  <Button sx={{border: '1px solid #424867', color: '#FFFFFF', fontSize: '16px', textTransform: 'capitalize'}} key="next">Вперед</Button>
];


// Компонент с выводом кнопок для загрузки всех идей (для страницы Банк Идей)
export const GroupBtnBankIdea = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ButtonGroup size="small" aria-label="small button group" sx={{
          border: '1px solid #424867'
        }}>
          {buttons}
        </ButtonGroup>
      </Box>
    </>
  );
};
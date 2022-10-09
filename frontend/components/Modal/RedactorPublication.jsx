import React from 'react';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatBoldRoundedIcon from '@mui/icons-material/FormatBoldRounded';
import StrikethroughSRoundedIcon from '@mui/icons-material/StrikethroughSRounded';
import NotesRoundedIcon from '@mui/icons-material/NotesRounded';
import FormatListBulletedTwoToneIcon from '@mui/icons-material/FormatListBulletedTwoTone';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import ImageIcon from '@mui/icons-material/Image';
import TheatersIcon from '@mui/icons-material/Theaters';
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import { ButtonGroup } from '@mui/material';
import { Box } from '@mui/system';

export default function CustomizedDividers() {

  return (
    <div>
        <Box sx={{
          width: '100%',
          borderBottom: '1px solid #323855'
        }}>
          <ButtonGroup sx={{
            paddingBottom: '5px',
            display: 'flex',
            columnGap: 5,
          }}>
            <FormatBoldRoundedIcon sx={{cursor: 'pointer'}}/>
            <FormatItalicIcon sx={{cursor: 'pointer'}}/>
            <FormatUnderlinedIcon sx={{cursor: 'pointer'}}/>
            <StrikethroughSRoundedIcon sx={{cursor: 'pointer'}}/>
            <FormatListBulletedTwoToneIcon sx={{cursor: 'pointer'}}/>
            <NotesRoundedIcon sx={{cursor: 'pointer'}}/>
            <LinkOutlinedIcon sx={{cursor: 'pointer'}}/>
            <ImageIcon sx={{cursor: 'pointer'}}/>
            <TheatersIcon sx={{cursor: 'pointer'}}/>
            <AttachFileTwoToneIcon sx={{cursor: 'pointer'}}/>
          </ButtonGroup>
        </Box>
      
    </div>
  );
}

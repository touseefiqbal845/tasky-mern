import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme, height, barColor, trackColor,width }) => ({
  height: height || 10,
  borderRadius: 10,
  width: width || '100%',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: trackColor || theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: trackColor || theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: barColor || '#1a90ff',
    ...theme.applyStyles('dark', {
      backgroundColor: barColor || '#308fe8',
    }),
  },
}));

export default function CustomizedProgressBars({widthstack,marginLeft}) {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1,width:widthstack,marginLeft:marginLeft }}>
      <BorderLinearProgress 
        variant="determinate" 
        value={50} 
        height={3} 
        barColor="#f9de9a" 
        trackColor="#e0e0e0" 
      />
 
    </Stack>
  );
}

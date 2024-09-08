import { Box, Typography } from '@mui/material';
import React from 'react';

function Professional() {
  return (
    <Box sx={{ position: 'relative', py: 10 }}>
      <Box
        sx={{
          '--overlay-opacity': 0.5,
          backgroundImage: "url('/Sina 34.jpg')",
          width: { lg: '300%', md: '300%', sm: '300%', xs: '300%' },
          height: { lg: '300px', md: '240px', sm: '200px', xs: '130px' },
          backgroundPosition: '50% 34%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '35%',
          my: 10,
          transform: 'rotate(-3deg)',
          transformOrigin: 'center',
          marginRight: '-99%',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, var(--overlay-opacity))',
            zIndex: 1,
          },
        }}
      ></Box>
      <Typography
        sx={{
          color: '#f2b827',
          fontSize: { lg: '25px', md: '20px', sm: '18px', xs: '15px' },
          textTransform: 'uppercase',
          textAlign: 'center',
          position: 'absolute',
          right: { lg: '39%', md: '38%', sm: '35%', xs: '25%' },
          bottom: { lg: '28%', md: '29%', sm: '31%', xs: '36%' },
        }}
      >
        Professional Experience
      </Typography>
    </Box>
  );
}

export default Professional;

import { Box, Typography } from '@mui/material';
import React from 'react';

function Professional() {
  return (
    <Box sx={{ position: 'relative', py: 10 }}>
      <Box
        sx={{
          '--overlay-opacity': 0.5,
          backgroundImage: "url('/Sina 34.jpg')",
          width: '300%',
          height: '300px',
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
          fontSize: '25px',
          textTransform: 'uppercase',
          textAlign: 'center',
          position: 'absolute',
          right: '39%',
          bottom: '28%',
        }}
      >
        Professional Experience
      </Typography>
    </Box>
  );
}

export default Professional;

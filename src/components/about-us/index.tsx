import { Box, Typography } from '@mui/material';
import React from 'react';
import Profile from './profile';
import Professional from './professional';
import Execution from './execution';

function About() {
  return (
    <Box
      sx={{
        '--overlay-opacity': 0.5,
        backgroundColor: '#111111',
        minHeight: '100vh',
        backgroundImage: "url('/34.jpg')",
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: { lg: '40%', md: '40%', sm: '50%', xs: '100%' },
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden',
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
    >
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Typography
          sx={{
            color: '#f2b827',
            fontSize: { lg: '25px', md: '20px', sm: '18px', xs: '18px' },
            textTransform: 'uppercase',
            textAlign: 'center',
            position: 'absolute',
            right: { lg: '40%', md: '38%', sm: '35%', xs: '25%' },
            top: { md: '-2%', lg: '-2%', sm: '-1.2%', xs: '-1%' },
          }}
        >
          It All Starts From Here
        </Typography>
        <Box
          sx={{
            backgroundColor: '#131313',
            width: '120%',
            height: '200px',
            transform: 'rotate(-5deg)',
            mt: { lg: '25%', md: '29%', sm: '39%', xs: '75%' },
          }}
        ></Box>
        <Box
          sx={{
            backgroundColor: '#131313',
            width: '100%',
            height: 'auto',
            mt: '-5%',
            pt: 2,
          }}
        >
          <Profile />
          <Professional />
          <Execution />
        </Box>
      </Box>
    </Box>
  );
}

export default About;

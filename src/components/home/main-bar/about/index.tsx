import { Box, Button, Card, CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react';

function About() {
  const [buttonText, setButtonText] = useState('Click');

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#131313',
          width: '100%',
          display: 'flex',
          flexDirection: 'row-reverse',
          py: 5,
          gap: 5,
        }}
      >
        <Card sx={{ ml: 10 }}>
          <CardMedia
            component="img"
            height="550"
            image="Story - Sina.jpg"
            alt="description"
          />
        </Card>
        <Box
          sx={{
            width: '40%',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography variant="h3" sx={{ color: '#f3c242' }}>
            About Me
          </Typography>
          <Typography sx={{ color: 'white' }}>
            Sina sae iranian Singer rapper musician and actor was born in 1989
            April in tehran and lives in tehran too. He started his career
            professionally in 2004 since now. After that he founded tiktaak
            music with sina mafee and khashayar sr band in 2008
          </Typography>

          <Button
            onMouseEnter={() => setButtonText('Go')}
            onMouseLeave={() => setButtonText('Click')}
            sx={{
              mt: 3,
              borderRadius: '50px',
              width: '20%',
              backgroundColor: '#f2b827',
              color: 'black',
              fontWeight: 600,
              border: '1px solid black',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'black',
                color: '#f2b827',
                border: '1px solid #f2b827',
              },
            }}
          >
            {buttonText}
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default About;

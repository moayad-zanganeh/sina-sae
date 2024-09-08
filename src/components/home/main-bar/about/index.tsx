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
          flexDirection: {
            lg: 'row-reverse',
            md: 'row-reverse',
            sm: 'row-reverse',
            xs: 'column',
          },
          py: 10,
          gap: { md: 5, sm: 3, xs: 2 },
        }}
      >
        <Card
          sx={{
            // mx: { xs: 'auto', sm: 0, md: '10%', lg: 0 },
            ml: { md: '10%', sm: 7, xs: '-5%' },
            height: { lg: '550px', md: '550px', xs: '300px', sm: '400px' },
            mr: { xs: '5%', lg: 0, md: 0, sm: 0 },
            width: { lg: '35%', md: '35%', sm: '40%', xs: '90%' },
          }}
        >
          <CardMedia
            component="img"
            sx={{ height: { md: '550px', sm: '400px', xs: '300px' } }}
            image="Story - Sina.jpg"
            alt="description"
          />
        </Card>
        <Box
          sx={{
            width: { lg: '40%', md: '40%', sm: '40%', xs: '100%' },
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: '#f3c242',
              fontSize: { xs: '35px' },
              mx: { xs: '5%' },
            }}
          >
            About Me
          </Typography>
          <Typography
            sx={{
              color: 'white',
              mx: { xs: 'auto' },
              width: { xs: '90%' },
              lineHeight: '2',
            }}
          >
            Sina sae iranian Singer rapper musician and actor was born in 1989
            April in tehran and lives in tehran too. He started his career
            professionally in 2004 since now. After that he founded tiktaak
            music with sina mafee and khashayar sr band in 2008
          </Typography>

          <Button
            onMouseEnter={() => setButtonText('Go')}
            onMouseLeave={() => setButtonText('Click')}
            sx={{
              mr: 3,
              borderRadius: '50px',
              width: { md: '20%', sm: '35%', xs: '25%' },
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

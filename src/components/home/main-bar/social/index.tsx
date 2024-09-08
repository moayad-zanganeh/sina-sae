import SocialMediaIcons from '@/components/shared/social-media';
import { Box } from '@mui/material';
import React from 'react';

function Social() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url('/asli.jpg')",
          backgroundRepeat: 'no-repeat',
          height: {
            xs: '50vh',
            sm: '78vh',
            md: 570,
            lg: '120vh',
          },
          width: '100%',
          backgroundSize: 'cover',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: {
              xs: '22%',
              sm: '14%',
              md: '35%',
            },
            right: {
              xs: '12%',
              sm: '30%',
              md: '5%',
            },
          }}
        >
          <SocialMediaIcons />
        </Box>
      </Box>
    </>
  );
}

export default Social;

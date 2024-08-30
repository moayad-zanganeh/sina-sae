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
          height: 570,
          width: '100%',
          backgroundSize: 'cover',
          position: 'relative',
        }}
      >
        <Box sx={{ position: 'absolute', bottom: '35%', right: '5%' }}>
          <SocialMediaIcons />
        </Box>
      </Box>
    </>
  );
}

export default Social;

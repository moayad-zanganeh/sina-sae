import React from 'react';
import { Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SoundCloudIcon from './soundcloud';
import SpotifyIcon from './spotyfy';

function SocialMediaIcons({ size = 'default' }) {
  const iconStyles = {
    color: 'black',
    backgroundColor: '#f2b827',
    borderRadius: '50px',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      color: '#f2b827',
      backgroundColor: 'black',
    },
    margin: '0 10px',
    fontSize: {
      xs: '1.2rem',
      sm: '1.2rem',
      md: '1.3rem',
      lg: '1.8rem',
    },
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <IconButton sx={iconStyles}>
        <FacebookIcon fontSize="inherit" />
      </IconButton>
      <IconButton sx={iconStyles}>
        <TwitterIcon fontSize="inherit" />
      </IconButton>
      <IconButton sx={iconStyles}>
        <InstagramIcon fontSize="inherit" />
      </IconButton>
      <IconButton sx={iconStyles}>
        <YouTubeIcon fontSize="inherit" />
      </IconButton>
      <IconButton sx={iconStyles}>
        <SoundCloudIcon fontSize="inherit" />
      </IconButton>
      <IconButton sx={iconStyles}>
        <SpotifyIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
}

export default SocialMediaIcons;

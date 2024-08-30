import React from 'react';
import { Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SoundCloudIcon from './soundcloud';
import SpotifyIcon from './spotyfy';

function SocialMediaIcons() {
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
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <IconButton sx={iconStyles}>
        <FacebookIcon />
      </IconButton>
      <IconButton sx={iconStyles}>
        <TwitterIcon />
      </IconButton>
      <IconButton sx={iconStyles}>
        <InstagramIcon />
      </IconButton>
      <IconButton sx={iconStyles}>
        <YouTubeIcon />
      </IconButton>
      <IconButton sx={iconStyles}>
        <SoundCloudIcon />
      </IconButton>
      <IconButton sx={iconStyles}>
        <SpotifyIcon />
      </IconButton>
    </Box>
  );
}

export default SocialMediaIcons;

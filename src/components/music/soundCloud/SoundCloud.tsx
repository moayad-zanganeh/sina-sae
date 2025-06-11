import React from 'react';
import { Box } from '@mui/material';

function SoundCloud() {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#111111',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Box
        component="iframe"
        sx={{
          borderRadius: 2,
          boxShadow: '0 0 10px rgba(0,0,0,0.5)',
          width: '100%',
          height: 580,
        }}
        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/sinasae&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        title="SoundCloud User SINA SAE"
      />
    </Box>
  );
}

export default SoundCloud;

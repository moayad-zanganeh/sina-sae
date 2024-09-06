import { Box } from '@mui/material';
import React from 'react';

function Musics() {
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
      <iframe
        src="https://open.spotify.com/artist/5er043agmHdVZkWTxL0Lpk?si=gKBLT3nsQdGV4x6dkrH5Zg"
        width="100%"
        height="580"
        allow="encrypted-media"
        style={{ borderRadius: '8px' }}
        title="Spotify Artist"
      ></iframe>
    </Box>
  );
}

export default Musics;

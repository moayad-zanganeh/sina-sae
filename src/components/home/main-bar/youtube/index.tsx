import React from 'react';
import ReactPlayer from 'react-player';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const YouTubePlayer: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: 'black',
        height: '100vh',
        color: 'white',
      }}
    >
      <Box
        sx={{
          flex: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=O5YHxqhyfg4&list=RDEM9JEW4IHXD0s5eYEsFJIHpQ&start_radio=1"
          controls={true}
          width="90%"
          height="90%"
        />
      </Box>
    </Box>
  );
};

export default YouTubePlayer;

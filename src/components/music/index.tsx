import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import Spotify from './spotify/Spotify';
import SoundCloud from './soundCloud/SoundCloud';

function TabPanel(props:any) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`music-tabpanel-${index}`}
      aria-labelledby={`music-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ height: '100vh' }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index:any) {
  return {
    id: `music-tab-${index}`,
    'aria-controls': `music-tabpanel-${index}`,
  };
}

function Musics() {
  const [value, setValue] = useState(0);
  const handleChange = ({event, newValue}: any) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          backgroundColor: '#111111',
          '& .MuiTab-root': {
            color: '#FFF',
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#f2b827',
          },
        }}
      >
        <Tab label="Spotify" {...a11yProps(0)} />
        <Tab label="SoundCloud" {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Spotify />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SoundCloud />
      </TabPanel>
    </Box>
  );
}

export default Musics;

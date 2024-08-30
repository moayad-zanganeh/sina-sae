import { Box } from '@mui/material';
import About from './about';
import Social from './social';
import Music from './music';

function MainBar() {
  return (
    <>
      <Social />
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            backgroundImage: "url('/Sina-Sae.jpg')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -2,
            opacity: 1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: -1,
          }}
        />
        <About />
        <Music />
      </Box>
    </>
  );
}

export default MainBar;

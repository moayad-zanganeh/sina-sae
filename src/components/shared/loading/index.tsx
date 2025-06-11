import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { keyframes } from '@mui/system';

const blink = keyframes`
  0%   { opacity: 1; }
  50%  { opacity: 0; }
  100% { opacity: 1; }
`;

export const Loading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{ backgroundColor: '#131313' }}
    >
      <Typography
        variant="h1"
        sx={{
          animation: `${blink} 1.2s infinite`,
          fontFamily: 'Pacifico',
          fontSize: { xs: '2rem', md: '4rem' },
          color: '#f2b827',
          textShadow: '0 0 10px rgba(242, 184, 39, 0.7)',
        }}
      >
        SINA SAE
      </Typography>
    </Box>
  );
};

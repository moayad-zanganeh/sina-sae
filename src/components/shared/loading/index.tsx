import { Box, CircularProgress } from '@mui/material';

export const Loading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{ backgroundColor: '#131313' }}
    >
      <CircularProgress sx={{ color: '#f2b827' }} />
    </Box>
  );
};

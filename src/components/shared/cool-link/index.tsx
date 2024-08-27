import React from 'react';
import { Typography, Box } from '@mui/material';
import { CoolLinkProps } from '@/types/cool-link';

const CoolLink: React.FC<CoolLinkProps> = ({ href, children }) => {
  return (
    <Box
      component="a"
      href={href}
      sx={{
        color: '#f2b827',
        textDecoration: 'none',
        display: 'inline-block',
        position: 'relative',
        '&::after': {
          content: '""',
          display: 'block',
          width: 0,
          height: '2px',
          background: '#f2b827',
          transition: 'width .3s',
          position: 'absolute',
          bottom: 0,
          left: 0,
        },
        '&:hover::after': {
          width: '100%',
        },
      }}
    >
      <Typography>{children}</Typography>
    </Box>
  );
};

export default CoolLink;

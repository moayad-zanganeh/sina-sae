import { Box, Typography, Card, CardMedia } from '@mui/material';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

function Profile() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: {
          lg: 'row',
          md: 'row',
          sm: 'row',
          xs: 'column-reverse',
        },
        alignItems: 'center',
        maxWidth: { lg: '80%', md: '80%', sm: '100%', xs: '100%' },
        margin: '0 auto',
        mt: 4,
        p: 5,
      }}
    >
      <Typography
        className={inView ? 'animate__animated animate__slideInLeft' : ''}
        sx={{
          color: '#f2b827',
          lineHeight: '2',
          flex: 1,
          textAlign: 'justify',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        Born on April 21, 1988 in Tehran, Sina Saei has been a resident of the
        city. He has been active in the Tik Tak group (RJZ) and is one of the
        founders along with Khoshayar (Kechi Beats), Sina Mafi, and himself.
        Sina Saei has ventured into acting alongside his music career, with
        notable performances in theater productions such as "Hamlet Tehran" in
        2017, "Plus Plus Power 2," and "Tehran Paris Tehran." Since losing his
        father to a heart attack in 2015, Sina has been living with his mother.
        In 2018, Sina completed his military service and returned to his career
        with renewed vigor and determination.
      </Typography>

      <Card
        className={inView ? 'animate__animated animate__slideInRight' : ''}
        sx={{
          flex: 1,
          width: { lg: '80%', md: '80%', sm: '80%', xs: '100%' },
          backgroundColor: '#131313',
          boxShadow: 'none',
          mb: { lg: 0, md: 0, sm: 0, xs: 5 },
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <CardMedia
          component="img"
          image="Face-Sina.jpg"
          alt="Sina"
          sx={{
            width: { lg: '80%', md: '80%', sm: '80%', xs: '90%' },
            height: 'auto',
            mx: 'auto',
            borderRadius: '10px',
          }}
        />
      </Card>
    </Box>
  );
}

export default Profile;

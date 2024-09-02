import { Box, Typography, Card, CardMedia } from '@mui/material';
import React from 'react';

function Profile() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '80%',
        margin: '0 auto',
        mt: 4,
        p: 5,
      }}
    >
      <Typography
        sx={{
          color: '#f2b827',
          lineHeight: '2',
          flex: 1,
          textAlign: 'justify',
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
        sx={{
          flex: 1,
          width: '80%',
          backgroundColor: '#131313',
          boxShadow: 'none',
        }}
      >
        <CardMedia
          component="img"
          image="Face-Sina.jpg"
          alt="description"
          sx={{
            width: '80%',
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

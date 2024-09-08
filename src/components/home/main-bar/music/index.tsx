import { Box, Card, CardMedia, Typography, IconButton } from '@mui/material';
import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [
  'the-song/34.jpg',
  'the-song/chera khastam.jpg',
  'the-song/japa.jpg',
  'the-song/kaktus.jpg',
  'the-song/khone.jpg',
  'the-song/kooch.jpg',
  'the-song/manshour.jpg',
  'the-song/moalagh.jpg',
  'the-song/noor.jpg',
  'the-song/yani koo.jpg',
  'the-song/Sina-Sae-TEHRAN.webp',
];

function Music() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: { lg: 0, md: 0, sm: '2%', xs: '-1%' },
        width: '100%',
      }}
    >
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h4" sx={{ color: '#f3c242' }}>
          Music
        </Typography>
      </Box>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: { md: '78vh', lg: '78vh', sm: '50vh', xs: '50vh' },
          perspective: '3000px',
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            left: 10,
            zIndex: 2,
            color: '#f3c242',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: { lg: '73%', md: '80%', sm: '80%', xs: '100%' },
            height: { lg: '550px', md: '550px', sm: '550px', xs: '710px' },
          }}
        >
          {images.map((image, index) => {
            const offset = index - currentIndex;

            const isCurrent = offset === 0;
            const isNext =
              offset === 1 ||
              (currentIndex === images.length - 1 && index === 0);
            const isPrev =
              offset === -1 ||
              (currentIndex === 0 && index === images.length - 1);

            const transformStyles = isCurrent
              ? `translateX(0) scale(0.9) rotateY(0deg)`
              : isNext
              ? `translateX(400px) scale(0.9) rotateY(50deg)`
              : isPrev
              ? `translateX(-400px) scale(0.9) rotateY(-50deg)`
              : `translateX(${offset * 200}px) scale(0) rotateY(${
                  offset * 30
                }deg)`;

            const zIndex = isCurrent ? 2 : 1;

            return (
              <Card
                key={index}
                sx={{
                  position: 'absolute',
                  transform: transformStyles,
                  transition: 'transform 0.5s ease',
                  zIndex,
                  borderRadius: '15px',
                  height: { lg: '78%', md: '59%', sm: '44%', xs: '24%' },
                  width: '40%',
                }}
              >
                <CardMedia
                  component="img"
                  height="auto"
                  image={image}
                  alt={`image-${index}`}
                  sx={{ width: '100%', objectFit: 'cover' }}
                />
              </Card>
            );
          })}
        </Box>

        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: 10,
            zIndex: 2,
            color: '#f3c242',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' },
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Music;

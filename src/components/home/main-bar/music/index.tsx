import { Box, Card, CardMedia, Typography, IconButton } from '@mui/material';
import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = ['Story - Sina.jpg', '34.jpg', 'asli.jpg', 'Sina 34.jpg'];

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
    <>
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
          height: '100vh',
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
            width: '80%',
            height: '550px',
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
                  height: '70%',
                  width: '40%',
                }}
              >
                <CardMedia
                  component="img"
                  height="550"
                  image={image}
                  alt={`image-${index}`}
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
    </>
  );
}

export default Music;

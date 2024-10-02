import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import 'animate.css';

const images = [
  {
    src: 'execution/Tehran-Paris-Tehran.jpg',
    title: 'Tehran-Paris-Tehran',
    description:
      'Writer: Saleh Alavizadeh\nDirector: Saeed Dashti\nProducer: Seyyed Sami Beheshti\nActors: Sina Saei, Aida Mahiani, Farzin Mohades',
  },
  {
    src: 'execution/Plus-Plus-Be-Tavan2.jpeg',
    title: 'Plus Plus Be Tavan 2',
    description:
      'Duration: July 1st to July 28th, 2022\nWriter: Sina Shafiei\nDirectors: Nima Shaban Nejad, Saeed Dashti\nActors: Nima Shaban Nejad, Sina Saei',
  },
  {
    src: 'execution/Hamlet-Tehran.jpg',
    title: 'Hamlet Tehran',
    description:
      'Duration: June 18th to July 21st, 2017\nWriter and Director: Keyumars Moradi\nDesigner: Aidin Alafat\nActors (in order of appearance): Sina Saei, Zahra Bahramanesh, Armita Forouzandeh, Mahya Sadrzadeh, Darya Khalili',
  },
];

function Execution() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        gap: 2,
        py: 10,
      }}
    >
      {images.map((image, index) => (
        <Box
          key={index}
          className={`${
            isVisible ? 'animate__animated animate__slideInUp' : ''
          }`}
          sx={{
            position: 'relative',
            width: '300px',
            height: '400px',
            overflow: 'hidden',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            animationDelay: `${index * 0.3}s`,
            '&:hover .overlay': {
              opacity: 1,
            },
            '&:hover .img': {
              transform: 'scale(1.1)',
            },
          }}
        >
          <Box
            component="img"
            src={image.src}
            alt={image.title}
            className="img"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease-in-out',
            }}
          />
          <Box
            className="overlay"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              opacity: 0,
              transition: 'opacity 0.3s ease-in-out',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2,
              textAlign: 'center',
              color: '#ffffff',
            }}
          >
            <Typography variant="h6" gutterBottom>
              {image.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 2,
                whiteSpace: 'pre-line',
                fontSize: '16px',
                lineHeight: '2',
              }}
            >
              {image.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Execution;

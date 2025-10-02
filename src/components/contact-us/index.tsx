import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box, Divider } from '@mui/material';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/comments')
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/comments', formData)
      .then((response) => {
        setComments([...comments, response.data]);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error posting comment:', error);
      });
  };

  return (
    <Box sx={{ backgroundColor: '#111111', minHeight: '100vh' }}>
      <Box
        sx={{
          '--overlay-opacity': 0.5,
          minHeight: { xs: '70vh', sm: '90vh', md: '90vh', lg: '90vh' },
          backgroundImage: "url('/search.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          backgroundPosition: 'top',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: { xs: '80%', sm: '100%', md: '100%', lg: '100%' },
            backgroundColor: 'rgba(0, 0, 0, var(--overlay-opacity))',
            zIndex: 0,
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            height: { xs: '0px', sm: '510px', md: '510px', lg: '510px' },
          }}
        >
          <Typography
            sx={{
              color: '#f2b827',
              fontSize: {
                xs: '16px',
                sm: '30px',
                md: '35px',
                lg: '35px',
              },
              textTransform: 'uppercase',
              textAlign: 'center',
              position: 'absolute',
              width: '100%',
              bottom: {
                xs: '-218px',
                sm: '112px',
                md: '48px',
                lg: '52px',
                xl: '60px',
              },
              left: 0,
              zIndex:1
            }}
          >
            Get In Touch
          </Typography>
          <Box
            sx={{
              backgroundColor: '#111111 !important',
              width: {
                xs: '103%',
                sm: '110%',
                md: '120%',
              },
              height: {
                xs: '150px',
                sm: '180px',
                md: '200px',
              },
              transform: 'rotate(-5deg)',
              position: 'absolute',
              top: 0,
              right: 0,
              mt: {
                xs: '51%',
                sm: '51%',
                md: '44%',
                lg: '32.6%',
              },
              mr: {
                xs: '1%',
                sm: 0,
                md: 0,
                lg: 0,
              },
            }}
          ></Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: '#111111',
          display: 'flex',
          flexDirection: {
            xs: 'column-reverse',
            sm: 'row-reverse',
          },
          alignItems: {
            xs: 'stretch',
            sm: 'center',
          },
          gap: 5,
          p: 2,
          pt: 0,
          pb: 10,
        }}
      >
        <Box
          sx={{
            backgroundColor: '#f2b827',
            width: {
              xs: '100%',
              sm: '50%',
            },
            height: {
              xs: 'auto',
              sm: '45vh',
            },
            ml: {
              xs: 0,
              sm: 5,
            },
            p: 2,
            maxHeight: '400px',
            overflowY: 'auto',
            '::-webkit-scrollbar': {
              width: '10px',
            },
            '::-webkit-scrollbar-thumb': {
              backgroundColor: 'black',
              borderRadius: '5px',
            },
            '::-webkit-scrollbar-track': {
              backgroundColor: '#f2b827',
            },
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: '16px' }, fontWeight: 800 }}
            >
              Comments
            </Typography>
            <Divider sx={{ background: 'black', my: 1 }} />
            {comments.length === 0 ? (
              <Typography>No comments yet.</Typography>
            ) : (
              comments.map((comment, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography sx={{ fontWeight: 'bold', color: '#111' }}>
                    {comment.name}
                  </Typography>
                  <Typography>{comment.message}</Typography>
                </Box>
              ))
            )}
          </Box>
        </Box>

        <Box
          sx={{
            mt: {
              xs: 2,
              sm: 4,
            },
            width: {
              xs: '100%',
              sm: '40%',
            },
            mr: {
              xs: 0,
              sm: 4,
            },
          }}
        >
          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 2, backgroundColor: 'white' }}>
              <TextField
                label="name"
                name="name"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Box>
            <Box sx={{ mb: 2, backgroundColor: 'white' }}>
              <TextField
                label="email"
                name="email"
                type="email"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Box>
            <Box sx={{ mb: 2, backgroundColor: 'white' }}>
              <TextField
                label="message"
                name="message"
                multiline
                rows={4}
                fullWidth
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Box>
            <Box sx={{ fontSize: { xs: '12px' }, fontWeight: { xs: 800 } }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#f2b827',
                  color: 'black',
                  fontWeight: 'bold',
                  borderRadius: '20px',
                  '&:hover': {
                    backgroundColor: 'black',
                    border: '1px solid #f2b827',
                    color: '#f2b827',
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;

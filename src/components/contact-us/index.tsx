import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
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
          minHeight: '90vh',
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
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, var(--overlay-opacity))',
            zIndex: 0,
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            height: '510px',
          }}
        >
          <Typography
            sx={{
              color: '#f2b827',
              fontSize: '35px',
              textTransform: 'uppercase',
              textAlign: 'center',
              position: 'absolute',
              width: '100%',
              bottom: 0,
              left: 0,
            }}
          >
            Get In Touch
          </Typography>
          <Box
            sx={{
              backgroundColor: '#111',
              width: '120%',
              height: '200px',
              transform: 'rotate(-5deg)',
              position: 'absolute',
              top: 0,
              right: 0,
              mt: '37%',
            }}
          ></Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: '#111',
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          gap: 5,
          p: 2,
          py: 10,
        }}
      >
        <Box
          sx={{
            backgroundColor: '#f2b827',
            width: '50%',
            height: '45vh',
            ml: 5,
            p: 2,
            maxHeight: '400px', // Limit height to enable scrolling
            overflowY: 'auto', // Enable scrolling when content exceeds the height
            '::-webkit-scrollbar': {
              width: '10px',
            },
            '::-webkit-scrollbar-thumb': {
              backgroundColor: 'black', // Custom scrollbar color
              borderRadius: '5px',
            },
            '::-webkit-scrollbar-track': {
              backgroundColor: '#f2b827', // Track background color
            },
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Comments
            </Typography>
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
        <Box sx={{ mt: 4, width: '40%', mr: 4 }}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 2, backgroundColor: 'white' }}>
              <TextField
                label="name"
                name="name"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: '#f2b827',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    '&.Mui-focused': {
                      color: '#f2b827',
                    },
                  },
                }}
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
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: '#f2b827',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    '&.Mui-focused': {
                      color: '#f2b827',
                    },
                  },
                }}
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
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: '#f2b827',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    '&.Mui-focused': {
                      color: '#f2b827',
                    },
                  },
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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

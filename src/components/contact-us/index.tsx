import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
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
            className="animate__animated animate__fadeInUp"
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
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              mb: 2,
            }}
          >
            Communication with Sina Sae
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <PhoneIcon
              sx={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '20px',
                padding: '5px',
                mr: 1,
                fontSize: '30px',
              }}
            />
            <Typography sx={{ fontWeight: 'bold', mr: 2, fontSize: '18px' }}>
              +989123456789
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <EmailIcon
              sx={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '20px',
                padding: '5px',
                mr: 1,
                fontSize: '30px',
              }}
            />
            <Typography sx={{ fontWeight: 'bold', mr: 2, fontSize: '18px' }}>
              tiktaaksaesina@gmail.com
            </Typography>
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

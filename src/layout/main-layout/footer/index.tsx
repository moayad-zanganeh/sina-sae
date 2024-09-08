import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CoolLink from '@/components/shared/cool-link';
import SocialMediaIcons from '@/components/shared/social-media';

const pages = ['Home', 'About', 'Music', 'Contact us'];

function Footer() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [activePage, setActivePage] = React.useState('Home');

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuItemClick = (page: string) => {
    setActivePage(page);
    handleCloseNavMenu();
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: '#111111', top: '0', bottom: 0, py: 2 }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                display: { lg: 'none', md: 'none', sx: 'none', xs: 'none' },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'none', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => handleMenuItemClick(page)}
                  sx={{
                    color: '#f2b827',
                    textDecoration: 'none',
                    '&:hover': {
                      color: '#f2b827',
                      textDecoration: 'none',
                    },
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex', justifyContent: 'center' },
            }}
          >
            {pages.map((page) => (
              <CoolLink key={page} href={`${page.toLowerCase()}`}>
                <Button
                  onClick={() => handleMenuItemClick(page)}
                  sx={{
                    my: 0,
                    color: '#f2b827',
                    display: 'block',
                    fontWeight: '500',
                    fontSize: '18px',
                    mx: 1,
                    textDecoration: 'none',
                    '&:hover': {
                      color: '#f2b827',
                      backgroundColor: 'transparent',
                      textDecoration: 'none',
                    },
                  }}
                >
                  {page}
                </Button>
              </CoolLink>
            ))}
          </Box>

          <Box sx={{ mt: 2 }}>
            <SocialMediaIcons size="small" />
          </Box>

          <Box
            sx={{
              backgroundColor: '#f2b827',
              my: 4,
              height: '1px',
              width: '100%',
            }}
          />

          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Typography variant="body2" color="white">
              &copy; {new Date().getFullYear()} TikTaakSinaSae
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;

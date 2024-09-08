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
import { useRouter } from 'next/router';

const pages = ['Home', 'About', 'Music', 'Contact us'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const router = useRouter();
  const currentPath = router.pathname.split('/').pop() || 'home';
  const [activePage, setActivePage] = React.useState<string>(
    currentPath.charAt(0).toUpperCase() + currentPath.slice(1).replace('-', ' ')
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuItemClick = (page: string) => {
    setActivePage(page);
    handleCloseNavMenu();
    router.push(page.toLowerCase().replace(/\s+/g, '-'));
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#111111' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => handleMenuItemClick(page)}
                  sx={{
                    color: activePage === page ? '#f2b827' : 'white',
                    backgroundColor: '#111111',
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
              <CoolLink
                key={page}
                href={
                  page === 'Contact us'
                    ? 'contact-us'
                    : `${page.toLowerCase().replace(/\s+/g, '-')}`
                }
              >
                <Button
                  onClick={() => handleMenuItemClick(page)}
                  sx={{
                    my: 0,
                    color: activePage === page ? '#f2b827' : 'white',
                    display: 'block',
                    fontWeight: '500',
                    fontSize: '18px',
                    mx: 1,
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {page}
                </Button>
              </CoolLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

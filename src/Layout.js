import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, CssBaseline, Link as MuiLink } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'Articles', path: '/articles' },
  { label: 'About', path: '/about' },
  { label: 'Disclaimer', path: '/disclaimer' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
];

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a2540 0%, #0e7c7b 100%)' }}>
      <CssBaseline />
      <AppBar position="static" color="primary" elevation={2}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: 700, fontFamily: 'Inter, Roboto, Arial', cursor: 'pointer', ml: 0, mr: 0 }}
            component={Link}
            to="/"
            color="inherit"
            style={{ textDecoration: 'none' }}
          >
            MoneyMetric
          </Typography>
          {menuItems.map((item) => (
            <Button
              key={item.path}
              color={location.pathname === item.path ? 'secondary' : 'inherit'}
              component={Link}
              to={item.path}
              sx={{ fontWeight: 600, mx: 1, fontFamily: 'Inter, Roboto, Arial' }}
            >
              {item.label}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {children}
      </Container>
      <Box component="footer" sx={{ py: 2, textAlign: 'center', bgcolor: 'primary.main', color: 'white', mt: 4 }}>
        <Typography variant="body2" fontFamily="Inter, Roboto, Arial">
          © {new Date().getFullYear()} MoneyMetric. All rights reserved. |{' '}
          <MuiLink component={Link} to="/privacy-policy" color="inherit" underline="always">Privacy Policy</MuiLink>
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;

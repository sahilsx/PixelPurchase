"use client";
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const logoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 5,
};

const logoCircleStyle = {
 
  marginTop:5,

  width: 50,
  height: 50,
  borderRadius: '50%',
  backgroundColor: 'black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  marginRight:0.5,
};

const logoTextStyle = {

  marginTop:5,
  fontWeight: 'bold',
  fontSize: '1.5rem',
  Color: 'black',
};

const Navbar = () => {
  return (
    <Container maxWidth="md" sx={{height:800,}}>
      <Box sx={logoContainerStyle}>
        <Box sx={logoCircleStyle}>
          <Typography variant="h5">PP</Typography>
        </Box>
        <Typography sx={logoTextStyle}>PixelPurchase</Typography>
      </Box>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Explore a variety of Products that suit your choice.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2, marginBottom: 2 }}>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default Navbar;

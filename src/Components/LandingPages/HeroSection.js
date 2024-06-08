import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function HeroSection() {
  return (
    <Box
      sx={{
        height: '400px',
        backgroundImage: 'url(/path-to-your-image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h2">We Ensure better education for a better world</Typography>
      <Button variant="contained" sx={{ mt: 2 }}>Explore more</Button>
    </Box>
  );
}

export default HeroSection;

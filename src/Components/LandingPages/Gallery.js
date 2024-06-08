import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function Gallery() {
  return (
    <Box sx={{ my: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>Campus Photos</Typography>
      <Button variant="contained">See more here</Button>
    </Box>
  );
}

export default Gallery;

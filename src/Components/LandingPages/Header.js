import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pune Technological University
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About Us</Button>
        <Button color="inherit">Programs</Button>
        <Button color="inherit">Campus</Button>
        <Button color="inherit">Testimonials</Button>
        <Button color="inherit">Contact Us</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

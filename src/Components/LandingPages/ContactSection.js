import React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

function ContactSection() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom>Get in Touch</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Feel free to reach out through contact form...
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: info@ptu.edu.in
          </Typography>
          <Typography variant="body1" gutterBottom>
            Phone: 0452-256123-20
          </Typography>
          <Typography variant="body1" gutterBottom>
            Address: East coast Road, Pichavaram, Puducherry, 605 014
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Your Name" fullWidth margin="normal" />
          <TextField label="Phone Number" fullWidth margin="normal" />
          <TextField label="Your Email" fullWidth margin="normal" />
          <TextField label="Write your message here" fullWidth multiline rows={4} margin="normal" />
          <Button variant="contained" sx={{ mt: 2 }}>Submit now</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactSection;

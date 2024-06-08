import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const testimonials = [
  {
    name: 'Emily Williams',
    location: 'Calicut, IN',
    text: 'Choosing to pursue my degree at this university...',
  },
  {
    name: 'William Jackson',
    location: 'Calicut, IN',
    text: 'Choosing to pursue my degree at this university...',
  },
];

function Testimonials() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom>What Students Say</Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{testimonial.name}</Typography>
                <Typography variant="subtitle2" color="textSecondary">{testimonial.location}</Typography>
                <Typography variant="body1">{testimonial.text}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Testimonials;

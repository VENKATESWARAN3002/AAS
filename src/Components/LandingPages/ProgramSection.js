import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const programs = [
  {
    title: 'Program 1',
    image: '/path-to-your-image.jpg',
    description: 'Description for program 1',
  },
  {
    title: 'Program 2',
    image: '/path-to-your-image.jpg',
    description: 'Description for program 2',
  },
  {
    title: 'Program 3',
    image: '/path-to-your-image.jpg',
    description: 'Description for program 3',
  },
];

function ProgramSection() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom>What We Offer</Typography>
      <Grid container spacing={4}>
        {programs.map((program, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={program.image}
                alt={program.title}
              />
              <CardContent>
                <Typography variant="h5">{program.title}</Typography>
                <Typography variant="body2">{program.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProgramSection;

import React from 'react';
import { Typography, Grid, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box>
      <Typography variant="h2" gutterBottom>React Module End assignment</Typography>
      <Typography variant="body1" paragraph>
        This application to build a multi-page using React app.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" color="primary" fullWidth component={Link} to="/about">
            Learn More About Us
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="outlined" color="secondary" fullWidth component={Link} to="/data">
            View Data
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;

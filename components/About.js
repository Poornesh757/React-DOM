import React from 'react';
import { Typography, Grid, Card, CardContent, CardHeader } from '@mui/material';

const About = () => {
  return (
    <div>
      <Typography variant="h3" gutterBottom>About This Application</Typography>
      <Typography variant="body1" paragraph>
        This application is designed to demonstrate the core features of React, such as:
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardHeader title="React Router" />
            <CardContent>
              <Typography variant="body2">
                
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <Card>
            <CardHeader title="React Hooks" />
            <CardContent>
              <Typography variant="body2">
              
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;

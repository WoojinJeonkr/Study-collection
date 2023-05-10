import { Grid, Typography } from '@mui/material';
import React from 'react';

const Home = () => {
  return (
    <Grid>
      <Typography variant="h2">
        Drunk with React Hooks
      </Typography>
      <Typography variant="h5">
        These are the contents summarized after watching a YouTube lecture called 'Getting Drunk with React Hooks'.
        <br />This lecture was written by ByulCoding.
      </Typography>
    </Grid>
  );
};

export default Home;
import { Typography } from '@mui/material';
import React from 'react';

import classes from './Home.module.scss';

const Home = () => {
  return (
    <div className={`${classes.storybrainResets} ${classes.root}`}>
      <div className={classes.mainTitle}>
        <p className={classes.labelWrapper}>
          <Typography variant="h2">Drunk with React Hooks</Typography>
          <Typography variant="h6" sx={{ marginTop: "1em", textAlign: "left" }}>
            These are the contents summarized after watching a YouTube lecture called 'Getting Drunk with React Hooks'.
            <br />This lecture was written by ByulCoding.
          </Typography>
        </p>
      <iframe
        width="750"
        height="400"
        style={{ marginTop: "6em" }}
        src="https://www.youtube.com/embed/G3qglTF-fFI"
        title="useState"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <iframe
        width="750"
        height="400"
        style={{ marginTop: "6em" }}
        src="https://www.youtube.com/embed/LwvXVEHS638"
        title="useContext + Context API"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <iframe
        width="750"
        height="400"
        style={{ marginTop: "6em" }}
        src="https://www.youtube.com/embed/S6POUU2-tr8"
        title="Custom Hooks"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      </div>
    </div>
  );
};

export default Home;
import React from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './Header.module.scss';

const Header = () => {

  const navigate = useNavigate();

  return (
    <div className={`${classes.storybrainResets} ${classes.root}`}>
      <div className={classes.drunk} onClick={() => navigate("/home")}>Drunk with React Hooks</div>
      <div className={classes.useState} onClick={() => navigate("/useState")}>useState</div>
    </div>
  );
};

export default Header;
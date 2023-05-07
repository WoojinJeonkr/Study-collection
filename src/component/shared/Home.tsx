import { Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  
  // move page
  const onMoveExPageOne = () => {
    navigate('/useState/uploadClock');
  }

  const onMoveExPageTwo = () => {
    navigate('/useState/uploadText');
  }

  return (
    <>
      <Typography variant="h1">Drunk with React Hooks</Typography>
      <Typography variant="h2">React Hooks - Functional Components</Typography>
      <br />
      <Typography variant="h3">Chapter 1: useState</Typography>
      <Button onClick={onMoveExPageOne}>UpdateClock</Button>
      <Button onClick={onMoveExPageTwo}>UploadText</Button>
    </>
  );
};

export default Home;
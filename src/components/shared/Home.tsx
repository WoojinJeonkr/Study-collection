import { Button, Typography } from '@mui/material';

const Home = () => {

  const onMoveToastUIPage = () => {
    window.location.href = "/toastui";
  }

  return (
    <div>
      <Typography variant='h1'>
        React Editor Hub
      </Typography>
      <Typography variant='h2'>
        Discover the Best Editors for Your React Projects
      </Typography>
      <Button variant="contained" onChange={onMoveToastUIPage}>ToastUI Editor / Viewer</Button>
    </div>
  );
};

export default Home;
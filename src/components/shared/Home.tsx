import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const onMoveToastUIPage = () => {
    navigate("/toastui");
  }

  const onMoveSlashPage = () => {
    navigate("/slash");
  }

  return (
    <div>
      <Typography variant='h1'>
        React Editor Hub
      </Typography>
      <Typography variant='h2'>
        Discover the Best Editors for Your React Projects
      </Typography>
      <Button variant="contained" onClick={onMoveToastUIPage}>ToastUI Editor / Viewer</Button>
      <Button variant="contained" onClick={onMoveSlashPage}>Slash library</Button>
    </div>
  );
};

export default Home;
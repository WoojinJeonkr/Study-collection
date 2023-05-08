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

  const onMoveJotai = () => {
    navigate("/jotai");
  }

  return (
    <div>
      <Typography variant='h1'>
        React Editor Hub
      </Typography>
      <Typography variant='h3' sx={{ color: 'lightgray' }}>
        Discover the Best Editors for Your React Projects
      </Typography>
      <br />
      <Button variant="contained" onClick={onMoveToastUIPage}>ToastUI Editor / Viewer</Button>
      <Button variant="contained" onClick={onMoveSlashPage}>Slash library</Button>
      <Button variant="contained" onClick={onMoveJotai}>Jotai Example</Button>
    </div>
  );
};

export default Home;
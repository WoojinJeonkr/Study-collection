import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <Typography variant='h1'>
        React Editor Hub
      </Typography>
      <Typography variant='h3' sx={{ color: 'lightgray' }}>
        Discover the Best Editors for Your React Projects
      </Typography>
      <br />
      <Button variant="contained" onClick={() => navigate("/toastui")}>ToastUI Editor / Viewer</Button>
      <Button variant="contained" onClick={() => navigate("/slash")}>Slash library</Button>
      <Button variant="contained" onClick={() => navigate("/jotai")}>Jotai Example</Button>
      <Button variant="contained" onClick={() => navigate("/quill")}>React Quill Editor</Button>
    </div>
  );
};

export default Home;
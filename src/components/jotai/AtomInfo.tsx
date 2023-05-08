/* eslint-disable jsx-a11y/iframe-has-title */
import { Box, Button, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";

const AtomInfo = () => {
  const [searchWord, setSearchWord] = useState<string>('');
  const [pageLink, setPageLink] = useState<string>('');
  const navigate = useNavigate();
  const handleSearch = async () => {
    setPageLink(`https://jotai.org/docs/core/${searchWord}`);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(event.target.value);
  }

  const moveToHome = () => {
    navigate('/');
  }

  return (
    <div style={{ height: window.innerHeight }}>
      <Button style={{ float: 'right' }} onClick={moveToHome}>
        <HomeIcon />
      </Button>
      <Typography variant="h4" gutterBottom>
        Search
      </Typography>
      <Box display="flex" alignItems="center">
        <TextField value={searchWord} placeholder="atom" onChange={handleInput} size="small" fullWidth />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </Box>
      {pageLink && (
        <Box mt={3}>
          <iframe 
            style={{ width: '100%', height: window.innerHeight*0.75, border: 0 }}
            src={pageLink}
          />
        </Box>
      )}
    </div>
  )
};

export default AtomInfo;

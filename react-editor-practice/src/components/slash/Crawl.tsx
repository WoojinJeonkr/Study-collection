/* eslint-disable jsx-a11y/iframe-has-title */
import { Typography, Box, Button, Select, MenuItem, SelectChangeEvent, FormControl, InputLabel } from "@mui/material";
import { useState } from "react";
import { SlashLibrary } from "./LibraryList";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";

const Crawl =() => {
  const [searchWord, setSearchWord] = useState<string>('');
  const [pageLink, setPageLink] = useState<string>('');
  const navigate = useNavigate();
  const handleSearch = async () => {
    const findLibrary = SlashLibrary.filter(value => value.name === searchWord);
    setPageLink(findLibrary.map(value => {return value.link})[0]);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSearchWord(event.target.value as string);
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
        <FormControl size="small" fullWidth>
          <InputLabel>Select toss/library when you find...</InputLabel>
          <Select
            label="toss/library"
            value={searchWord}
            onChange={handleChange}
          >
            {SlashLibrary.map((value) => {
              return (
                <MenuItem key={`toss-library-${value.id}`} value={value.name}>{value.name}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
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
}

export default Crawl;
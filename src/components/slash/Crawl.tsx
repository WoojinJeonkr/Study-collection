/* eslint-disable jsx-a11y/iframe-has-title */
import { Typography, Box, Button, Select, MenuItem, SelectChangeEvent, FormControl, InputLabel } from "@mui/material";
import { useState } from "react";
import { SlashLibrary } from "./LibraryList";

const Crawl =() => {
  const [searchWord, setSearchWord] = useState<string>('');
  const [pageLink, setPageLink] = useState<string>('');
  const handleSearch = async () => {
    const findLibrary = SlashLibrary.filter(value => value.name === searchWord);
    setPageLink(findLibrary.map(value => {return value.link})[0]);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSearchWord(event.target.value as string);
  }

  return (
    <div style={{ height: window.innerHeight }}>
      <Typography variant="h4" gutterBottom>
        Search
      </Typography>
      <Box display="flex" alignItems="center">
        <FormControl fullWidth>
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
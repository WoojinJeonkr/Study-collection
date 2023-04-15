import React from "react";
import { Typography } from "@mui/material";

function HeaderTypography(props: { title: string; listCount: number }) {
  const { title, listCount } = props;
  return (
    <>
      <Typography
        variant="h3"
        fontFamily="sans-serif"
        sx={{ mb: 4 }}
        display="inline"
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{ ml: 3, mb: 2 }}
        display="inline"
        color="Highlight"
      >
        총
      </Typography>
      <Typography
        variant="body1"
        sx={{ ml: 1, mb: 2 }}
        display="inline"
        color="tomato"
      >
        {listCount}
      </Typography>
      <Typography
        variant="body1"
        sx={{ mb: 2 }}
        display="inline"
        color="Highlight"
      >
        건
      </Typography>
    </>
  );
}

export default HeaderTypography;

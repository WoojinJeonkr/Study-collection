import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function PrevButton(props: { url: string }) {
  const { url } = props;
  const navigate = useNavigate();
  const onMovePrevPage = () => {
    navigate(url);
  };
  return (
    <Button
      variant="contained"
      sx={{ mt: 2 }}
      color="secondary"
      onClick={onMovePrevPage}
    >
      뒤로 가기
    </Button>
  );
}

export default PrevButton;

import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { checkNickname } from "components";

function NicknameCheckDialog(props: { nickname: string }) {
  const { nickname } = props;
  const [message, setMessage] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const onClickCheck = () => {
    setOpen(true);
    checkNickname(nickname).then((res) => setMessage(res.data));
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="text" onClick={onClickCheck}>
        check
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>알림</DialogTitle>
        <DialogContentText>{message}</DialogContentText>
        <DialogActions>
          <Button variant="text" onClick={handleClose} color="primary">
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default NicknameCheckDialog;

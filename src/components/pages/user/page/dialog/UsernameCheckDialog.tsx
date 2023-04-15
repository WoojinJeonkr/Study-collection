import {
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { checkUsername } from "components";
import React, { useState } from "react";

function UsernameCheckDialog(props: { username: string }) {
  const { username } = props;
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const onClickCheck = () => {
    setOpen(true);
    checkUsername(username).then((res) => setMessage(res.data));
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

export default UsernameCheckDialog;

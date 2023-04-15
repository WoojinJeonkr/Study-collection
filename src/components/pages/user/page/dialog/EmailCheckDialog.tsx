import {
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { checkEmail } from "components";
import React, { useState } from "react";

function EmailCheckDialog(props: { email: string }) {
  const { email } = props;
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const onClickCheck = () => {
    setOpen(true);
    checkEmail(email).then((res) => setMessage(res.data));
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={onClickCheck}>check</Button>
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

export default EmailCheckDialog;

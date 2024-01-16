import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { deleteFaq } from "components";
import React, { useState } from "react";

function FaqDeleteDialog(props: { id: number }) {
  const [open, setOpen] = useState<boolean>(false);
  const { id } = props;
  const user = JSON.parse(
    sessionStorage.getItem("user") as unknown as string,
  )?.username;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteButton = () => {
    deleteFaq(id, user).then(() => {
      window.location.replace("/faq");
    });
  };

  return (
    <>
      <Button
        variant="text"
        color="error"
        sx={{ mr: 1, mb: 2, float: "right" }}
        onClick={handleClickOpen}
      >
        삭제
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>삭제</DialogTitle>
        <DialogContent>
          <DialogContentText>
            삭제 버튼을 누르시면 해당 FAQ가 삭제됩니다.
            <br /> 삭제하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleDeleteButton}>삭제</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default FaqDeleteDialog;

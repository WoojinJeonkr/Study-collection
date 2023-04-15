import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate, useParams } from "react-router-dom";
import { deletePolicy } from "components";

function PolicyDeleteDialog() {
  const id = useParams()?.id as unknown as number;
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const onClickDeleteIcon = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onMoveFirstPage = () => {
    navigate("/policy");
  };

  const handleDeleteButton = () => {
    deletePolicy(id);
    onMoveFirstPage();
  };

  return (
    <>
      <IconButton
        edge="start"
        color="error"
        aria-label="delete"
        onClick={onClickDeleteIcon}
        sx={{ float: "right" }}
      >
        <DeleteIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>알림</DialogTitle>
        <DialogContent>
          <DialogContentText>
            삭제 버튼을 누르시면 해당 개인정보 처리방침이 삭제됩니다.
            <br /> 삭제하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" color="primary" onClick={handleClose}>
            취소
          </Button>
          <Button variant="text" color="error" onClick={handleDeleteButton}>
            삭제
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default PolicyDeleteDialog;

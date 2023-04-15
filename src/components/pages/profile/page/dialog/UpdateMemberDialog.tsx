import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { updateUser } from "components";

function UpdateMemberDialog(props: {
  username: string;
  password: string;
  nickname: string;
  email: string;
}) {
  const { username, password, nickname, email } = props;
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateButton = () => {
    updateUser(username, password, nickname, email).then(() =>
      window.location.replace("/"),
    );
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 1, mr: 1, float: "right" }}
        color="warning"
        onClick={handleClickOpen}
      >
        회원 정보 수정
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>알림</DialogTitle>
        <DialogContent>
          <DialogContentText>
            수정 버튼 클릭 시 입력하신 정보로 회원 정보가 수정되며
            <br />
            메인 화면으로 이동합니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" color="error" onClick={handleClose}>
            취소
          </Button>
          <Button variant="text" color="primary" onClick={handleUpdateButton}>
            수정
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default UpdateMemberDialog;

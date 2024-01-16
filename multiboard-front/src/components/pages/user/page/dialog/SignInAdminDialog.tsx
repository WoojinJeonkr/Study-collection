import {
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { createAdmin } from "components";

function SignInAdminDialog(props: {
  username: string;
  password: string;
  nickname: string;
  email: string;
}) {
  const { username, password, nickname, email } = props;
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const onClickButton = () => {
    setOpen(true);
    if (username === "" || password === "" || nickname === "" || email === "") {
      setMessage("입력하신 정보를 확인해주세요.");
      setError(true);
    } else {
      createAdmin(username, password, nickname, email)
        .then(() => {
          setMessage("회원가입되었습니다.");
        })
        .catch((e) => console.log(e));
    }
  };

  const handleClose = () => {
    setOpen(false);
    setError(false);
  };

  const onMoveLoginPage = () => {
    window.location.replace("/login");
  };
  return (
    <>
      <Button
        variant="contained"
        onClick={onClickButton}
        fullWidth
        sx={{ mt: 2 }}
        startIcon={<HowToRegIcon />}
      >
        회원가입
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>알림</DialogTitle>
        <DialogContentText>{message}</DialogContentText>
        <DialogActions>
          {error === true ? (
            <Button onClick={handleClose}>취소</Button>
          ) : (
            <Button onClick={onMoveLoginPage}>확인</Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}

export default SignInAdminDialog;

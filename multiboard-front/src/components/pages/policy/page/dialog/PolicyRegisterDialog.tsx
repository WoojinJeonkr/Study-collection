import {
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";
import { createPolicy } from "components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PolicyRegisterDialog(props: {
  chapterNum: number;
  title: string;
  content: string;
}) {
  const { chapterNum, title, content } = props;
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [errorOpen, setErrorOpen] = useState<boolean>(false);

  const onClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleErrorClose = () => {
    setErrorOpen(false);
    setOpen(false);
  };

  const handleRegisterButton = () => {
    const registerTitle = `제 ${chapterNum}장. ${title}`;
    if (chapterNum === undefined) {
      setErrorOpen(true);
    } else {
      createPolicy(registerTitle, content, chapterNum).then(() =>
        navigate("/policy"),
      );
    }
  };

  return (
    <>
      <Button
        variant="contained"
        color="success"
        sx={{ mr: 2, float: "right" }}
        onClick={onClickOpen}
      >
        등록
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Paper sx={{ width: "340px" }}>
          <DialogTitle>알림</DialogTitle>
          <DialogContentText sx={{ ml: 2 }}>
            확인 클릭 시 해당 내용이 저장되며
            <br /> 개인정보 처리방침 첫 페이지로 이동합니다.
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleClose} color="error">
              취소
            </Button>
            <Button onClick={handleRegisterButton} color="primary">
              확인
            </Button>
          </DialogActions>
        </Paper>
      </Dialog>
      <Dialog open={errorOpen} onClose={handleErrorClose}>
        <Paper sx={{ width: "340px", height: "164px" }}>
          <DialogTitle>오류</DialogTitle>
          <DialogContentText sx={{ ml: 2, mb: 2 }}>
            챕터 번호를 선택해주세요.
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleErrorClose} color="error">
              취소
            </Button>
          </DialogActions>
        </Paper>
      </Dialog>
    </>
  );
}

export default PolicyRegisterDialog;

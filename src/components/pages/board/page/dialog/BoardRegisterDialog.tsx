import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { createBoard } from "components";

function BoardRegisterDialog(props: {
  title: string;
  content: string;
  writer: string;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const { title, content, writer } = props;

  const onClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onMoveBoardList = () => {
    createBoard(title, content, writer).then(() =>
      window.location.replace("/board"),
    );
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{ mt: 2, float: "right" }}
        color="success"
        onClick={onClickOpen}
      >
        작성
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>알림</DialogTitle>
        <DialogContent>
          확인 버튼 클릭 시 입력하신 내용이 저장되며 목록으로 이동합니다.
        </DialogContent>
        <DialogActions>
          <Button color="error" variant="text" onClick={handleClose}>
            취소
          </Button>
          <Button color="primary" variant="text" onClick={onMoveBoardList}>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default BoardRegisterDialog;

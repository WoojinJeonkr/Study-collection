import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import ReactQuill from "react-quill";
import DOMPurify from "dompurify";
import { createAnswer, formats, modules, Question } from "components";

function AnswerRegisterDialog(props: { question: Question }) {
  const { question } = props;
  const [content, setContent] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [successOpen, setSuccessOpen] = useState<boolean>(false);
  const writer = JSON.parse(
    sessionStorage.getItem("user") as unknown as string,
  )?.nickname;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClickRegisterButton = () => {
    setSuccessOpen(true);
  };

  const handleSuccessClose = () => {
    setSuccessOpen(false);
    setOpen(false);
  };

  const handleRegister = () => {
    createAnswer(question?.id, content, writer).then(() =>
      console.log("작성되었습니다."),
    );
  };

  return (
    <>
      <Button
        variant="text"
        sx={{ float: "right", mr: 1, mb: 1 }}
        startIcon={<CreateIcon />}
        onClick={handleClickOpen}
      >
        답변 등록
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ mt: -2 }}>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(question?.question),
            }}
          />
        </DialogTitle>
        <DialogContent sx={{ height: "48vh", mt: -3, mb: -3 }}>
          <ReactQuill
            modules={modules}
            formats={formats}
            placeholder="질문에 대한 대답을 작성해주세요"
            value={content}
            onChange={setContent}
            style={{ height: "40vh", width: "65vh" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={onClickRegisterButton}>작성</Button>
          <Dialog open={successOpen} onClose={handleSuccessClose}>
            <DialogTitle>알림</DialogTitle>
            <DialogContentText>
              확인 버튼 클릭 시 답변이 등록되며
              <br /> 해당 FAQ 화면으로 이동합니다.
            </DialogContentText>
            <DialogActions>
              <Button onClick={handleSuccessClose} color="error">
                취소
              </Button>
              <Button onClick={handleRegister} color="primary">
                확인
              </Button>
            </DialogActions>
          </Dialog>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AnswerRegisterDialog;

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import { createFaq } from "components";

function FaqRegisterDialog() {
  const [open, setOpen] = useState<boolean>(false);
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const writer = JSON.parse(
    sessionStorage.getItem("user") as unknown as string,
  )?.nickname;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleQuestion = (e: { target: { value: string } }) => {
    const inputQuestion = e.target.value;
    setQuestion(inputQuestion);
  };

  const handleAnswer = (e: { target: { value: string } }) => {
    const inputAnswer = e.target.value;
    setAnswer(inputAnswer);
  };

  const handleRegisterButton = () => {
    createFaq(question, answer, writer).then(() =>
      window.location.replace("/faq"),
    );
  };

  return (
    <>
      <Button
        variant="text"
        sx={{ mt: 2, mr: 2, float: "right" }}
        startIcon={<CreateIcon />}
        onClick={handleClickOpen}
      >
        FAQ 작성하기
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>등록</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="question"
            label="Question"
            fullWidth
            variant="standard"
            onChange={handleQuestion}
          />
          <TextField
            margin="dense"
            id="answer"
            label="Answer"
            fullWidth
            variant="standard"
            onChange={handleAnswer}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleRegisterButton}>등록</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default FaqRegisterDialog;

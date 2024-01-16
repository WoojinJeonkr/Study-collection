import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { updateFaq } from "components";
import React, { useState } from "react";

function FaqUpdateDialog(props: {
  id: number;
  question: string;
  answer: string;
}) {
  const { id, question, answer } = props;
  const [open, setOpen] = useState<boolean>(false);
  const [changeQuestion, setChangeQuestion] = useState<string>(question);
  const [changeAnswer, setChangeAnswer] = useState<string>(answer);

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
    setChangeQuestion(inputQuestion);
  };

  const handleAnswer = (e: { target: { value: string } }) => {
    const inputAnswer = e.target.value;
    setChangeAnswer(inputAnswer);
  };

  const handleUpdateButton = () => {
    updateFaq(id, changeQuestion, changeAnswer, writer).then(() =>
      window.location.replace("/faq"),
    );
  };

  return (
    <>
      <Button
        variant="text"
        color="primary"
        sx={{ mr: 1, mb: 2, float: "right" }}
        onClick={handleClickOpen}
      >
        수정
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>수정</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="question"
            label="Question"
            value={changeQuestion}
            fullWidth
            variant="standard"
            onChange={handleQuestion}
          />
          <TextField
            margin="dense"
            id="answer"
            label="Answer"
            fullWidth
            value={changeAnswer}
            variant="standard"
            onChange={handleAnswer}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleUpdateButton}>수정</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default FaqUpdateDialog;

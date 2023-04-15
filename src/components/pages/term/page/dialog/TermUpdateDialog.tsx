import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  IconButton,
  TextField,
} from "@mui/material";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import { formats, modules, Term, updateTerm } from "components";

function TermUpdateDialog(props: { term: Term }) {
  const { term } = props;
  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(term.title);
  const [content, setContent] = useState<string>(term.content);
  const navigate = useNavigate();

  const handleTitle = (event: { target: { value: string } }) => {
    setTitle(event.target.value);
  };
  const onClickButton = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onMoveFirstPage = () => {
    navigate("/term");
  };

  const handleUpdateButton = () => {
    updateTerm(term.termId, title, content, term.chapterNum)
      .then(onMoveFirstPage)
      .catch((e) => console.log(e));
  };

  return (
    <>
      <IconButton
        edge="start"
        color="warning"
        aria-label="update"
        onClick={onClickButton}
        sx={{ float: "right", mr: 1 }}
      >
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <TextField value={title} onChange={handleTitle} fullWidth autoFocus />
        </DialogTitle>
        <DialogContent sx={{ height: "60vh" }}>
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={content}
            onChange={setContent}
          />
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

export default TermUpdateDialog;

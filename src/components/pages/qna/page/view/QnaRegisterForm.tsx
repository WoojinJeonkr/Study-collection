import {
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import UndoIcon from "@mui/icons-material/Undo";
import { formats, modules, QuestionRegisterDialog } from "components";

function QnaRegisterForm() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const writer = JSON.parse(
    sessionStorage.getItem("user") as unknown as string,
  )?.nickname;
  const navigate = useNavigate();

  const handleTitle = (e: { target: { value: string } }) => {
    setTitle(e.target.value);
  };

  const onMovePrevPage = () => {
    navigate(-1);
  };

  return (
    <div style={{ marginLeft: "5vh", marginRight: "5vh" }}>
      <h1>질문 등록</h1>
      <Paper>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell sx={{ borderBottom: "none" }}>
                <TextField
                  label="제목을 입력해주세요."
                  name="title"
                  value={title}
                  required
                  sx={{ mt: 2 }}
                  fullWidth
                  autoFocus
                  onChange={handleTitle}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ height: "50vh" }}>
                <ReactQuill
                  style={{
                    height: "45vh",
                    marginBottom: "6vh",
                  }}
                  theme="snow"
                  placeholder="내용을 입력해주세요."
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  formats={formats}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <Button
        variant="contained"
        sx={{ mt: 2 }}
        color="secondary"
        startIcon={<UndoIcon />}
        onClick={onMovePrevPage}
      >
        뒤로 가기
      </Button>
      <QuestionRegisterDialog title={title} content={content} writer={writer} />
    </div>
  );
}

export default QnaRegisterForm;

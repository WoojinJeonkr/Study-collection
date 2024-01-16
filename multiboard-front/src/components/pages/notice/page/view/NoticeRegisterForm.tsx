import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { modules, formats, NoticeRegisterDialog } from "components";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

function NoticeRegisterForm() {
  const writer = JSON.parse(
    sessionStorage.getItem("user") as unknown as string,
  )?.nickname;
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const handleTextField = (e: { target: { value: string } }) => {
    const currTitle = e.target.value;
    setTitle(currTitle);
  };

  const onMovePrevPage = () => {
    window.location.replace("/notice");
  };

  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <h1>공지사항 등록</h1>
      <Paper>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <TextField
                  label="제목을 입력해주세요."
                  name="title"
                  value={title}
                  required
                  sx={{ mt: -1, mb: -1 }}
                  fullWidth
                  autoFocus
                  onChange={handleTextField}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ height: "360px" }}>
                <ReactQuill
                  style={{ height: "340px", marginBottom: "40px" }}
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
        onClick={onMovePrevPage}
      >
        뒤로 가기
      </Button>
      <NoticeRegisterDialog title={title} content={content} writer={writer} />
    </div>
  );
}

export default NoticeRegisterForm;

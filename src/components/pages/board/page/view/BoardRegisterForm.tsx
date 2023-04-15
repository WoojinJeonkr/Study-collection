import {
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TextField,
} from "@mui/material";
import { BoardRegisterDialog, formats, modules, PrevButton } from "components";
import React, { useState } from "react";
import ReactQuill from "react-quill";

function BoardRegisterForm() {
  const writer = JSON.parse(
    sessionStorage.getItem("user") as unknown as string,
  )?.nickname;
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleTextField = (e: { target: { value: string } }) => {
    const currTitle = e.target.value;
    setTitle(currTitle);
  };

  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <h1>자유게시판 등록</h1>
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
      <PrevButton url="/board" />
      <BoardRegisterDialog title={title} content={content} writer={writer} />
    </div>
  );
}

export default BoardRegisterForm;

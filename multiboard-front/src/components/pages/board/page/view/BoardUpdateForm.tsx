import {
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Button,
} from "@mui/material";
import { Board, formats, modules } from "components";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import { useNavigate, useLocation } from "react-router-dom";

function BoardUpdateForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { board: Board };
  const { board } = state;
  const writer = JSON.parse(
    sessionStorage.getItem("user") as unknown as string,
  )?.nickname;
  const [changeTitle, setChangeTitle] = useState<string>(board.title);
  const [changeContent, setChangeContent] = useState<string>(board.content);

  const onChangeNoticeTitle = (e: { target: { value: string } }) => {
    setChangeTitle(e.target.value);
  };

  const clickCancelButton = () => {
    navigate(-1);
  };

  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <h2>자유게시판 수정</h2>
      <Paper>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell sx={{ width: "10%" }}>제목</TableCell>
              <TableCell sx={{ width: "90%" }}>
                <TextField
                  name="title"
                  type="text"
                  value={changeTitle}
                  onChange={onChangeNoticeTitle}
                  fullWidth
                  autoFocus
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ width: "10%" }}>작성자</TableCell>
              <TableCell sx={{ width: "90%" }}>
                <TextField
                  name="writer"
                  type="text"
                  value={writer}
                  fullWidth
                  disabled
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>내용</TableCell>
              <TableCell colSpan={5} sx={{ height: "275px", width: "70%" }}>
                <ReactQuill
                  value={changeContent}
                  theme="snow"
                  formats={formats}
                  modules={modules}
                  style={{ marginBottom: "40px", height: "275px" }}
                  onChange={setChangeContent}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <Button variant="contained" sx={{ mt: 2 }} onClick={clickCancelButton}>
        취소
      </Button>
      {/* <Button variant="contained">등록</Button> => button dialog */}
    </div>
  );
}

export default BoardUpdateForm;

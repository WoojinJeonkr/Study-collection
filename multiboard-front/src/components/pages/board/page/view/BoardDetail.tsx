import {
  Button,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TableBody from "@mui/material/TableBody";
import TextField from "@mui/material/TextField";
import ReactQuill from "react-quill";
import DOMPurify from "dompurify";
import { Board, findBoard, formats, modules } from "components";
import dayjs from "dayjs";

function BoardDetail() {
  const id = useParams()?.id as unknown as number;
  const [board, setBoard] = useState<Board>();
  const [comment, setComment] = useState<string>("");
  const boardItem = board as unknown as Board;
  const nickname = JSON.parse(
    sessionStorage.getItem("user") as unknown as string,
  )?.nickname;

  useEffect(() => {
    findBoard(id).then((res) => (res !== null ? setBoard(res.data) : null));
  }, []);

  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <Typography variant="h3" fontFamily="sans-serif" sx={{ mb: 6 }}>
        자유게시판
      </Typography>
      <Table sx={{ width: "90%" }}>
        <TableHead>
          <TableRow>
            <TableCell colSpan={3} sx={{ borderBottom: "none" }}>
              <Typography variant="h5">{boardItem?.title}</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell colSpan={2} sx={{ width: "80%", textAlign: "right" }}>
              {boardItem?.writer}
            </TableCell>
            <TableCell sx={{ width: "10%", textAlign: "right" }}>
              {boardItem?.viewCnt}
            </TableCell>
            <TableCell sx={{ width: "10%", textAlign: "right" }}>
              {dayjs(boardItem?.modifiedDate).format("YYYY년 MM월 DD일")}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell colSpan={5} sx={{ borderBottom: "none" }}>
              <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(boardItem?.content),
                }}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={5}>
              <Stack direction="row" spacing={1} sx={{ ml: "50%" }}>
                <Button variant="contained">{boardItem?.goodCnt}</Button>
                <Button variant="contained">{boardItem?.badCnt}</Button>
              </Stack>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table sx={{ width: "90%" }}>
        <TableHead>
          <TableRow>
            <TableCell>댓글</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <TextField
                size="small"
                margin="normal"
                id="nickname"
                value={nickname}
                disabled
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              value={comment}
              onChange={setComment}
            />
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default BoardDetail;

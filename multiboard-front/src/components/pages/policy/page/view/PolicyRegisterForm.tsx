import {
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import {
  findPolicyChapterList,
  formats,
  modules,
  PolicyRegisterDialog,
} from "components";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";

function PolicyRegisterForm() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [chapterNumList, setChapterNumList] = useState<Array<number>>([]);
  const [chapterNum, setChapterNum] = useState<number>(chapterNumList[0]);

  const handleTitle = (event: { target: { value: string } }) => {
    setTitle(event.target.value);
  };

  const handleChapterNum = (event: { target: { value: string } }) => {
    setChapterNum(event.target.value as unknown as number);
  };

  useEffect(() => {
    findPolicyChapterList().then((res) => setChapterNumList(res.data));
  }, []);

  return (
    <>
      <Typography
        variant="h4"
        sx={{ ml: 2, mt: 2 }}
        fontFamily="sans-serif"
        gutterBottom
      >
        개인정보 처리방침 등록
      </Typography>
      <Paper sx={{ mt: 4, ml: 2, mr: 2, height: "78vh" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ textAlign: "center", borderBottom: "none" }}>
                <Typography variant="body1">제목</Typography>
              </TableCell>
              <TableCell sx={{ borderBottom: "none" }}>
                <TextField
                  value={title}
                  onChange={handleTitle}
                  fullWidth
                  autoFocus
                />
              </TableCell>
              <TableCell
                sx={{ borderBottom: "none", width: "8%", textAlign: "center" }}
              >
                챕터 번호
              </TableCell>
              <TableCell sx={{ borderBottom: "none", width: "8%" }}>
                <Select
                  value={
                    chapterNum === undefined
                      ? ""
                      : (chapterNum as unknown as string)
                  }
                  onChange={handleChapterNum}
                >
                  {chapterNumList.map((num) => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  ))}
                </Select>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ height: "60vh" }}>
              <TableCell sx={{ textAlign: "center", borderBottom: "none" }}>
                내용
              </TableCell>
              <TableCell colSpan={3} sx={{ borderBottom: "none" }}>
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  formats={formats}
                  style={{ height: "50vh", marginBottom: "4vh" }}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <PolicyRegisterDialog
          chapterNum={chapterNum}
          title={title}
          content={content}
        />
      </Paper>
    </>
  );
}

export default PolicyRegisterForm;

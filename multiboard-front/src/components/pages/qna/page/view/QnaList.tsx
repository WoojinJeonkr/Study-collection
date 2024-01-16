import {
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import CreateIcon from "@mui/icons-material/Create";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";
import {
  displayDatePattern,
  findQnaList,
  HeaderTypography,
  Question,
} from "components";

function QnaList() {
  const [questionList, setQuestionList] = useState<Array<Question>>([]);
  const auth = sessionStorage.getItem("auth");
  const navigate = useNavigate();

  const handlerQuestionDetail = (questions: Question) => {
    if (auth === "ROLE_USER" || auth === "ROLE_ADMIN") {
      navigate(`/qna/detail/${questions.id}`, { state: { questions } });
    } else {
      alert("회원만 조회가 가능합니다.");
      navigate("/login");
    }
  };

  const onMoveRegisterQuestion = () => {
    navigate("/qna/create");
  };

  useEffect(() => {
    findQnaList().then((res) => setQuestionList(res.data));
  }, []);

  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <HeaderTypography title="Q&A" listCount={questionList.length} />
      <TableContainer component={Paper} sx={{ mt: 6 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>No</TableCell>
              <TableCell sx={{ textAlign: "center" }}>제목</TableCell>
              <TableCell sx={{ textAlign: "center" }}>작성자</TableCell>
              <TableCell sx={{ textAlign: "center" }}>답변 여부</TableCell>
              <TableCell sx={{ textAlign: "center" }}>질문 일자</TableCell>
              <TableCell sx={{ textAlign: "center" }}>답변 일자</TableCell>
            </TableRow>
          </TableHead>
          {questionList.length !== 0 ? (
            <TableBody>
              {questionList.map((question: Question, idx: number) => {
                const { id, title, writer, answer, modifiedDate } = question;
                return (
                  <TableRow
                    key={id}
                    onClick={() => handlerQuestionDetail(question)}
                  >
                    <TableCell sx={{ textAlign: "center" }}>
                      {idx + 1}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{title}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{writer}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {answer !== null ? (
                        <DoneIcon style={{ color: "success" }} />
                      ) : (
                        <ClearIcon style={{ color: "error" }} />
                      )}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {displayDatePattern(modifiedDate)}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {answer !== null
                        ? displayDatePattern(answer?.modifiedDate)
                        : ""}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          ) : (
            <TableBody>
              <TableRow>
                <TableCell
                  colSpan={6}
                  sx={{
                    height: "390px",
                    backgroundColor: "rgba(196, 0, 11, 0.03)",
                  }}
                >
                  <SearchOffIcon
                    sx={{
                      display: "inline",
                      color: "rgba(0, 0, 0, 0.38)",
                      ml: 75,
                    }}
                  />
                  <Typography
                    sx={{ textAlign: "center", color: "rgba(0, 0, 0, 0.38)" }}
                  >
                    작성된 게시글이 없어요...
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {auth === "ROLE_USER" ? (
        <Button
          startIcon={<CreateIcon />}
          sx={{ mt: 2, float: "right" }}
          variant="contained"
          onClick={onMoveRegisterQuestion}
        >
          질문 작성하기
        </Button>
      ) : (
        <div />
      )}
    </div>
  );
}

export default QnaList;

import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TableHead,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";
import {
  dateFormatSimplePattern,
  findTopFiveQuestion,
  Question,
} from "components";

function MainQnaPage() {
  const [mainQuestionList, setMainQuestionList] = useState<Array<Question>>([]);
  const auth = sessionStorage.getItem("auth");
  const navigate = useNavigate();

  const onMoveQnaDetail = (question: Question) => {
    if (auth === "ROLE_USER" || auth === "ROLE_ADMIN") {
      navigate(`/qna/detail/${question.id}`);
    } else {
      alert("회원만 조회가 가능합니다.");
      if (sessionStorage.getItem("jwt") !== null) {
        window.location.replace("/");
      } else {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    findTopFiveQuestion().then((res) => setMainQuestionList(res.data));
  }, []);

  return (
    <>
      <Typography
        variant="h5"
        sx={{ mt: 0.5, ml: 2, mb: 2, fontFamily: "sans-serif" }}
      >
        Q&A
      </Typography>
      <Table sx={{ ml: 2, width: "95%" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ textAlign: "center" }}>질문 제목</TableCell>
            <TableCell sx={{ textAlign: "center" }}>답변 여부</TableCell>
            <TableCell sx={{ textAlign: "center" }}>질문 일자</TableCell>
            <TableCell sx={{ textAlign: "center" }}>답변 일자</TableCell>
          </TableRow>
        </TableHead>
        {mainQuestionList.length !== 0 ? (
          <TableBody>
            {mainQuestionList.map((question: Question) => {
              return (
                <TableRow
                  key={question.id}
                  sx={{ backgroundColor: "#F8FCFD", height: "5vh" }}
                  onClick={() => onMoveQnaDetail(question)}
                >
                  <TableCell sx={{ textAlign: "center" }}>
                    {question.title}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {question.answer !== null ? (
                      <DoneIcon
                        style={{ color: "success", fontSize: "small" }}
                      />
                    ) : (
                      <ClearIcon
                        style={{ color: "error", fontSize: "small" }}
                      />
                    )}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {dateFormatSimplePattern(question.modifiedDate)}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {question.answer !== null
                      ? dateFormatSimplePattern(question.answer.modifiedDate)
                      : ""}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        ) : (
          <TableBody>
            <TableRow sx={{ height: "260px" }}>
              <TableCell colSpan={4} sx={{ borderBottom: "none" }}>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "rgba(0, 0, 0, 0.38)",
                  }}
                >
                  작성된 게시글이 아직 없어요...
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
    </>
  );
}

export default MainQnaPage;

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import { dateFormatter, Question } from "components";
import React from "react";

function UserRecentlyQuestion(props: { question: Question | undefined }) {
  const { question } = props;
  const recentlyQuestion = question as unknown as Question;

  const onMoveRecentQuestion = () => {
    window.location.replace(`/qna/detail/${recentlyQuestion?.id}`);
  };

  return (
    <Table sx={{ ml: 1 }}>
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography variant="h5" sx={{ fontFamily: "sans-serif" }}>
              QnA
            </Typography>
          </TableCell>
          <TableCell
            colSpan={3}
            sx={{ textAlign: "right", verticalAlign: "bottom" }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "sans-serif",
                fontSize: "small",
              }}
              onClick={() => window.location.replace("/qna")}
            >
              {">>"} 더보기
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow sx={{ backgroundColor: "#F6F7F8" }}>
          <TableCell sx={{ textAlign: "center" }}>제목</TableCell>
          <TableCell sx={{ textAlign: "center" }}>답변 여부</TableCell>
          <TableCell sx={{ textAlign: "center" }}>작성 시간</TableCell>
          <TableCell sx={{ textAlign: "center" }}>수정 시간</TableCell>
        </TableRow>
      </TableHead>
      {recentlyQuestion !== undefined ? (
        <TableBody>
          <TableRow onClick={onMoveRecentQuestion}>
            <TableCell sx={{ textAlign: "center" }}>
              {recentlyQuestion?.title}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {recentlyQuestion?.answer !== undefined
                ? "답변 완료"
                : "답변 대기 중"}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {dateFormatter(recentlyQuestion?.createdDate)}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {dateFormatter(recentlyQuestion?.modifiedDate)}
            </TableCell>
          </TableRow>
        </TableBody>
      ) : (
        <TableBody>
          <TableRow>
            <TableCell colSpan={6} sx={{ textAlign: "center" }}>
              아직 작성한 게시글이 없습니다.
            </TableCell>
          </TableRow>
        </TableBody>
      )}
    </Table>
  );
}

export default UserRecentlyQuestion;

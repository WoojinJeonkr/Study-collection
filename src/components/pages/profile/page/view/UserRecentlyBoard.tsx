import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import { Board, dateFormatter } from "components";
import React from "react";

function UserRecentlyBoard(props: { board: Board | undefined }) {
  const { board } = props;
  const recentlyBoard = board as unknown as Board;
  return (
    <Table sx={{ ml: 1, mt: 1 }}>
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography variant="h5" sx={{ fontFamily: "sans-serif" }}>
              자유게시판
            </Typography>
          </TableCell>
          <TableCell
            colSpan={5}
            sx={{ textAlign: "right", verticalAlign: "bottom" }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "sans-serif",
                fontSize: "small",
              }}
              onClick={() => window.location.replace("/board")}
            >
              {">>"} 더보기
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow sx={{ backgroundColor: "#F6F7F8" }}>
          <TableCell sx={{ textAlign: "center" }}>제목</TableCell>
          <TableCell sx={{ textAlign: "center" }}>추천</TableCell>
          <TableCell sx={{ textAlign: "center" }}>비추천</TableCell>
          <TableCell sx={{ textAlign: "center" }}>조회</TableCell>
          <TableCell sx={{ textAlign: "center" }}>작성 시간</TableCell>
          <TableCell sx={{ textAlign: "center" }}>수정 시간</TableCell>
        </TableRow>
      </TableHead>
      {board !== undefined ? (
        <TableBody>
          <TableRow
            onClick={() =>
              window.location.replace(`/board/detail/${recentlyBoard?.id}`)
            }
          >
            <TableCell sx={{ textAlign: "center" }}>
              {recentlyBoard?.title}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {recentlyBoard?.goodCnt}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {recentlyBoard?.badCnt}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {recentlyBoard?.viewCnt}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {dateFormatter(recentlyBoard?.createdDate)}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {dateFormatter(recentlyBoard?.modifiedDate)}
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

export default UserRecentlyBoard;

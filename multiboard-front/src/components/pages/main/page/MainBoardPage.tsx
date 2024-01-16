import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TableHead,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Board, dateFormatPattern, findTopFiveBoard } from "components";

function MainBoardPage() {
  const [mainBoardList, setMainBoardList] = useState<Array<Board>>([]);
  const navigate = useNavigate();
  const auth = sessionStorage.getItem("auth");

  useEffect(() => {
    findTopFiveBoard().then((res) => setMainBoardList(res.data));
  }, []);

  const handleMainBoardDetail = (board: Board) => {
    if (auth === "ROLE_USER" || auth === "ROLE_ADMIN") {
      navigate(`/board/detail/${board.id}`);
    } else {
      alert("회원만 조회가 가능합니다.");
      if (sessionStorage.getItem("jwt") !== null) {
        window.location.replace("/");
      } else {
        navigate("/login");
      }
    }
  };

  return (
    <>
      <Typography
        variant="h5"
        sx={{ mt: 2, ml: 2, mb: 2, fontFamily: "sans-serif" }}
      >
        자유게시판
      </Typography>
      <Table sx={{ ml: 2, width: "100%" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ textAlign: "center" }}>제목</TableCell>
            <TableCell sx={{ textAlign: "center" }}>작성자</TableCell>
            <TableCell sx={{ textAlign: "center" }}>추천</TableCell>
            <TableCell sx={{ textAlign: "center" }}>비추천</TableCell>
            <TableCell sx={{ textAlign: "center" }}>조회 수</TableCell>
            <TableCell sx={{ textAlign: "center" }}>작성/수정 일자</TableCell>
          </TableRow>
        </TableHead>
        {mainBoardList.length !== 0 ? (
          <TableBody>
            {mainBoardList.map((board: Board) => {
              return (
                <TableRow
                  onClick={() => handleMainBoardDetail(board)}
                  key={board.id}
                  sx={{ backgroundColor: "#F8FCFD", height: "5vh" }}
                >
                  <TableCell sx={{ textAlign: "center" }}>
                    {board.title}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {board.writer}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {board.goodCnt}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {board.badCnt}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {board.viewCnt}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {dateFormatPattern(board.modifiedDate)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        ) : (
          <TableBody>
            <TableRow sx={{ height: "300px" }}>
              <TableCell colSpan={6} sx={{ borderBottom: "none" }}>
                <Typography
                  sx={{ textAlign: "center", color: "rgba(0, 0, 0, 0.38)" }}
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

export default MainBoardPage;

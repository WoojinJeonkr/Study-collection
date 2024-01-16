import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Typography,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import CreateIcon from "@mui/icons-material/Create";
import { Board, findBoardListDesc, HeaderTypography } from "components";
import dayjs from "dayjs";

function BoardList() {
  const [findBoardList, setfindBoardList] = useState<Array<Board>>([]);
  const navigate = useNavigate();
  const auth = sessionStorage.getItem("auth");

  const handlerBoardDetail = (board: Board) => {
    const { id } = board;
    if (auth === "ROLE_USER" || auth === "ROLE_ADMIN") {
      navigate(`/board/detail/${id}`);
    } else {
      alert("회원만 조회가 가능합니다.");
      navigate("/login");
    }
  };

  const onMoveRegisterBoard = () => {
    navigate("/board/create");
  };

  useEffect(() => {
    findBoardListDesc().then((items) => setfindBoardList(items.data));
  }, []);

  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <HeaderTypography title="자유게시판" listCount={findBoardList.length} />
      <TableContainer component={Paper} sx={{ mt: 6 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>No</TableCell>
              <TableCell sx={{ textAlign: "center" }}>제목</TableCell>
              <TableCell sx={{ textAlign: "center" }}>작성자</TableCell>
              <TableCell sx={{ textAlign: "center" }}>조회 수</TableCell>
              <TableCell sx={{ textAlign: "center" }}>추천 / 비추천</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                작성 / 수정 일자
              </TableCell>
            </TableRow>
          </TableHead>
          {findBoardList.length !== 0 ? (
            <TableBody>
              {findBoardList.map((board: Board, idx: number) => {
                const {
                  title,
                  writer,
                  viewCnt,
                  goodCnt,
                  badCnt,
                  modifiedDate,
                } = board;
                return (
                  <TableRow
                    onClick={() => handlerBoardDetail(board)}
                    key={board.id}
                  >
                    <TableCell sx={{ textAlign: "center" }}>
                      {idx + 1}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{title}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{writer}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {viewCnt}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {goodCnt} / {badCnt}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {dayjs(modifiedDate).format("YYYY년 MM월 DD일")}
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
      {auth !== null ? (
        <Button
          endIcon={<CreateIcon />}
          sx={{ mt: 2, float: "right" }}
          onClick={onMoveRegisterBoard}
          variant="contained"
        >
          자유게시판 등록
        </Button>
      ) : (
        <div />
      )}
    </div>
  );
}

export default BoardList;

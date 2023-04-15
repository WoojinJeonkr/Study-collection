import React, { useState, useEffect } from "react";
import {
  TableCell,
  TableRow,
  Table,
  TableBody,
  TableContainer,
  Paper,
  TableHead,
  Button,
  Typography,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { useNavigate } from "react-router-dom";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import { findNoticeList, HeaderTypography, Notice } from "components";
import dayjs from "dayjs";

function NoticeList() {
  const [findList, setfindList] = useState<Array<Notice>>([]);
  const navigate = useNavigate();
  const auth = sessionStorage.getItem("auth");

  const handlerNoticeDetail = (notice: Notice) => {
    if (auth === "ROLE_USER" || auth === "ROLE_ADMIN") {
      navigate(`/notice/detail/${notice.id}`);
    } else {
      alert("회원만 조회가 가능합니다.");
      navigate("/login");
    }
  };

  const onMoveCreateNotice = () => {
    navigate("/notice/create");
  };

  useEffect(() => {
    findNoticeList().then((items) => setfindList(items.data));
  }, []);

  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <HeaderTypography title="공지사항" listCount={findList.length} />
      <TableContainer component={Paper} sx={{ mt: 6 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>No</TableCell>
              <TableCell sx={{ textAlign: "center" }}>제목</TableCell>
              <TableCell sx={{ textAlign: "center" }}>작성자</TableCell>
              <TableCell sx={{ textAlign: "center" }}>조회 수</TableCell>
              <TableCell sx={{ textAlign: "center" }}>작성/수정 일자</TableCell>
            </TableRow>
          </TableHead>
          {findList.length !== 0 ? (
            <TableBody>
              {findList.map((notice: Notice, idx: number) => {
                const { id, title, writer, viewCnt, modifiedDate } = notice;
                return (
                  <TableRow
                    onClick={() => handlerNoticeDetail(notice)}
                    key={id}
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
                  colSpan={5}
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
                    작성된 공지사항이 없어요...
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {auth === "ROLE_ADMIN" ? (
        <Button
          id="noticeCreateButton"
          startIcon={<CreateIcon />}
          sx={{ mt: 2, float: "right" }}
          onClick={onMoveCreateNotice}
          variant="contained"
        >
          글쓰기
        </Button>
      ) : (
        <div />
      )}
    </div>
  );
}

export default NoticeList;

import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TableHead,
} from "@mui/material";
import { dateFormatSimplePattern, findTopFiveNotice, Notice } from "components";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MainNoticePage() {
  const [mainNoticeList, setMainNoticeList] = useState<Array<Notice>>([]);
  const navigate = useNavigate();
  const auth = sessionStorage.getItem("auth");

  useEffect(() => {
    findTopFiveNotice().then((res) => setMainNoticeList(res.data));
  }, []);

  const handleMainNoticeDetail = (notice: Notice) => {
    if (auth === "ROLE_USER" || auth === "ROLE_ADMIN") {
      navigate(`/notice/detail/${notice.id}`);
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
        공지사항
      </Typography>
      <Table sx={{ ml: 2, width: "100%" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ textAlign: "center" }}>제목</TableCell>
            <TableCell sx={{ textAlign: "center" }}>작성자</TableCell>
            <TableCell sx={{ textAlign: "center" }}>조회수</TableCell>
            <TableCell sx={{ textAlign: "center" }}>작성/수정 일자</TableCell>
          </TableRow>
        </TableHead>
        {mainNoticeList.length !== 0 ? (
          <TableBody>
            {mainNoticeList.map((notice: Notice) => {
              const { title, writer, viewCnt, modifiedDate } = notice;
              return (
                <TableRow
                  onClick={() => handleMainNoticeDetail(notice)}
                  key={notice.id}
                  sx={{ backgroundColor: "#F8FCFD" }}
                >
                  <TableCell sx={{ textAlign: "center" }}>{title}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{writer}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{viewCnt}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {dateFormatSimplePattern(modifiedDate)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        ) : (
          <TableBody>
            <TableRow sx={{ height: "280px" }}>
              <TableCell
                colSpan={4}
                sx={{ textAlign: "center", borderBottom: "none" }}
              >
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

export default MainNoticePage;

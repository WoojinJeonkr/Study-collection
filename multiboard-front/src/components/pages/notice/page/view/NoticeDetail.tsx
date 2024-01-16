/* eslint-disable react/destructuring-assignment */
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import { findNotice, Notice, NoticeDeleteDialog } from "components";
import DOMPurify from "dompurify";
import dayjs from "dayjs";

function NoticeDetail() {
  const navigate = useNavigate();
  const [notice, setNotice] = useState<Notice>();
  const param = useParams();
  const noticeId = param?.id as unknown as number;
  const nickname = JSON.parse(
    sessionStorage.getItem("user") as unknown as string,
  )?.nickname;
  const auth: boolean = sessionStorage.getItem("auth") === "USER_ROLE";

  const onMoveList = () => {
    navigate("/notice");
  };

  const onMoveUpdateNotice = () => {
    navigate(`/notice/update/${noticeId}`, {
      state: { notice },
    });
  };

  useEffect(() => {
    findNotice(noticeId).then((items) => setNotice(items.data));
  }, []);

  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <h2>공지사항 상세보기</h2>
      <TableContainer component={Paper} sx={{ mt: 6 }}>
        <Table>
          <TableBody>
            <TableRow sx={{ borderBottom: "none" }}>
              <TableCell
                sx={{
                  ml: 2,
                  justifyContent: "center",
                  width: "40%",
                  borderBottom: "inherit",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                {notice?.title}
              </TableCell>
              <TableCell sx={{ borderBottom: "inherit" }}>작성자</TableCell>
              <TableCell sx={{ borderBottom: "inherit" }}>
                {notice?.writer}
              </TableCell>
              <TableCell sx={{ borderBottom: "inherit" }}>
                작성 / 수정 일자
              </TableCell>
              <TableCell sx={{ borderBottom: "inherit" }}>
                {dayjs(notice?.modifiedDate as unknown as string).format(
                  "YYYY년 MM월 DD일",
                )}
              </TableCell>
            </TableRow>
            {notice ? (
              <TableRow>
                <TableCell colSpan={5} sx={{ height: "300px", width: "70%" }}>
                  <div
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        notice?.content as unknown as string,
                      ),
                    }}
                  />
                </TableCell>
              </TableRow>
            ) : (
              <TableRow />
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={onMoveList}
        startIcon={<FormatListNumberedIcon />}
      >
        목록으로 이동
      </Button>
      {auth ? (
        <>
          <NoticeDeleteDialog noticeId={noticeId} nickname={nickname} />
          <Button
            variant="contained"
            sx={{ mt: 2, float: "right" }}
            color="secondary"
            onClick={onMoveUpdateNotice}
          >
            수정
          </Button>
        </>
      ) : (
        <div />
      )}
    </div>
  );
}

export default NoticeDetail;

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { updateNotice } from "components";
import React, { useState } from "react";

function NoticeUpdateDialog(props: {
  noticeId: number;
  title: string;
  content: string;
  writer: string;
}) {
  const { noticeId, title, content, writer } = props;
  const [successOpen, setSuccessOpen] = useState<boolean>(false);
  const [failOpen, setFailOpen] = useState<boolean>(false);

  const handleSuccessOpen = () => {
    setSuccessOpen(true);
  };

  const handleFailOpen = () => {
    setFailOpen(true);
  };

  const handleFailClose = () => {
    setFailOpen(false);
  };

  const handleNoticeUpdateButton = () => {
    if (title.length > 0 && content.length > 0) {
      updateNotice(noticeId, title, content, writer).then(handleSuccessOpen);
    } else {
      handleFailOpen();
    }
  };

  const onMoveNoticeDetail = () => {
    window.location.replace(`/notice/detail/${noticeId}`);
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{ mt: 2, float: "right" }}
        color="secondary"
        onClick={handleNoticeUpdateButton}
      >
        수정
      </Button>
      <Dialog open={successOpen}>
        <DialogTitle>알림</DialogTitle>
        <DialogContent>
          <DialogContentText>
            공지사항이 정상적으로 수정되었습니다.
            <br /> 확인 버튼 클릭 시 상세 화면으로 이동합니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onMoveNoticeDetail} autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={failOpen} onClose={handleFailClose}>
        <DialogTitle>오류</DialogTitle>
        <DialogContent>
          <DialogContentText>
            공지사항 수정 중 오류가 발생했습니다.
            <br /> 입력하신 정보를 다시 한 번 확인해주세요.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFailClose} autoFocus>
            취소
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default NoticeUpdateDialog;

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { deleteNotice, onMoveNoticeList } from "components";
import React, { useState } from "react";

function NoticeDeleteDialog(props: { noticeId: number; nickname: string }) {
  const { noticeId, nickname } = props;
  const [successOpen, setSuccessOpen] = useState<boolean>(false);

  const handleSuccessOpen = () => {
    setSuccessOpen(true);
  };

  const handleDeleteNotice = () => {
    deleteNotice(noticeId, nickname).then(handleSuccessOpen);
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{ mt: 2, ml: 1, float: "right" }}
        color="error"
        onClick={handleDeleteNotice}
      >
        삭제
      </Button>
      <Dialog open={successOpen}>
        <DialogTitle>알림</DialogTitle>
        <DialogContent>
          <DialogContentText>
            공지사항이 정상적으로 삭제되었습니다.
            <br /> 확인 버튼 클릭 시 목록으로 이동합니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onMoveNoticeList} autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default NoticeDeleteDialog;

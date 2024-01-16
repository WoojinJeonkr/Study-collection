import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import React, { useState } from "react";
import { createNotice, onMoveNoticeList } from "components";

function NoticeRegisterDialog(props: {
  title: string;
  content: string;
  writer: string;
}) {
  const { title, content, writer } = props;
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

  const registerNotice = () => {
    if (title.length > 0 && content.length > 0) {
      createNotice(title, content, writer).then(handleSuccessOpen);
    } else {
      handleFailOpen();
    }
  };

  return (
    <>
      <Button
        variant="contained"
        color="success"
        startIcon={<CreateIcon />}
        sx={{ mt: 2, float: "right" }}
        onClick={registerNotice}
      >
        글쓰기
      </Button>
      <Dialog open={successOpen}>
        <DialogTitle>알림</DialogTitle>
        <DialogContent>
          <DialogContentText>
            공지사항이 작성되었습니다.
            <br /> 확인 버튼 클릭 시 목록으로 이동합니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onMoveNoticeList} autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={failOpen} onClose={handleFailClose}>
        <DialogTitle>오류</DialogTitle>
        <DialogContent>
          <DialogContentText>
            작성에 실패했습니다. <br />
            입력하신 정보를 확인해주세요.
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

export default NoticeRegisterDialog;

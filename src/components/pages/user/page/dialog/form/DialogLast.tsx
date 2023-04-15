import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import React from "react";

function DialogLast(props: { open: boolean; close: () => void }) {
  const { open, close } = props;
  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle sx={{ color: "#716C85", fontWeight: "bold" }}>
        결과
      </DialogTitle>
      <DialogContent>
        정상적으로 비밀번호가 변경되었습니다. <br /> 다시 로그인해주세요.
      </DialogContent>
      <DialogActions>
        <Button variant="text" color="success" onClick={close}>
          로그인하기
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogLast;

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  SxProps,
  Theme,
} from "@mui/material";
import React, { useState } from "react";

export default function LogoutDialog(props: {
  styles: SxProps<Theme>;
  size: "small" | "medium" | "large" | undefined;
}) {
  const [open, setOpen] = useState(false);
  const { styles, size } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // 로그아웃
  const handleLogoutButton = () => {
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("expireTime");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("auth");
    if (sessionStorage.length < 1) {
      window.location.replace("/login");
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        sx={styles}
        onClick={handleClickOpen}
        size={size}
      >
        로그아웃
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>로그아웃하시겠습니까?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            로그아웃 버튼 클릭 시 로그아웃되며 로그인 페이지로 이동합니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleLogoutButton} autoFocus>
            로그아웃
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

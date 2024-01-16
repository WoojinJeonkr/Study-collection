import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  SxProps,
  Theme,
} from "@mui/material";
import Button from "@mui/material/Button";
import { deleteUser } from "components";
import { useState } from "react";

export default function DeleteDialog(props: {
  styles: SxProps<Theme>;
  nickname: string;
  size: "small" | "medium" | "large" | undefined;
}) {
  const [open, setOpen] = useState(false);
  const { nickname, styles, size } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteButton = () => {
    deleteUser(nickname)
      .then(() => {
        sessionStorage.removeItem("jwt");
        sessionStorage.removeItem("expireTime");
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("auth");
        window.location.replace("/login");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <Button
        variant="contained"
        color="error"
        sx={styles}
        onClick={handleClickOpen}
        size={size}
      >
        회원 탈퇴
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>회원 탈퇴하시겠습니까?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            탈퇴 버튼 클릭 시 로그인 페이지로 이동하며 <br /> 해당 계정과 관련된
            정보가 삭제됩니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleDeleteButton} autoFocus>
            탈퇴
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

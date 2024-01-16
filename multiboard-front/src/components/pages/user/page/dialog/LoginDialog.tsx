import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { onLogin } from "components";

export type Auth = {
  [idx: number]: string[];
};

function LoginDialog(props: { inputUsername: string; inputPassword: string }) {
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

  const onMoveMain = () => {
    window.location.replace("/");
  };

  const { inputUsername, inputPassword } = props;
  const loginHandler = (username: string, password: string) => {
    onLogin(username, password)
      .then((res) => {
        const { token } = res.data;
        const expireTime = res.headers["access-control-max-age"];
        sessionStorage.setItem("jwt", token);
        sessionStorage.setItem("expireTime", expireTime);
        handleSuccessOpen();
      })
      .catch(handleFailOpen);
  };

  return (
    <div>
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        startIcon={<LoginIcon />}
        onClick={() => loginHandler(inputUsername, inputPassword)}
      >
        로그인
      </Button>
      <Dialog open={successOpen}>
        <DialogTitle>알림</DialogTitle>
        <DialogContent>
          <DialogContentText>
            로그인되었습니다. <br /> 확인 버튼 클릭 시 메인화면으로 이동합니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onMoveMain} autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={failOpen}
        onClose={handleFailClose}
        sx={{ paper: { minWidth: "500px" } }}
      >
        <DialogTitle>알림</DialogTitle>
        <DialogContent>
          <DialogContentText>
            로그인에 실패했습니다. 입력하신 정보를 확인해주세요.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFailClose} autoFocus>
            취소
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LoginDialog;

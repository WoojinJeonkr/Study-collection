import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { updateNotAllowedNickname } from "components";
import { useState } from "react";

export default function ManagementUpdateDialog(props: { nickname: string }) {
  const { nickname } = props;
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

  const handleUpdateButton = (lastNickname: string) => {
    const userNickname = JSON.parse(
      sessionStorage.getItem("user") as unknown as string,
    )?.nickname;
    if (lastNickname === userNickname) {
      handleFailOpen();
    } else {
      const changedNickname = "부적절한 닉네임";
      updateNotAllowedNickname(lastNickname, changedNickname).then(
        handleSuccessOpen,
      );
    }
  };

  const onMoveManagement = () => {
    window.location.replace("/management");
  };

  return (
    <div>
      <Button
        variant="contained"
        color="warning"
        size="small"
        onClick={() => handleUpdateButton(nickname)}
      >
        닉네임 변경
      </Button>
      <Dialog open={successOpen}>
        <DialogTitle>알림</DialogTitle>
        <DialogContent>
          <DialogContentText>
            변경되었습니다. <br /> 확인 버튼 클릭 시 회원 관리 화면으로
            이동합니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onMoveManagement} autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={failOpen} onClose={handleFailClose}>
        <DialogTitle>오류</DialogTitle>
        <DialogContent>
          <DialogContentText>
            본인입니다. 회원 수정을 시도하셨나요? <br /> 회원 수정은 메뉴 {">"}
            프로필 에서 진행할 수 있습니다.
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

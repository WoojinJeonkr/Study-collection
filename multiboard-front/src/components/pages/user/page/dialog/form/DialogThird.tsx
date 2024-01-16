import {
  Dialog,
  DialogTitle,
  DialogContent,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import React from "react";

function DialogThird(props: {
  open: boolean;
  close: () => void;
  password: string;
  handlePassword: (e: { target: { value: string } }) => void;
  backToThird: () => void;
  onChangePassword: () => void;
}) {
  const {
    open,
    close,
    password,
    handlePassword,
    backToThird,
    onChangePassword,
  } = props;
  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle sx={{ color: "#716C85", fontWeight: "bold" }}>
        비밀번호 변경
      </DialogTitle>
      <DialogContent>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell sx={{ borderBottom: "none" }}>
                새로운 비밀번호
              </TableCell>
              <TableCell sx={{ borderBottom: "none" }}>
                <Tooltip
                  title="8 ~ 12글자로 입력해주세요."
                  placement="bottom-start"
                >
                  <TextField
                    size="small"
                    value={password}
                    onChange={handlePassword}
                  />
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "space-between" }}>
        <Button variant="text" color="secondary" onClick={backToThird}>
          뒤로 가기
        </Button>
        <Button
          variant="text"
          color="warning"
          onClick={onChangePassword}
          disabled={
            password === "" ||
            !password.toLowerCase().match(/^[a-zA-Z0-9]{8,12}$/)
          }
        >
          비밀번호 변경
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogThird;

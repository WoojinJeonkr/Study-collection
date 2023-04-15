import {
  Dialog,
  DialogTitle,
  DialogContent,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import React from "react";

function DialogFirst(props: {
  nickName: string;
  open: boolean;
  close: () => void;
  handleNickname: (e: { target: { value: string } }) => void;
  handleClose: () => void;
  handleNext: () => void;
}) {
  const { nickName, open, close, handleNickname, handleClose, handleNext } =
    props;
  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle sx={{ color: "#716C85", fontWeight: "bold" }}>
        계정 정보 확인 절차
      </DialogTitle>
      <DialogContent>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell sx={{ borderBottom: "none" }}>닉네임</TableCell>
              <TableCell sx={{ borderBottom: "none" }}>
                <TextField
                  size="small"
                  value={nickName}
                  onChange={handleNickname}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "space-between" }}>
        <Button variant="text" onClick={handleClose} color="error">
          취소
        </Button>
        <Button variant="text" onClick={handleNext} color="warning">
          회원 정보 조회
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogFirst;

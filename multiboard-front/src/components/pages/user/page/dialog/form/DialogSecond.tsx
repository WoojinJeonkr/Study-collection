import {
  Dialog,
  DialogTitle,
  DialogContent,
  Table,
  TableBody,
  TableRow,
  TableCell,
  DialogActions,
  Button,
} from "@mui/material";
import { User } from "components/pages/user/model/User";
import dayjs from "dayjs";
import React from "react";

function DialogSecond(props: {
  info: User;
  open: boolean;
  close: () => void;
  onMoveLogin: () => void;
  handleNext: () => void;
  onMoveRegister: () => void;
}) {
  const { info, open, close, onMoveLogin, handleNext, onMoveRegister } = props;
  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle sx={{ color: "#716C85", fontWeight: "bold" }}>
        조회된 계정 정보
      </DialogTitle>
      <DialogContent>
        {info ? (
          <Table>
            <TableBody>
              <TableRow>
                <TableCell sx={{ borderBottom: "none" }}>아이디</TableCell>
                <TableCell sx={{ borderBottom: "none" }}>
                  {info.username}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: "none" }}>닉네임</TableCell>
                <TableCell sx={{ borderBottom: "none" }}>
                  {info.nickname}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: "none" }}>생성 날짜</TableCell>
                <TableCell sx={{ borderBottom: "none" }}>
                  {dayjs(info.createdDate).format("YYYY년 MM월 DD일 hh:mm:ss")}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ) : (
          <div>
            보유하신 회원 정보가 없습니다. <br /> 회원가입을 진행해주세요.
          </div>
        )}
      </DialogContent>
      {info ? (
        <DialogActions sx={{ justifyContent: "space-between" }}>
          <Button variant="text" color="success" onClick={onMoveLogin}>
            로그인하기
          </Button>
          <Button variant="text" color="warning" onClick={handleNext}>
            비밀번호 변경
          </Button>
        </DialogActions>
      ) : (
        <DialogActions>
          <Button variant="text" color="primary" onClick={onMoveRegister}>
            회원가입하기
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
}

export default DialogSecond;

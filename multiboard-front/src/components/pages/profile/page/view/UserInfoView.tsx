import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

function UserInfoView(props: {
  username: string;
  nickname: string;
  email: string;
  authority: string;
  profileImage: string;
}) {
  const { username, nickname, email, authority, profileImage } = props;
  return (
    <>
      <Typography variant="h5" sx={{ ml: 2, mt: 1, fontFamily: "sans-serif" }}>
        회원 정보
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar src={profileImage} sx={{ mt: 10, width: 150, height: 150 }} />
        <Table sx={{ mt: 5.5, ml: 4, width: "300px" }}>
          <TableBody>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>아이디</TableCell>
              <TableCell sx={{ textAlign: "center" }}>{username}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>닉네임</TableCell>
              <TableCell sx={{ textAlign: "center" }}>{nickname}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>이메일</TableCell>
              <TableCell sx={{ textAlign: "center" }}>{email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>권한</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {authority === "ROLE_ADMIN" ? "관리자" : "일반 회원"}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default UserInfoView;

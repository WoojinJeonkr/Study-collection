import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Auth, User } from "components";
import dayjs from "dayjs";
import React from "react";

function UserListView(props: { userInfoList: User[] }) {
  const { userInfoList } = props;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell sx={{ textAlign: "center" }}>No</TableCell>
          <TableCell sx={{ textAlign: "center" }}>아이디</TableCell>
          <TableCell sx={{ textAlign: "center" }}>닉네임</TableCell>
          <TableCell sx={{ textAlign: "center" }}>이메일</TableCell>
          <TableCell sx={{ textAlign: "center" }}>권한</TableCell>
          <TableCell sx={{ textAlign: "center" }}>계정 활성 여부</TableCell>
          <TableCell sx={{ textAlign: "center" }}>가입 일자</TableCell>
          <TableCell sx={{ textAlign: "center" }}>수정 일자</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {userInfoList.map((user: User, index: number) => {
          return (
            <TableRow key={user.id}>
              <TableCell sx={{ textAlign: "center" }}>{index + 1}</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {user.username}
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {user.nickname}
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>{user.email}</TableCell>
              {user !== null ? (
                <TableCell sx={{ textAlign: "center" }}>
                  {Object.values(
                    (user.authorities as unknown as Auth)?.[0],
                  ).toString() === "ROLE_USER"
                    ? "일반 회원"
                    : "관리자"}
                </TableCell>
              ) : (
                <TableCell sx={{ textAlign: "center" }} />
              )}
              <TableCell sx={{ textAlign: "center" }}>
                {user.activated === true ? "O" : "X"}
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {dayjs(user.createdDate).format("YYYY년 MM월 DD일 hh:mm:ss")}
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {dayjs(user.createdDate).format("YYYY년 MM월 DD일 hh:mm:ss")}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default UserListView;

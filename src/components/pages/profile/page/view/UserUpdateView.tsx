import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  displayProfileEmailMsg,
  displayProfileNicknameMsg,
  displayProfilePasswordMsg,
  validateProfileEmail,
  validateProfileNickname,
  validateProfilePassword,
  UpdateAdminDialog,
  UpdateMemberDialog,
} from "components";

function UserUpdateView(props: {
  username: string;
  nickname: string;
  email: string;
  authority: string;
  profileImage: string;
}) {
  const { username, nickname, email, authority, profileImage } = props;
  const [inputPassword, setInputPassword] = useState<string>("");
  const [inputNickname, setInputNickname] = useState<string>(nickname);
  const [inputEmail, setInputEmail] = useState<string>(email);

  const profilePasswordError = !validateProfilePassword(inputPassword);
  const profileEmailError = !validateProfileEmail(inputEmail);
  const profileNicknameError = !validateProfileNickname(inputNickname);

  const onChangeProfilePassword = (e: { target: { value: string } }) => {
    setInputPassword(e.target.value);
  };

  const onChangeProfileEmail = (e: { target: { value: string } }) => {
    setInputEmail(e.target.value);
  };

  const onChangeProfileNickname = (e: { target: { value: string } }) => {
    setInputNickname(e.target.value);
  };

  return (
    <>
      <Typography variant="h5" sx={{ ml: 2, mt: 1, fontFamily: "sans-serif" }}>
        회원 정보
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Avatar
          src={profileImage}
          sx={{ mt: 8, ml: 2, width: 150, height: 150 }}
        />
        <Table sx={{ ml: 2, mr: 2, width: "380px" }}>
          <TableBody>
            <TableRow>
              <TableCell sx={{ textAlign: "center", width: "30%" }}>
                아이디
              </TableCell>
              <TableCell sx={{ textAlign: "center", width: "70%" }}>
                {username}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>비밀번호</TableCell>
              <TableCell>
                <TextField
                  name="password"
                  type="text"
                  sx={{ height: "50px" }}
                  size="small"
                  value={inputPassword}
                  onChange={onChangeProfilePassword}
                  error={profilePasswordError}
                  helperText={displayProfilePasswordMsg(inputPassword)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>닉네임</TableCell>
              <TableCell>
                <TextField
                  name="nickname"
                  type="text"
                  sx={{ height: "50px" }}
                  size="small"
                  value={inputNickname}
                  onChange={onChangeProfileNickname}
                  error={profileNicknameError}
                  helperText={displayProfileNicknameMsg(inputNickname)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>이메일</TableCell>
              <TableCell>
                <TextField
                  name="email"
                  type="text"
                  sx={{ height: "50px" }}
                  size="small"
                  value={inputEmail}
                  onChange={onChangeProfileEmail}
                  error={profileEmailError}
                  helperText={displayProfileEmailMsg(inputEmail)}
                />
              </TableCell>
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
      {authority === "ROLE_USER" ? (
        <UpdateMemberDialog
          username={username}
          password={inputPassword}
          email={encodeURI(inputEmail)}
          nickname={inputNickname}
        />
      ) : (
        <UpdateAdminDialog
          username={username}
          password={inputPassword}
          email={encodeURI(inputEmail)}
          nickname={inputNickname}
        />
      )}
    </>
  );
}

export default UserUpdateView;

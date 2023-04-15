import { Box, Typography, TextField, Grid, Container } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  displayChkPasswordMsg,
  displayEmailMsg,
  displayNicknameMsg,
  displayPasswordMsg,
  displayUsernameMsg,
  matchPassword,
  validateEmail,
  validateNickname,
  validatePassword,
  validateUsername,
  EmailCheckDialog,
  SignInMemberDialog,
  UsernameCheckDialog,
  NicknameCheckDialog,
} from "components";

function MemberRegisterForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const usernameError = !validateUsername(username);
  const passwordError = !validatePassword(password);
  const passwordCheckError = !matchPassword(password, checkPassword);
  const emailError = !validateEmail(email);
  const nicknameError = !validateNickname(nickname);

  const onChangeUsername = (e: { target: { value: string } }) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e: { target: { value: string } }) => {
    setPassword(e.target.value);
  };

  const onChangeCheckPassword = (e: { target: { value: string } }) => {
    setCheckPassword(e.target.value);
  };

  const onChangeEmail = (e: { target: { value: string } }) => {
    setEmail(e.target.value);
  };

  const onChangeNickname = (e: { target: { value: string } }) => {
    setNickname(e.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ mt: "-1rem", mb: "0.15rem" }}
        >
          일반회원 회원가입
        </Typography>
        <Box component="form" noValidate autoComplete="off" sx={{ mt: 1 }}>
          <Grid container>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <TextField
                name="username"
                label="username"
                type="text"
                value={username}
                onChange={onChangeUsername}
                error={usernameError}
                helperText={displayUsernameMsg(username)}
                InputProps={{
                  endAdornment: <UsernameCheckDialog username={username} />,
                }}
                fullWidth
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <TextField
                name="password"
                label="password"
                type="text"
                value={password}
                onChange={onChangePassword}
                error={passwordError}
                helperText={displayPasswordMsg(password)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <TextField
                name="checkPassword"
                label="checkPassword"
                type="text"
                value={checkPassword}
                onChange={onChangeCheckPassword}
                error={passwordCheckError}
                helperText={displayChkPasswordMsg(password, checkPassword)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <TextField
                name="nickname"
                label="nickname"
                type="text"
                value={nickname}
                onChange={onChangeNickname}
                error={nicknameError}
                helperText={displayNicknameMsg(nickname)}
                InputProps={{
                  endAdornment: <NicknameCheckDialog nickname={nickname} />,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="email"
                type="text"
                value={email}
                onChange={onChangeEmail}
                error={emailError}
                helperText={displayEmailMsg(email)}
                InputProps={{
                  endAdornment: <EmailCheckDialog email={email} />,
                }}
                fullWidth
              />
            </Grid>
            <SignInMemberDialog
              username={username}
              password={password}
              nickname={nickname}
              email={email}
            />
            <Grid container spacing={2}>
              <Grid item xs={9} sx={{ mt: 1 }}>
                <NavLink to="/login">이미 계정이 있으신가요? 로그인</NavLink>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default MemberRegisterForm;

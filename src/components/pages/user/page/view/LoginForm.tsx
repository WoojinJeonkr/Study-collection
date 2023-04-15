import {
  Avatar,
  Box,
  Checkbox,
  Container,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
import { FindUserInfoStepperDialog, LoginDialog } from "components";

function LoginForm() {
  const theme = createTheme();

  const [inputUsername, setInputUsername] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");

  const handleUsername = (e: { target: { value: string } }) => {
    setInputUsername(e.target.value);
  };

  const handlePassword = (e: { target: { value: string } }) => {
    setInputPassword(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 18,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h2" variant="h5">
            로그인
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              onChange={handleUsername}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="password"
              type="password"
              name="password"
              autoComplete="current-password"
              onChange={handlePassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="로그인 유지하기"
            />
            <LoginDialog
              inputUsername={inputUsername}
              inputPassword={inputPassword}
            />
            <Grid container spacing={3}>
              <Grid item xs={9}>
                <FindUserInfoStepperDialog />
              </Grid>
              <Grid item xs={3}>
                <NavLink to="/register"> 회원가입 </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default LoginForm;

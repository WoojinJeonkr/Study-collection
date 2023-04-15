import React, { useState } from "react";
import { Button } from "@mui/material";
import {
  DialogFirst,
  DialogLast,
  DialogSecond,
  DialogThird,
  findUser,
  reissuancePassword,
  User,
} from "components";

function FindUserInfoStepperDialog() {
  const [openDialogFirst, setOpenDialogFirst] = useState<boolean>(false);
  const [openDialogSecond, setOpenDialogSecond] = useState<boolean>(false);
  const [openDialogThird, setOpenDialogThird] = useState<boolean>(false);
  const [openDialogLast, setOpenDialogLast] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [nickName, setnickName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [info, setInfo] = useState<User>();

  const handleOpen = () => {
    setOpenDialogFirst(true);
  };

  const handleCloseFirst = () => {
    setOpenDialogFirst(false);
  };

  const handleCloseSecond = () => {
    setOpenDialogSecond(false);
  };

  const handleCloseThird = () => {
    setOpenDialogThird(false);
  };

  const handleNickname = (e: { target: { value: string } }) => {
    setnickName(e.target.value);
  };

  const onMoveLogin = () => {
    window.location.replace("/login");
  };

  const onMoveRegister = () => {
    window.location.replace("/register");
  };

  const handlePassword = (e: { target: { value: string } }) => {
    setPassword(e.target.value);
  };

  const onChangePassword = () => {
    reissuancePassword(username, password);
    setOpenDialogThird(false);
    setOpenDialogLast(true);
  };

  const handleFirstDialogNext = () => {
    findUser(nickName).then((res) => {
      setInfo(res.data);
      const findUsername = info?.username as unknown as string;
      setUsername(findUsername);
    });
    setOpenDialogFirst(false);
    setOpenDialogSecond(true);
  };

  const handleSecondDialogNext = () => {
    setOpenDialogSecond(false);
    setOpenDialogThird(true);
  };

  const backToThird = () => {
    setOpenDialogThird(false);
    setOpenDialogSecond(true);
  };

  const onCloseLast = () => {
    setOpenDialogLast(false);
    window.location.replace("/login");
  };

  return (
    <div>
      <Button color="primary" variant="text" onClick={handleOpen} disableRipple>
        계정 정보를 잊어버리셨나요?
      </Button>
      <DialogFirst
        nickName={nickName}
        open={openDialogFirst}
        close={handleCloseFirst}
        handleNickname={handleNickname}
        handleClose={handleCloseFirst}
        handleNext={handleFirstDialogNext}
      />
      <DialogSecond
        info={info as unknown as User}
        open={openDialogSecond}
        close={handleCloseSecond}
        onMoveLogin={onMoveLogin}
        handleNext={handleSecondDialogNext}
        onMoveRegister={onMoveRegister}
      />
      <DialogThird
        password={password}
        open={openDialogThird}
        close={handleCloseThird}
        backToThird={backToThird}
        handlePassword={handlePassword}
        onChangePassword={onChangePassword}
      />
      <DialogLast open={openDialogLast} close={onCloseLast} />
    </div>
  );
}

export default FindUserInfoStepperDialog;

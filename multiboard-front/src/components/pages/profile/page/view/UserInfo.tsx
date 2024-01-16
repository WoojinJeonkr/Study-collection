import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import {
  DeleteDialog,
  LogoutDialog,
  UserInfoView,
  UserUpdateView,
} from "components";

function UserInfo() {
  const user = sessionStorage.getItem("user");
  const auth = sessionStorage.getItem("auth");

  const [username, setUsername] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [authority, setAuthority] = useState<string>("");
  const [profileImage, setProfileImage] = useState<string>(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  );

  const [checked, setChecked] = useState<boolean>(false);

  const clickUpdateButton = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    if (user !== null) {
      const userInfo = JSON.parse(user);
      const { username, nickname, email } = userInfo;
      setUsername(username);
      setNickname(nickname);
      setEmail(email);
    }
    if (auth !== null) {
      setAuthority(auth);
    }
  }, []);

  return (
    <Card sx={{ width: "40%" }}>
      <Switch
        sx={{ float: "right" }}
        checked={checked}
        onChange={clickUpdateButton}
      />
      {!checked ? (
        <>
          <UserInfoView
            username={username}
            nickname={nickname}
            email={email}
            authority={authority}
            profileImage={profileImage}
          />
          <LogoutDialog
            styles={{ mt: 3, mb: 1, mr: 1, float: "right" }}
            size="medium"
          />
          <DeleteDialog
            styles={{ ml: 1, mt: 3, mb: 1, mr: 1, float: "left" }}
            nickname={nickname}
            size="medium"
          />
        </>
      ) : (
        <UserUpdateView
          username={username}
          email={email}
          nickname={nickname}
          authority={authority}
          profileImage={profileImage}
        />
      )}
    </Card>
  );
}

export default UserInfo;

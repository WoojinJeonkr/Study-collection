import { Switch, Typography } from "@mui/material";
import {
  findUserList,
  User,
  UserListView,
  UserUpdateListView,
} from "components";
import React, { useEffect, useState } from "react";

function UserList() {
  const [userList, setUserList] = useState<Array<User>>([]);
  const [checked, setChecked] = useState<boolean>(false);

  const clickedSwitch = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    findUserList().then((res) => setUserList(res.data));
  }, []);

  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <Typography variant="h3" fontFamily="sans-serif" sx={{ mb: 6 }}>
        회원 관리
      </Typography>
      <Switch
        sx={{ float: "right" }}
        checked={checked}
        onChange={clickedSwitch}
      />
      {checked ? (
        <UserUpdateListView userInfoList={userList} />
      ) : (
        <UserListView userInfoList={userList} />
      )}
    </div>
  );
}

export default UserList;

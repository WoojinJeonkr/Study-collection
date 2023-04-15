import { Card, Divider } from "@mui/material";
import {
  Board,
  findBoardRecent,
  findQuestionRecent,
  Question,
  UserRecentlyBoard,
  UserRecentlyQuestion,
} from "components";
import React, { useEffect, useState } from "react";

function UserDashoard() {
  const [recentBoard, setRecentBoard] = useState<Board>();
  const [recentQuestion, setRecentQuestion] = useState<Question>();
  const writer = JSON.parse(
    sessionStorage.getItem("user") as unknown as string,
  )?.nickname;

  useEffect(() => {
    findBoardRecent()
      .then((res) => (res !== null ? setRecentBoard(res.data) : null))
      .catch((e) => console.log(e));
    findQuestionRecent(writer)
      .then((res) => (res !== null ? setRecentQuestion(res.data) : null))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Card sx={{ width: "60%" }}>
      <UserRecentlyBoard board={recentBoard} />
      <Divider />
      <UserRecentlyQuestion question={recentQuestion} />
    </Card>
  );
}

export default UserDashoard;

import { Card, Typography } from "@mui/material";
import { UserDashoard, UserInfo } from "components";

function Profile() {
  const auth = sessionStorage.getItem("auth");

  return (
    <>
      <Typography
        variant="h3"
        sx={{ ml: 2, mt: 2 }}
        fontFamily="sans-serif"
        gutterBottom
      >
        Profile
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <UserInfo />
        {auth === "ROLE_USER" ? (
          <UserDashoard />
        ) : (
          <Card sx={{ width: "60%" }}>
            <Typography
              variant="h5"
              sx={{ ml: 2, mt: 1, fontFamily: "sans-serif" }}
            >
              현황
            </Typography>
            <div />
          </Card>
        )}
      </div>
    </>
  );
}

export default Profile;

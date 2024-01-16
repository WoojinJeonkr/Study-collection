import { Button, Card, CardContent, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";

function UserRegisterForm() {
  const navigate = useNavigate();
  return (
    <>
      <h1>회원가입</h1>
      <div style={{ textAlign: "center" }}>
        <Card
          sx={{
            ml: 13,
            mr: 10,
            mt: 6,
            float: "left",
            width: "40%",
            height: "400px",
          }}
        >
          <CardMedia
            component="img"
            height="320"
            image="image/user/user.jpg"
            alt="user"
          />
          <CardContent style={{ textAlign: "center" }}>
            <Button size="large" onClick={() => navigate("/user/register")}>
              일반회원 회원가입
            </Button>
          </CardContent>
        </Card>
        <Card sx={{ mt: 6, float: "left", width: "40%", height: "400px" }}>
          <CardMedia
            component="img"
            height="320"
            image="image/user/admin.jpg"
            alt="admin"
          />
          <CardContent style={{ textAlign: "center" }}>
            <Button size="large" onClick={() => navigate("/admin/register")}>
              관리자 회원가입
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default UserRegisterForm;

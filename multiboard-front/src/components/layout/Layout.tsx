/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { myInfo, Sidebar } from "components";

export type Auth = {
  [idx: number]: string[];
};

export default function Layout() {
  const [auth, setAuth] = useState<string>("");
  const navigate = useNavigate();

  const onMoveMain = () => {
    navigate("/");
  };

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwt");
    if (jwt !== null) {
      myInfo().then((res) => {
        sessionStorage.setItem("user", JSON.stringify(res));
        const user = JSON.parse(
          sessionStorage.getItem("user") as unknown as string,
        );
        const authority = user?.authorities;
        const objectAuthority = authority as unknown as Auth;
        if (objectAuthority !== undefined) {
          const auth = Object.values(objectAuthority?.[0]).toString();
          sessionStorage.setItem("auth", auth);
          setAuth(auth);
        }
      });
    }
  }, []);

  return (
    <div className="wrap">
      <div className="container">
        <div className="left_area">
          <div className="logo">
            <img
              className="logoImage"
              src="image/logo/logo.png"
              onClick={onMoveMain}
            />
          </div>
          <div className="profile" />
          <Sidebar auth={auth} />
        </div>
        <div className="right_area">
          <div style={{ marginTop: "40px" }} />
          <div className="contents_area">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

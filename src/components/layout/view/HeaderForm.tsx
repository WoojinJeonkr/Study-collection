import { Layout } from "antd";
import React from "react";
import Navbar from "./Navbar";

function HeaderForm() {
  const { Header } = Layout;
  return (
    <Header className="header">
      <div
        style={{
          float: "left",
          width: "180px",
          height: "31px",
          margin: "16px 24px 16px 0",
          background: "rgba(255, 255, 255, 0.3)",
        }}
      />
      <Navbar />
    </Header>
  );
}

export default HeaderForm;

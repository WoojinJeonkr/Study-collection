/* eslint-disable react/jsx-no-comment-textnodes */
import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

interface Props {
  colorBgContainer: string;
}
function ContentForm(props: Props) {
  const { colorBgContainer } = props;
  const { Content, Sider } = Layout;
  return (
    <Content style={{ padding: "0 30px", height: window.innerHeight }}>
      <Layout
        style={{
          padding: "24px 0",
          background: colorBgContainer,
        }}
      >
        <Sidebar Sider={Sider} colorBgContainer={colorBgContainer} />
        <Content
          style={{
            padding: "0 24px",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Content>
  );
}

export default ContentForm;

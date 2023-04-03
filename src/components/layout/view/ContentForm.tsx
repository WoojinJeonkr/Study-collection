import { Breadcrumb, Layout } from "antd";
import React from "react";
import { RoutesMap } from "components/router";
import Sidebar from "./Sidebar";

interface Props {
  colorBgContainer: string;
}
function ContentForm(props: Props) {
  const { colorBgContainer } = props;
  const { Content, Sider } = Layout;
  return (
    <Content style={{ padding: "0 30px", height: window.innerHeight }}>
      <Breadcrumb
        style={{ marginTop: "16px", marginBottom: "16px", marginLeft: "90%" }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
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
          <RoutesMap />
        </Content>
      </Layout>
    </Content>
  );
}

export default ContentForm;

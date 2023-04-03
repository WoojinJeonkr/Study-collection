import React from "react";
import { Layout, theme } from "antd";
import HeaderForm from "./view/HeaderForm";
import ContentForm from "./view/ContentForm";
import Footer from "./view/Footer";

function LayoutForm() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: window.innerHeight }}>
      <HeaderForm />
      <ContentForm colorBgContainer={colorBgContainer} />
      <Footer />
    </Layout>
  );
}

export default LayoutForm;

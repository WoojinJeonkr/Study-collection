import React from "react";
import { Menu, MenuProps, SiderProps } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

interface Props {
  Sider: React.ForwardRefExoticComponent<
    SiderProps & React.RefAttributes<HTMLDivElement>
  >;
  colorBgContainer: string;
}

const sidebarItem: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(2).fill(null).map((_, j) => {
      const subKey = index * 2 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

function Sidebar(props: Props) {
  const { Sider, colorBgContainer } = props;
  return (
    <Sider style={{ background: colorBgContainer }} width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "530px" }}
        items={sidebarItem}
      />
    </Sider>
  );
}

export default Sidebar;

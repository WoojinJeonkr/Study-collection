import { Menu } from "antd";
import type { MenuProps } from "antd";
import React from "react";

const navItem: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

function Navbar() {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      items={navItem}
    />
  );
}

export default Navbar;

import React from "react";

export interface Menu {
  name: string;
  path: string;
}

export type BindingMenu = {
  menu: Menu;
  isActive: boolean;
};

function SidebarItem({ menu, isActive }: BindingMenu) {
  return isActive ? (
    <div>
      <p>{menu.name}</p>
    </div>
  ) : (
    <div>
      <p>{menu.name}</p>
    </div>
  );
}

export default SidebarItem;

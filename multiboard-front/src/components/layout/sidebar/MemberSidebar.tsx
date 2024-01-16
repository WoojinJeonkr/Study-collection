import React from "react";
import { MenuList, MenuItem, Divider, ListItemText } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { SidebarItem } from "components";

export type Menu = {
  name: string;
  path: string;
};

function MemberSidebar() {
  const pathName = useLocation().pathname;
  const memberMenus = [
    { name: "프로필", path: "/profile" },
    { name: "자유게시판", path: "/board" },
    { name: " 공지사항", path: "/notice" },
    { name: "FAQ", path: "/faq" },
    { name: "Q&A", path: "/qna" },
    { name: "개인정보처리방침", path: "/policy" },
    { name: "서비스 이용약관", path: "/term" },
  ];

  return (
    <MenuList>
      <MenuItem
        sx={{
          m: "0 30px",
          pointerEvents: "none",
          display: "table",
          justifyContent: "space-between",
        }}
      >
        Menu
      </MenuItem>
      <Divider
        variant="middle"
        flexItem
        light={false}
        sx={{ color: "black" }}
      />
      {memberMenus.map((menu: Menu, index: number) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <MenuItem key={index} sx={{ height: "50px" }}>
            <ListItemText
              sx={{
                ml: 3,
                display: "table-cell",
                justifyContent: "space-between",
              }}
            >
              <NavLink
                to={menu.path}
                className={pathName.includes(menu.path) ? "on" : ""}
              >
                <SidebarItem
                  menu={menu}
                  isActive={pathName.includes(menu.path)}
                />
              </NavLink>
            </ListItemText>
          </MenuItem>
        );
      })}
    </MenuList>
  );
}

export default MemberSidebar;

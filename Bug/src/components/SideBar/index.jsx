import React from "react";

import { Button, Img, Input, Text } from "components";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { CloseSVG } from "../../assets/images";

const SideBar = (props) => {
  const { sideBarMenu } = props;
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <>
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-52 bg-indigo-A400 flex h-screen md:hidden justify-start overflow-auto top-[0]"
          >
            <div className="bg-indigo-A400 flex flex-row gap-2 items-center justify-start mt-6 mx-auto w-40">
              <Img className="h-10 w-10" src="images/img_bug.svg" alt="bug" />
              <Text
                className="flex-1 leading-[24.00px] max-w-[112px] md:max-w-full text-[22px] sm:text-lg text-white-A700 md:text-xl"
                size="txtRobotoRomanMedium22"
              >
                Bug Tracker
              </Text>
            </div>
            <Menu
              menuItemStyles={{
                button: {
                  padding: "7px 7px 7px 8px",
                  gap: "8px",
                  backgroundColor: "#4f46e5",
                  color: "#c7d2fe",
                  fontWeight: 500,
                  fontSize: "14px",
                  borderRadius: "5px",
                  [`&:hover, &.ps-active`]: {
                    color: "#ffffff",
                    backgroundColor: "#4f46e5ff !important",
                  },
                },
              }}
              className="flex flex-col items-center justify-start mb-[35px] mt-5 pt-[11px] sm:px-5 px-6 w-[77%]"
            >
              <div className="flex flex-col gap-[0.28px] h-40 items-center justify-start w-40">
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
              <div className="flex flex-col items-center justify-end absolute bottom-[18px] w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-6 mb-0.5 w-6"
                      src="images/img_boxarrowinright.svg"
                      alt="boxarrowinright"
                    />
                  }
                >
                  <Text className="flex-1 w-auto">Logout</Text>
                </MenuItem>
              </div>
            </Menu>
          </Sidebar>
    </>
  );
};

export default SideBar;
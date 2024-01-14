import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const TicketspagePage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: <Img className="h-6 w-6" src="images/img_home.svg" alt="home" />,
      label: "Dashboard",
    },
    {
      icon: (
        <Img
          className="h-6 mb-0.5 w-6"
          src="images/img_folder.svg"
          alt="folder"
        />
      ),
      label: "Projects",
      href: "/projectspage",
      active: window.location.pathname === "/projectspage",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_ticketoutline.svg"
          alt="ticketoutline"
        />
      ),
      label: "Tickets",
      href: "/ticketspage",
      active: window.location.pathname === "/ticketspage",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_usergroupoutline.svg"
          alt="usergroupoutlin"
        />
      ),
      label: "Users",
    },
  ];
  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-200 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-8 items-start justify-between mx-auto md:px-5 w-full">
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
              <div className="flex flex-col items-center justify-end mt-[400px] w-full">
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
          <div className="flex flex-1 flex-col gap-[47px] items-start justify-start w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtRobotoRomanMedium24"
            >
              Tickets
            </Text>
            <div className="bg-white-A700 flex flex-col gap-4 h-[583px] md:h-auto items-center justify-start max-w-[1008px] p-[18px] rounded-[5px] w-full">
              <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-[152px] items-center justify-between rounded-tl-[5px] rounded-tr-[5px] w-full">
                <Text
                  className="text-base text-blue_gray-900 w-auto"
                  size="txtRobotoMedium16"
                >
                  Project Tickets{" "}
                </Text>
                <div className="flex flex-1 flex-row gap-3 items-center justify-end w-full">
                  <Input
                    name="searchbar"
                    placeholder="search"
                    value={searchbarvalue}
                    onChange={(e) => setSearchbarvalue(e)}
                    className="!placeholder:text-gray-400 !text-gray-400 font-roboto p-0 text-left text-sm w-full"
                    wrapClassName="border border-gray-400 border-solid flex w-[27%]"
                    prefix={
                      <Img
                        className="cursor-pointer h-[18px] mr-2 my-auto"
                        src="images/img_search.svg"
                        alt="search"
                      />
                    }
                    suffix={
                      <CloseSVG
                        fillColor="#c4c4c4"
                        className="cursor-pointer h-[18px] my-auto"
                        onClick={() => setSearchbarvalue("")}
                        style={{
                          visibility:
                            searchbarvalue?.length <= 0 ? "hidden" : "visible",
                        }}
                        height={18}
                        width={18}
                        viewBox="0 0 18 18"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                  <Button
                    className="cursor-pointer font-inter font-semibold h-9 leading-[normal] min-w-[122px] text-center text-sm tracking-[0.50px]"
                    shape="round"
                    color="indigo_A400"
                    size="xs"
                    variant="fill"
                  >
                    Create Ticket
                  </Button>
                </div>
              </div>
              <div className="bg-gray-300 flex md:flex-col flex-row md:gap-5 items-start justify-start outline outline-[1px] outline-gray-300 rounded-[5px] w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-3 w-[43%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-px items-start justify-start w-[232px]">
                    <Text
                      className="bg-gray-200 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRegular14"
                    >
                      Title
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      Create Ticket Feature
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      Table body
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      Table body
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      Table body
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      Table body
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      Table body
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      Table body
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      Table body
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      Table body
                    </Text>
                  </div>
                  <div className="flex flex-col gap-px items-start justify-start w-[90px]">
                    <Text
                      className="bg-gray-200 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRegular14"
                    >
                      Status
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      Open
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      Open
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      Open
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      Open
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      Open
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      Open
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      Open
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      Open
                    </Text>
                    <Button
                      className="cursor-pointer font-light text-center text-sm w-full"
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      Table body
                    </Button>
                  </div>
                  <div className="flex flex-col gap-px items-start justify-start w-[89px]">
                    <Text
                      className="bg-gray-200 justify-center pl-2.5 sm:pr-5 pr-[33px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRegular14"
                    >
                      Priority
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      High
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      High
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      High
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      High
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      High
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      High
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      High
                    </Text>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      High
                    </Text>
                    <Button
                      className="cursor-pointer font-light text-center text-sm w-full"
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      Table body
                    </Button>
                  </div>
                </List>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-px grid grid-cols-2 w-[31%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-px items-start justify-start w-[120px]">
                    <Text
                      className="bg-gray-200 justify-center pb-[9px] pl-2.5 sm:pr-5 pr-[35px] pt-[13px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRegular14"
                    >
                      Type
                    </Text>
                    <Button
                      className="cursor-pointer font-light text-center text-sm w-full"
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      Feature request
                    </Button>
                    <Button
                      className="cursor-pointer font-light text-center text-sm w-full"
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      Feature request
                    </Button>
                    <Button
                      className="cursor-pointer font-light text-center text-sm w-full"
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      Feature request
                    </Button>
                    <Button
                      className="cursor-pointer font-light text-center text-sm w-full"
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      Feature request
                    </Button>
                    <Button
                      className="cursor-pointer font-light text-center text-sm w-full"
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      Feature request
                    </Button>
                    <Button
                      className="cursor-pointer font-light text-center text-sm w-full"
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      Feature request
                    </Button>
                    <Button
                      className="cursor-pointer font-light text-center text-sm w-full"
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      Feature request
                    </Button>
                    <Button
                      className="cursor-pointer font-light text-center text-sm w-full"
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      Feature request
                    </Button>
                    <Text
                      className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRomanLight14"
                    >
                      Table body
                    </Text>
                  </div>
                  <div className="flex flex-col gap-px items-start justify-start w-[181px]">
                    <Text
                      className="bg-gray-200 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                      size="txtRobotoRegular14"
                    >
                      Due Date
                    </Text>
                    <Button
                      className="cursor-pointer font-light text-center text-sm w-full"
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      No specific date assigned
                    </Button>
                    <Button
                      className="cursor-pointer font-light text-center text-sm w-full"
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      No specific date assigned
                    </Button>
                    <Button
                      className="cursor-pointer font-light text-center text-sm w-full"
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      No specific date assigned
                    </Button>
                    <Button
                      className="cursor-pointer font-light text-center text-sm w-full"
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      No specific date assigned
                    </Button>
                    <Button
                      className="cursor-pointer font-light text-center text-sm w-full"
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      No specific date assigned
                    </Button>
                    <Button
                      className="cursor-pointer font-light text-center text-sm w-full"
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      No specific date assigned
                    </Button>
                    <Button
                      className="cursor-pointer font-light text-center text-sm w-full"
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      No specific date assigned
                    </Button>
                    <Button
                      className="cursor-pointer font-light text-center text-sm w-full"
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      No specific date assigned
                    </Button>
                    <Button
                      className="cursor-pointer font-light text-center text-sm w-full"
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      No specific date assigned
                    </Button>
                  </div>
                </List>
                <div className="flex flex-col gap-px items-start justify-start w-[164px]">
                  <Text
                    className="bg-gray-200 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                    size="txtRobotoRegular14"
                  >
                    Related Project
                  </Text>
                  <div className="bg-white-A700 flex flex-col items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-blue_gray-900 text-sm w-auto"
                      size="txtRobotoRomanLight14"
                    >
                      Project Name
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-blue_gray-900 text-sm w-auto"
                      size="txtRobotoRomanLight14"
                    >
                      Project Name
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-blue_gray-900 text-sm w-auto"
                      size="txtRobotoRomanLight14"
                    >
                      Project Name
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-blue_gray-900 text-sm w-auto"
                      size="txtRobotoRomanLight14"
                    >
                      Project Name
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-blue_gray-900 text-sm w-auto"
                      size="txtRobotoRomanLight14"
                    >
                      Project Name
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-blue_gray-900 text-sm w-auto"
                      size="txtRobotoRomanLight14"
                    >
                      Project Name
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-blue_gray-900 text-sm w-auto"
                      size="txtRobotoRomanLight14"
                    >
                      Project Name
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-blue_gray-900 text-sm w-auto"
                      size="txtRobotoRomanLight14"
                    >
                      Project Name
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-blue_gray-900 text-sm w-auto"
                      size="txtRobotoRomanLight14"
                    >
                      Table body
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-px items-start justify-start w-full">
                  <Text
                    className="bg-gray-200 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full"
                    size="txtRobotoRegular14"
                  >
                    Action
                  </Text>
                  <Img
                    className="h-10 w-full"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup"
                  />
                  <Img
                    className="h-10 w-full"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup_One"
                  />
                  <Img
                    className="h-10 w-full"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup_Two"
                  />
                  <Img
                    className="h-10 w-full"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup_Three"
                  />
                  <Img
                    className="h-10 w-full"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup_Four"
                  />
                  <Img
                    className="h-10 w-full"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup_Five"
                  />
                  <Img
                    className="h-10 w-full"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup_Six"
                  />
                  <Img
                    className="h-10 w-full"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup_Seven"
                  />
                  <Img
                    className="h-10 w-full"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup_Eight"
                  />
                </div>
              </div>
              <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-[115px] items-center justify-center w-full">
                <div className="flex flex-1 flex-col items-start justify-center w-full">
                  <Button
                    className="cursor-pointer min-w-[86px] outline outline-[1px] outline-gray-300_01 text-center text-sm"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  >
                    Previous
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtRobotoRomanRegular14"
                  >
                    Page 1 of 8
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-end justify-center w-full">
                  <Button
                    className="cursor-pointer min-w-[61px] outline outline-[1px] outline-gray-300_01 text-center text-sm"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketspagePage;

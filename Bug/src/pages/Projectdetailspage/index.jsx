import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { CloseSVG } from "../../assets/images";
import { Button, Img, Input, List, Text } from "../../components";
import SideBar from "components/SideBar";
import Table from "components/Table";

const tableHeads = ["Project", "Description"];
const tableItems = ["Project", "Description"];


const ProjectdetailspagePage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    { icon: <Img className="h-6 w-6" src="images/img_home.svg" alt="home" />, label: "Dashboard" },
    { icon: <Img className="h-6 mb-0.5 w-6" src="images/img_folder.svg" alt="folder" />, label: "Projects" },
    { icon: <Img className="h-6 w-6" src="images/img_ticketoutline.svg" alt="ticketoutline" />, label: "Tickets" },
    
    { icon: <Img className="h-6 w-6" src="images/img_usergroupoutline.svg" alt="usergroupoutlin" />, label: "Users" },
  ];
  const [searchbarvalue, setSearchbarvalue] = React.useState("");
  const [searchbaronevalue, setSearchbaronevalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-200 flex flex-col font-roboto items-center justify-end mx-auto sm:pr-5 pr-8 w-full">
        <div className="flex md:flex-col flex-row gap-[33px] items-start justify-between mx-auto md:px-5 w-full">
          <SideBar sideBarMenu={sideBarMenu} />
          <div className="flex flex-1 flex-col gap-[31px] items-center justify-start md:mt-0 mt-[31px] w-full">
            <div className="flex flex-col gap-[46px] items-start justify-start w-full">
              <Text className="font-medium text-2xl md:text-[22px] text-black-900 sm:text-xl">Project Details</Text>
              <div className="flex md:flex-col flex-row gap-8 items-start justify-between w-full">
                <div className="bg-white-A700 flex sm:flex-1 flex-col gap-4 items-start justify-start p-[18px] rounded-[5px] w-[523px] sm:w-full">
                  <Text className="bg-white-A700 font-medium justify-center sm:pr-5 pr-[35px] py-0.5 rounded-tl-[5px] rounded-tr-[5px] text-base text-blue_gray-900 w-full">
                    Project Overview
                  </Text>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text className="bg-gray-200 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full">
                      Project Name
                    </Text>
                    <Text className="bg-white-A700 font-light justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full">
                      Bug Tracker
                    </Text>
                  </div>
                  <div className="flex flex-col h-[121px] md:h-auto items-start justify-start w-full">
                    <Text className="bg-gray-200 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full">
                      Project Description
                    </Text>
                    <div className="bg-white-A700 flex flex-col h-full items-center justify-center p-2.5 w-full">
                      <Text className="font-light leading-[20.00px] max-w-[467px] md:max-w-full text-blue_gray-900 text-sm">
                        Lorem ipsum dolor sit amet consectetur. Consequat arcu sed ut auctor. Sed amet in maecenas
                        elementum. Maecenas in in rhoncus praesent ut. Enim potenti nibh et phasellus in tristique.
                        Semper feugiat iahfadfad.
                      </Text>
                    </div>
                  </div>
                </div>
                <Table title="Projects" tableHeads={tableHeads} tableItems={tableItems} />
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col gap-4 h-[302px] md:h-auto items-center justify-start max-w-[1078px] p-[18px] rounded-[5px] w-full">
              <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-[152px] items-center justify-between rounded-tl-[5px] rounded-tr-[5px] w-full">
                <Text className="font-medium text-base text-blue_gray-900 w-auto">Project Tickets </Text>
                <div className="flex flex-1 flex-row gap-3 items-center justify-end w-full">
                  <Input
                    name="searchbar_One"
                    placeholder="search"
                    value={searchbaronevalue}
                    onChange={(e) => setSearchbaronevalue(e)}
                    className="!placeholder:text-gray-400 !text-gray-400 font-roboto p-0 text-left text-sm w-full"
                    wrapClassName="border border-gray-400 border-solid flex w-1/4"
                    prefix={
                      <Img className="cursor-pointer h-[18px] mr-2 my-auto" src="images/img_search.svg" alt="search" />
                    }
                    suffix={
                      <CloseSVG
                        fillColor="#c4c4c4"
                        className="cursor-pointer h-[18px] my-auto"
                        onClick={() => setSearchbaronevalue("")}
                        style={{ visibility: searchbaronevalue?.length <= 0 ? "hidden" : "visible" }}
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
              <div className="bg-gray-300 flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1076px] outline outline-[1px] outline-gray-300 rounded-[5px] w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-3 w-2/5 md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-px items-start justify-start w-[185px]">
                    <Text className="bg-gray-200 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full">
                      Title
                    </Text>
                    <Text className="bg-white-A700 font-light justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full">
                      Create Ticket Feature
                    </Text>
                    <Text className="bg-white-A700 font-light justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full">
                      Table body
                    </Text>
                    <Text className="bg-white-A700 font-light justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full">
                      Table body
                    </Text>
                  </div>
                  <div className="flex flex-col gap-px items-start justify-start w-[120px]">
                    <Text className="bg-gray-200 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full">
                      Status
                    </Text>
                    <Text className="bg-white-A700 font-light justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full">
                      Open
                    </Text>
                    <Text className="bg-white-A700 font-light justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full">
                      Table body
                    </Text>
                    <Text className="bg-white-A700 font-light justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full">
                      Table body
                    </Text>
                  </div>
                  <div className="flex flex-col gap-px items-start justify-start w-[120px]">
                    <Text className="bg-gray-200 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full">
                      Priority
                    </Text>
                    <Text className="bg-white-A700 font-light justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full">
                      High
                    </Text>
                    <Text className="bg-white-A700 font-light justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full">
                      Table body
                    </Text>
                    <Text className="bg-white-A700 font-light justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full">
                      Table body
                    </Text>
                  </div>
                </List>
                <div className="flex flex-col gap-px items-start justify-start w-[120px]">
                  <Text className="bg-gray-200 justify-center pb-[9px] pl-2.5 sm:pr-5 pr-[35px] pt-[13px] text-blue_gray-900 text-sm w-full">
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
                  <Text className="bg-white-A700 font-light justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full">
                    Table body
                  </Text>
                  <Text className="bg-white-A700 font-light justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full">
                    Table body
                  </Text>
                </div>
                <div className="flex flex-col gap-px items-start justify-start w-[180px]">
                  <Text className="bg-gray-200 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full">
                    Assigned To
                  </Text>
                  <Text className="bg-white-A700 font-light justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full">
                    Bayero Abdulkadir{" "}
                  </Text>
                  <Text className="bg-white-A700 font-light justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full">
                    Table body
                  </Text>
                  <Text className="bg-white-A700 font-light justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full">
                    Table body
                  </Text>
                </div>
                <div className="flex flex-col gap-px items-start justify-start w-[210px]">
                  <Text className="bg-gray-200 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full">
                    Due Date
                  </Text>
                  <div className="bg-white-A700 flex flex-col items-center justify-center p-2.5 w-full">
                    <Text className="font-light text-blue_gray-900 text-sm w-auto">No specific due date assigned</Text>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-center p-2.5 w-full">
                    <Text className="font-light text-blue_gray-900 text-sm w-auto">Table body</Text>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-center p-2.5 w-full">
                    <Text className="font-light text-blue_gray-900 text-sm w-auto">Table body</Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-px items-start justify-start w-full">
                  <Text className="bg-gray-200 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-blue_gray-900 text-sm w-full">
                    Action
                  </Text>
                  <Img
                    className="h-10 w-full"
                    src="images/img_tablevariant_white_a700.svg"
                    alt="tablevariant_Sixteen"
                  />
                  <Img
                    className="h-10 w-full"
                    src="images/img_tablevariant_white_a700.svg"
                    alt="tablevariant_Seventeen"
                  />
                  <Img
                    className="h-10 w-full"
                    src="images/img_tablevariant_white_a700.svg"
                    alt="tablevariant_Eighteen"
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
                  <Text className="text-blue_gray-900 text-sm w-auto">Page 1 of 8</Text>
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
    </>
  );
};

export default ProjectdetailspagePage;
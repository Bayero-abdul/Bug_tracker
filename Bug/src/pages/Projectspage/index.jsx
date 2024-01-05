import React, { useState, useEffect } from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { ToastContainer, toast } from "react-toastify";
import Table from "components/Table";
import { getProjects } from "service/api";
import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

import "react-toastify/dist/ReactToastify.css";
import SideBar from "components/SideBar";


const tableHeads = ["Project", "Description"];



const ProjectspagePage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const [tableItems, setTableItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});

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

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await getProjects(); // Make your API call here
        const projectsWithoutId = response.data.map(({ id, ...rest }) => rest);

        setTableItems(projectsWithoutId); // Assuming the API response has a 'data' property containing the projects
      } catch (error) {
        console.error("Error fetching projects:", error);
        // Handle error
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <div className="bg-gray-200 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-8 items-start justify-between mx-auto md:px-5 w-full">
          <SideBar sideBarMenu={sideBarMenu} />
          <div className="flex flex-1 flex-col gap-[47px] items-start justify-start w-full">
            <Text
              className="text-2xl md:text-[22px] mt-[20px] text-black-900 sm:text-xl"
              size="txtRobotoRomanMedium24"
            >
              Projects
            </Text>
            <Table title="Projects" tableHeads={tableHeads} tableItems={tableItems} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectspagePage;

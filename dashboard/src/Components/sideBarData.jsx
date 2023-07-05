import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: "Create Play List",
        path: "/create",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "List Of Play List",
        path: "/list",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text",
    },
    {
        title: "New Song",
        path: "/new",
        icon: <FaIcons.FaCartPlus />,
        cName: "nav-text",
    },
    {
        title: "View Play List",
        path: "/view",
        icon: <IoIcons.IoMdPeople />,
        cName: "nav-text",
    },
    {
        title: "Log Out",
        path: "/",
        icon: <IoIcons.IoMdHelpCircle />,
        cName: "nav-text",
    }

];
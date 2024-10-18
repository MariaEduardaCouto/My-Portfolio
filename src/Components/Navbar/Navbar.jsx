import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./style.css";
import Logo from "../../assets/LogoMLroxo.png";
import ArrowUp from "../../assets/svg/arrowUp.svg";
import MenuIcon from "../../assets/svg/Menu.svg";
import CloseIcon from "../../assets/svg/closeIcon.svg";
import brazilFlag from "../../assets/brazil.png";
import ukFlag from "../../assets/uk.png";
import spainFlag from "../../assets/spain.png";
import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openTab, setOpenTab] = React.useState(2);
  const [isOpen, setIsOpen] = useState(false);

  const tabText = (tab) => {
    switch (tab) {
      case 1:
        return {
          text: t("english"),
          icon: ukFlag,
        };
      case 2:
        return {
          text: t("portugues"),
          icon: brazilFlag,
        };

      case 3:
        return {
          text: t("spanish"),
          icon: spainFlag,
        };

      default:
        return {
          text: "",
          icon: null,
        };
    }
  };
  const { text, icon } = tabText(openTab);
  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
      <li className="transition ease-in-out hover:-translate-y-2 hover:scale-110 ">
        <Link className={isActive ? " title " : ""} to={to} {...props}>
          {children}
        </Link>
        <img
          src={ArrowUp}
          alt="Arrow Up"
          className="absolute left-full ml-1 mt-[-18px] w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </li>
    );
  }

  return (
    <div className="px-8 md:px-14">
      <nav className="nav flex items-center w-full justify-between  border-b-[0.01rem]  border-b-gray-300 py-4 mt-3 md:mt-0 md:py-8 px-4">
        <Link to="/" className="relative title logo">
          Maria Lima
          <img
            src={Logo}
            alt="Logo"
            className="absolute top-[-16px] right-[-24px] w-7 h-7"
          />
        </Link>

     
        <button
          className="block md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <img src={MenuIcon} alt="Menu" className="w-8 h-8 bg-white" />
        </button>

        <div className="hidden md:flex space-x-4 ">
          <ul>
            <CustomLink to="/About">{t("about")}</CustomLink>
            <CustomLink to="/Projects">{t("projects")}</CustomLink>
            <CustomLink to="/Work">{t("work")}</CustomLink>
            <CustomLink
              to="https://drive.google.com/file/d/1Uv3B31Pv3bnl41Rrhz6NdUcdaryUONge/view"
              target="_blank"
            >
              {t("myCV")}
            </CustomLink>
            <CustomLink to="mailto:mariaeduardacoutt@gmail.com?subject=Contact%20via%20your%20Portfolio&body=Hello%20Maria,%20">
              {t("contactMe")}
            </CustomLink>
            {/* <li className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-1 focus:outline-none"
              >
                <img src={icon} alt="Selected Language" className="w-6 h-6" />
                <FaAngleDown className="text-gray-600" />
              </button>

        
              {isOpen && (
                <div className="absolute z-10 w-60 mt-2 bg-white divide-y divide-gray-100 rounded-[8px] shadow  dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 w-60">
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenTab(1);
                          setIsOpen(false);
                        }}
                        className={`block items-center flex flex-row px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          openTab === 1 ? "bg-blue-500 text-white" : ""
                        }`}
                      >
                        <img
                          src={ukFlag}
                          alt="Selected Language"
                          className="w-6 h-6 mr-2"
                        />{" "}
                        {t("english")}
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li> */}
          </ul>
        </div>
      </nav>

      {/* Sidebar*/}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setSidebarOpen(false)}
        >
          <img src={CloseIcon} alt="Close" className="w-6 h-6 bg-white" />
        </button>

        <ul className="flex flex-col space-y-4 p-8">
          <CustomLink to="/About" onClick={() => setSidebarOpen(false)}>
            {t("about")}
          </CustomLink>
          <CustomLink to="/Projects" onClick={() => setSidebarOpen(false)}>
            {t("projects")}
          </CustomLink>
          <CustomLink to="/Work" onClick={() => setSidebarOpen(false)}>
            {t("work")}
          </CustomLink>
          <CustomLink
            to="https://drive.google.com/file/d/1Uv3B31Pv3bnl41Rrhz6NdUcdaryUONge/view"
            target="_blank"
            onClick={() => setSidebarOpen(false)}
          >
            {t("myCV")}
          </CustomLink>
          <CustomLink
            to="mailto:mariaeduardacoutt@gmail.com?subject=Contact%20via%20your%20Portfolio&body=Hello%20Maria,%20"
            onClick={() => setSidebarOpen(false)}
          >
            {t("contactMe")}
          </CustomLink>
        </ul>
      </div>
      
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}

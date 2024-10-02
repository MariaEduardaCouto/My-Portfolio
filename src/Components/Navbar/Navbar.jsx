import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./style.css";
import Logo from "../../assets/LogoMLroxo.png";
import ArrowUp from "../../assets/svg/arrowUp.svg";
import MenuIcon from "../../assets/svg/Menu.svg";
import { t } from "i18next";
import { useState } from "react";

export default function Navbar() {



  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
      <li className="transition ease-in-out hover:-translate-y-2 hover:scale-110">
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
    <div className=" px-14">
      <nav className="nav flex items-center w-full justify-between  border-b-[0.01rem]  border-b-gray-300 py-8 px-4">
        <Link to="/" className="relative title logo">
          Maria Lima
          <img
            src={Logo}
            alt="Logo"
            className="absolute top-[-16px] right-[-24px] w-7 h-7"
          />
        </Link>


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
        </ul>

        
      </nav>
    </div>
  );
}

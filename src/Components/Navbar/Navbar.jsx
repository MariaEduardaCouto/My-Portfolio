import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./style.css";

export default function Navbar() {
 
  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
      <li className= "transition ease-in-out hover:-translate-y-2 hover:scale-110" >
        <Link className={isActive ? " text-gray-500 " : ""} to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }

  return (
    <div className=" px-14">
      <nav className="nav flex items-center w-full justify-between  border-b-[0.01rem]  border-b-gray-300 py-8 px-4">
        <Link to="/" className="title logo">
          Maria Lima
        </Link>
        <ul>
          <CustomLink to="/About">About</CustomLink>
          <CustomLink to="/Projects">Projects</CustomLink>
          <CustomLink to="/Work">Work</CustomLink>

          <CustomLink
            to="https://drive.google.com/file/d/1Uv3B31Pv3bnl41Rrhz6NdUcdaryUONge/view"
            target="_blank"
          >
            My CV
          </CustomLink>

          <CustomLink to="mailto:mariaeduardacoutt@gmail.com?subject=Contact%20via%20your%20Portfolio&body=Hello%20Maria,%20">
            Contact me
          </CustomLink>
        </ul>
      </nav>
    </div>
  );
}

import "./Header.scss";
import { NavLink, useLocation } from "react-router-dom";
import { Browser } from "../Browser";
import { Logo } from "../Logo";
import { useState } from "react";

export const Header = () => {
  const location = useLocation();
  const [isOpenNav, setOpenNav] = useState(false);

  const navBar = () => {
    setOpenNav(!isOpenNav);
  };
  return (
    <header className="header-box">
      <div className="logo-box">
        <Logo />
        <h1 className="title">Employee Management App</h1>
      </div>

      <nav className="header">
        <button className="hamburger-btn" onClick={navBar}>
          &#9776;
        </button>
        <ul className={`header__list ${isOpenNav ? "open" : ""}`}>
          <li onClick={navBar}>
            <NavLink to={"/"} className="header__list-item">
              Home
            </NavLink>
          </li>
          <li onClick={navBar}>
            <NavLink to={"/employees"} className="header__list-item">
              Employees list
            </NavLink>
          </li>
          <li onClick={navBar}>
            <NavLink to={"/employees/new"} className={"header__list-item"}>
              Add employee
            </NavLink>
          </li>
          <li>
            {location.pathname === "/employees" && (
              <div className="browser">
                <Browser />
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

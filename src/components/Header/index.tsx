import "./Header.scss";
import { NavLink, useLocation } from "react-router-dom";
import { Browser } from "../Browser";
import { Logo } from "../Logo";

export const Header = () => {
  const location = useLocation();
  return (
    <header className="header-box">
      <div className="logo-box">
        <Logo />
        <h1 className="title">Employee Management App</h1>
      </div>
      {location.pathname === "/employees" && (
        <div className="browser">
          <Browser />
        </div>
      )}
      <nav className="header">
        <ul className="header__list">
          <li>
            <NavLink to={"/"} className="header__list-item">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/employees"} className="header__list-item">
              Employees list
            </NavLink>
          </li>
          <li>
            <NavLink to={"/employees/new"} className={"header__list-item"}>
              Add employee
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

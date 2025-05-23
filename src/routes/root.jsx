import React, { useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";
// Context
import { AuthenticationContext } from "../Context/AuthenticationContext";
import { LuLogOut } from "react-icons/lu";

export default function Root() {
  const authenticator = useContext(AuthenticationContext);
  return (
    <div className="App container mt-4 p-1 d-flex shadow">
      <nav className="navbar bg-accept text-light mb-3">
        <ul className="navbar-nav m-auto">
          <NavLink
            to={`/home/`}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Home
          </NavLink>{" "}
          <NavLink
            to={`/about/`}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            About
          </NavLink>{" "}
          <NavLink
            to={`/contact/`}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Contact
          </NavLink>{" "}
          {authenticator.isAuthenticated && (
            <NavLink
              to={`/personal/`}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              Personal
            </NavLink>
          )}{" "}
          {authenticator.isAuthenticated && (
            <NavLink className={"text-warning"} onClick={authenticator.logout} >Logout</NavLink>
          )}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

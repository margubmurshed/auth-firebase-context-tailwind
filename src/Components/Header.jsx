import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = [
    { id: 1, path: "/", text: "Home" },
    { id: 2, path: "/login", text: "Login" },
    { id: 3, path: "/register", text: "Register" },
  ];
  return (
    <div className="shadow-lg">
      <div className="container mx-auto navbar bg-white-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-3">
            {links.map(({ id, path, text }) => (
              <li key={id}>
                <NavLink to={path} className={({isActive}) => isActive ? 'bg-violet-500 text-white' : ''}>{text}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

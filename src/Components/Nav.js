import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Nav.css";
const list = [
  { name: "Home", path: "/", exact: true },
  { name: "Kursy ukończone", path: "/completed" },
  { name: "Kursy rozpoczęte", path: "/started" },
  { name: "Projekty", path: "/projects" },
  { name: "Kontakt", path: "/contact" },
];

const Nav = () => {
  const menu = list.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className="main">
      <ul>{menu}</ul>
    </nav>
  );
};

export default Nav;

import React from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <nav className={styles.header}>
      <div>
        <Link to="/" className="brand-logo">Todos</Link>
      </div>
      <div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink
              className={styles.link}
              style={({ isActive }) => ({textDecoration: isActive ? "underline" : "none"})}
              end
              to="/create-todo-form"
            >
              Create todo form
            </NavLink></li>
          <li>
            <NavLink
              className={styles.link}
              style={({ isActive }) => ({textDecoration: isActive ? "underline" : "none"})}
              end
              to="/"
            >
              Todos
            </NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

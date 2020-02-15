import React from "react";
import classes from "./Drawer.module.css";
import { NavLink } from "react-router-dom";
import Backdrop from "../../UI/Backdrop/Backdrop";

// const links = new Array(10).fill("").map((_, index) => `Link ${index + 1}`);

const renderLinks = (links, clickHandler) =>
  links.map((link, index) => (
    <li key={index}>
      <NavLink
        to={link.to}
        exact={link.exact}
        activeClassName={classes.active}
        onClick={clickHandler}
      >
        {link.label}
      </NavLink>
    </li>
  ));

const Drawer = props => {
  const cls = [classes.Drawer];

  if (!props.isOpen) {
    cls.push(classes.close);
  }

  const links = [{ to: "/", label: "Список", exact: true }];

  if (props.isAuthenticated) {
    links.push({ to: "/quiz-creator", label: "Создать тест", exact: false });
    links.push({ to: "/logout", label: "Выйти", exact: false });
  } else {
    links.push({ to: "/auth", label: "Авторизация", exact: false });
  }

  return (
    <>
      <nav className={cls.join(" ")}>
        <ul>{renderLinks(links, props.onClose)}</ul>
      </nav>
      {props.isOpen ? <Backdrop onClick={props.onClose} /> : null}
    </>
  );
};

export default Drawer;

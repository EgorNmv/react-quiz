import React, { Component } from "react";
import classes from "./Drawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = new Array(10).fill("").map((_, index) => `Link ${index + 1}`);

class Drawer extends Component {
  renderLinks() {
    return links.map((link, index) => (
      <li key={index}>
        <a>{link}</a>
      </li>
    ));
  }

  render() {
    const cls = [classes.Drawer];

    if (!this.props.isOpen) {
      cls.push(classes.close);
    }

    return (
      <>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </>
    );
  }
}

export default Drawer;

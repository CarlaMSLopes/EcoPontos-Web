import { slide as Menu } from "react-burger-menu";
import React from "react";
import LinkRoute from "../LinkRoute/LinkRoute";
import "../BurguerMenu/BurguerMenu.css";
export default class BurguerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu
        itemListClassName={"LinkRoute"}
        width={160}
        burgerButtonClassName={"Button"}
        right
      >
        <LinkRoute
          id="home"
          className="menu-item"
          caminho="/SignUp"
          nome="Benefícios"
        />
        <LinkRoute
          id="home"
          className="menu-item"
          caminho="/About"
          nome="Sobre nós"
        />
        <LinkRoute
          id="home"
          className="menu-item"
          caminho="/SignUp"
          nome="Login"
        />
      </Menu>
    );
  }
}

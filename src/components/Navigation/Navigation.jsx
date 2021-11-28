import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
const Navigation = () => {
  return (
    <nav>
      <div className="layerNav">
        <NavLink to={"/"} className="link">
          Counter
        </NavLink>
        <NavLink to={"/phoneBook"} className="link">
          PhoneBook
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;

import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css"


const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link to={`/`}>
        <h1>AchèteLeTruc /</h1>
        </Link>
        <Link to={`/`}>
        <h1 className="Cart"> View Cart </h1>
        </Link>
      </div>
    </div>
  )
};

export default Header
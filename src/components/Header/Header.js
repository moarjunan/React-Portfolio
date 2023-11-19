import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="header-container">
      <p className="header-text">MO ARJUNAN</p>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Header;

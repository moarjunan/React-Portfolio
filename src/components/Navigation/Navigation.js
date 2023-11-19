import React from "react";
import "./Navigation.css";
import Button from "@mui/material/Button";

const pages = ["About", "Portfolio", "Contact", "Resume"];

function Navigation({ currentPage, setCurrentPage, handleCloseNavMenu }) {
  const handlePageClick = (page) => {
    setCurrentPage(page);
    handleCloseNavMenu && handleCloseNavMenu();
  };

  return (
    <nav className="nav nav-tabs" style={{ paddingRight: "15px", paddingTop: "10px", height: "40px" }}>
      {pages.map((page) => (
        <Button
          key={page}
          id="nav-link"
          href={`#${page.toLowerCase()}`}
          onClick={() => handlePageClick(page)}
          className={`nav-link ${currentPage === page ? "active" : ""}`}
        >
          {page}
        </Button>
      ))}
    </nav>
  );
}

export default Navigation;

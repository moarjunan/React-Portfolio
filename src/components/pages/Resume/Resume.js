// Imports
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PdfFile from "../../../marjunan_resume.pdf";
import "./Resume.css";

// Function that renders the downloadable resume, proficiencies & exports
export default function Resume() {
  return (
    <Box>
      <div className="resume-container">
        <div className="skill-section">
          <h2>Front-end Skills</h2>
          <p>
            - HTML<br />
            - CSS<br />
            - JavaScript<br />
            - JQuery<br />
            - Responsive Design<br />
            - React<br />
            - Bootstrap
          </p>
        </div>
        <div className="skill-section">
          <h2>Back-end Skills</h2>
          <p>
            - HTML<br />
            - APIs<br />
            - NodeJS<br />
            - Express<br />
            - MySQL, Sequelize<br />
            - MongoDB, Mongoose<br />
            - Bootstrap<br />
            - REST<br />
            - GraphQL
          </p>
        </div>
        <div id="other-tech-skills" className="skill-section">
          <h2>Other Tech Skills</h2>
          <p>
            - SQL (Snowflake, SQL Server)<br />
            - Python (NumPy, Pandas, Scikit-learn, Keras, Flask)<br />
            - R, SAS<br />
            - ETL (Extract, Transform, Load)<br />
            - Sigma, Power BI, Tableau, Looker<br />
            - Time Series Forecasting<br />
            - Productioninzing Models<br />
            - Segmentation<br />
            - Regression
          </p>
        </div>
      </div>
      {/* Resume Button is placed outside the .resume-container div */}
      <div style={{ display: "flex", justifyContent: "center", paddingTop: "25px" }}>
        <a
          href={PdfFile}
          download="Mo Arjunan Resumé"
          target="_blank"
          rel="noreferrer"
        >
          <Button id="resume-button" className="pop-on-hover" style={{ backgroundColor: "#6F7D63", color: "white" }}>
            Click Here to Download My Resume
          </Button>
        </a>
      </div>
      <br />
    </Box>
  );
}

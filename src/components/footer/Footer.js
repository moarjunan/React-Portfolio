import React from "react";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "./Footer.css";

const socialLinks = [
  {
    icon: <LinkedInIcon className="footer-icon" />,
    link: "https://www.linkedin.com/in/mukunth-arjunan/",
  },
  {
    icon: <GitHubIcon className="footer-icon" />,
    link: "https://github.com/moarjunan",
  },
  {
    icon: <EmailIcon className="footer-icon" />,
    link: "mailto:mukunth.arjunan@gmail.com",
  },
];

const Footer = () => {
  const handleIconClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="footer-container">
      <Grid container justifyContent="center">
        <Grid container item xs={4} justifyContent="space-evenly">
          {socialLinks.map((social, index) => (
            <div key={index} className="pop-on-hover" onClick={() => handleIconClick(social.link)}>
              {social.icon}
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

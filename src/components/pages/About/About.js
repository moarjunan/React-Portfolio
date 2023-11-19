// Imports
import React from "react";
import "./About.css";
import hero from "../../../images/Me.png";
import CardMedia from "@mui/material/CardMedia";

export default function About() {
  return (
    <div className="about-container" style={{ padding: "20px" }}>
      <CardMedia
        component="img"
        className="color-img"
        style={{
          height: "auto",
          maxWidth: "100%",
          maxHeight: "500px",
          margin: "0 auto",
          marginLeft: "20px",
          marginRight: "20px",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
        image={hero}
        alt="About Me"
      />

      <div className="about-content" style={{ width: "70%", margin: "0 auto", color: "#2D1E12" }}>
        <h1 id="about-me-title" style = {{color: "#4E5D44"}} >OH! Who is that?</h1>
        <p id="p-about">
          Hello! I'm a full-stack software developer with a strong background in
          statistics and data science.
        </p>
        <p id="p-about">
          Armed with a statistics degree, I've built a solid foundation in technical
          thinking, problem-solving, and an impressive ability to wade through oceans
          of data. My journey in data science has sharpened my skills in handling intricate
          data and making thoughtful decisions, which is why I decided to expand my skillset
          to include full-stack development. And thanks to my time working in the consulting
          industry, I've come to appreciate the power of effective communication against
          multiple levels of stakeholders.
        </p>
        <p id="p-about">
          In my downtime, you'll often find me immersed in the worlds crafted by authors,
          as reading has been a lifelong passion of mine. I also find solace and invigoration
          in the tranquility of swimming, where each stroke becomes a metaphorical dive into the vast
          ocean of possibilities. My affinity for nature and plants takes me outdoors,
          exploring the beauty of the natural world (if you cant tell from my green and brown earth tone page).
          Interestingly, these hobbies seamlessly intertwine with my love for technology. Much like a well-crafted narrative,
          coding allows me to weave intricate digital landscapes. Just as a swimmer navigates
          the water, I navigate the ever-evolving tech realm. And just as nature inspires growth,
          my tech ventures continue to blossom and evolve.
        </p>
        <p id="p-about">
          Always open to expanding my network and fostering new connections!
          I thrive on the exchange of ideas and knowledge, welcoming opportunities to learn from diverse perspectives.
          Whether it's a professional insight or a shared passion, connecting with like-minded individuals energizes me.
          Feel free to reach out!
        </p>
      </div>
    </div>
  );
}

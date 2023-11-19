import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { projects } from "../../../projects";

function Project({ project }) {
  return (
    <Grid item xs={12} md={6} lg={4} xl={3}>
      <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#8F9779", color: "#F0F5E1", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <CardMedia
          component="img"
          alt="displayed projects with associated links"
          height="140"
          image={project.imageLink}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.projectTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            id="portfolio-button"
            className="pop-on-hover"
            href={project.liveLink}
            size="small"
            style={{ backgroundColor: "#4E3A28", color: "#fff" }}
          >
            Live URL
          </Button>
          <Button
            id="portfolio-button"
            className="pop-on-hover"
            href={project.gitHub}
            size="small"
            style={{ backgroundColor: "#2D1E12", color: "#fff" }}
          >
            GitHub
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default function Work() {
  return (
    <div className="portfolio-container" style={{ marginLeft: "20px", marginBottom: "20px", textAlign: "center" }}>
      <h1 className="portfolio-header" style={{ color: "#4E3A28" }}>Portfolio</h1>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </Grid>
    </div>
  );
}

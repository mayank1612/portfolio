import React from "react";
import { Typography, makeStyles, Grid } from "@material-ui/core";
import Card from "../components/Card";
const useStyles = makeStyles((theme) => ({
  projectContainer: {
    background: "#fff",
    padding: "50px 80px",
  },
  heading: {
    color: "#333",
    fontSize: "30px",
    fontWeight: "800",
    marginBottom: "10px",
  },
  subheading: {
    fontSize: "16px",
    color: "#808080",
  },
  projectGrid: {
    padding: "10px",
  },
  projectGridContainer: { marginTop: "50px" },
}));
const projectsData = [
  {
    description: "Some random text",
    link: "",
    image: "",
  },
  {
    description: "Some random text",
    link: "",
    image: "",
  },
  {
    description: "Some random text",
    link: "",
    image: "",
  },
];
function Projects() {
  const classes = useStyles();
  return (
    <div id="projects" className={classes.projectContainer}>
      <Typography variant="body1" className={classes.heading}>
        Projects
      </Typography>
      <Typography variant="body2" className={classes.subheading}>
        Here are a few design projects I've worked on recently.
      </Typography>
      <Grid container className={classes.projectGridContainer}>
        {projectsData.map((data) => {
          return (
            <Grid item className={classes.projectGrid} xs={12} md={4}>
              <Card
                text={data.description}
                redirectLink={data.link}
                buttonText="View Website"
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Projects;

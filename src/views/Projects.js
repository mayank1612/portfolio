import React from "react";
import { Typography, makeStyles, Grid } from "@material-ui/core";
import Card from "../components/Card";
const useStyles = makeStyles((theme) => ({
  projectContainer: {
    background: "#fff",
    padding: "50px 80px",
    [theme.breakpoints.down("xs")]: { padding: "20px" },
  },
  heading: {
    color: "#333",
    fontSize: "30px",
    fontWeight: "800",
    marginBottom: "10px",
    [theme.breakpoints.down("xs")]: { fontSize: "18px" },
  },
  subheading: {
    fontSize: "16px",
    color: "#808080",
    [theme.breakpoints.down("xs")]: { fontSize: "14px" },
  },
  projectGrid: {
    padding: "10px",
  },
  projectGridContainer: {
    marginTop: "50px",
    [theme.breakpoints.down("xs")]: { marginTop: "20px" },
  },
}));
const projectsData = [
  {
    description:
      "Secrets app to share secrets anonymously. It uses Google OAuth and app credentials for login.",
    link: "https://arcane-earth-62220.herokuapp.com/",
    image:
      "https://cdn.pixabay.com/photo/2016/02/15/23/40/security-1202344_960_720.png",
  },
  {
    description:
      "Todo-List where multiple lists can be created which are stored using MongoDB.",
    link: "https://blooming-fjord-25855.herokuapp.com/",
    image:
      "https://cdn.pixabay.com/photo/2018/09/15/16/26/checklist-3679741_960_720.jpg",
  },
  {
    description:
      "MB Blogs is a place where you can add your blogs to MB world.",
    link: "https://limitless-shore-98688.herokuapp.com/",
    image:
      "https://cdn.pixabay.com/photo/2014/08/27/08/11/blogging-428955_960_720.jpg",
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
                image={data.image}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Projects;

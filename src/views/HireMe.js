import React from "react";
import { makeStyles, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hireMeSection: {
    background: `url("https://praveen.science/assets/img/parallax/parallax-3.jpg") no-repeat center center`,
    height: "200px",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    position: "relative",
  },
  imgWrapper: {
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    position: "absolute",
    background: "rgba(0, 0, 0, .7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  hireMeContent: {},
  hireMeText: {
    fontSize: "30px",
    color: "#fff",
    "&:hover": {
      textDecoration: "none",
      color: "#82b440",
      transition: "all ease .3s",
      "&::before": { opacity: 1, width: "110%" },
    },
  },
}));

function HireMe() {
  const classes = useStyles();
  return (
    <div className={classes.hireMeSection}>
      <div className={classes.imgWrapper}>
        <div className={classes.hireMeContent}>
          <Link href="#contact" className={classes.hireMeText}>
            May I help you with something? Hire me now.
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HireMe;
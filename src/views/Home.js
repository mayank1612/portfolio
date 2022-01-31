import React from "react";
import { Typography, Grid, makeStyles, Link } from "@material-ui/core";
import {
  FaStackOverflow,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Typewriter from "typewriter-effect";
import home_img from "./home_img.jpg";
import { ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  home: { height: "100vh", width: "100%" },
  imgBackgroung: {
    background: `url(${home_img}) no-repeat center center`,
    width: "100%",
    height: "100%",
    padding: "0",
    backgroundSize: "cover",
  },
  backgroundCover: {
    backgroundColor: "rgba(0,0,51,0.35);",

    height: "100%",
  },
  homeTextGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    color: "#fff",
    flexDirection: "column",
  },
  hiText: {
    color: "#fff",
    fontSize: "23px",
    [theme.breakpoints.down("xs")]: { fontSize: "20px" },
  },
  nameText: {
    color: "#fff",
    fontSize: "80px",
    lineHeight: "1.3",
    [theme.breakpoints.down("xs")]: {
      fontSize: "40px",
    },
  },
  typewritterGrid: {
    display: "flex",
    marginTop: "10px",
  },
  typewriter: {
    fontSize: "23px",
    marginLeft: "5px",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: { fontSize: "20px" },
  },
  iconsGrid: {
    margin: "20px",
  },
  icons: {
    border: "1px solid white",
    borderRadius: "100%",
    padding: "10px",
    color: "white",
    margin: "10px",
    "&:hover": {
      background: "black",
      border: "1px solid black",
      transition: "all ease .3s",
    },
  },
  expandIcons: {
    marginTop: "40px",
    fontSize: "30px",
    animation: `$upDown 1s cubic-bezier(0.5, 0.05, 1, 0.5)`,
    animationIterationCount: "infinite",
    animationDirection: "alternate",
  },

  "@keyframes upDown ": {
    from: { transform: "translate(0px, 4px)" },
  },
}));
function Home() {
  const classes = useStyles();
  return (
    <div id="home" className={classes.home}>
      <div className={classes.imgBackgroung}>
        <div className={classes.backgroundCover}>
          <Grid container className={classes.homeTextGrid}>
            <Grid item>
              <Typography className={classes.hiText}>Hi, I am</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.nameText}>
                Mayank Bhagyawani
              </Typography>
            </Grid>
            <Grid item className={classes.typewritterGrid}>
              <Typography className={classes.hiText}>I am a</Typography>
              <Typography className={classes.typewriter}>
                <Typewriter
                  options={{
                    strings: [
                      "Web Developer",
                      "Front End Enthusiast",
                      "Kick Boxing Player",
                      "Meditator",
                      "Yoga Enthusiast",
                    ],
                    delay: 75,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Typography>
            </Grid>
            <Grid item className={classes.iconsGrid}>
              <Link href="https://github.com/mayank1612" target="_blank">
                <FaGithub className={classes.icons} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mayankbhagyawani/"
                target="_blank"
              >
                <FaLinkedinIn className={classes.icons} />
              </Link>
              <Link
                href="https://stackoverflow.com/users/15500292/mayank-bhagyawani"
                target="_blank"
              >
                <FaStackOverflow className={classes.icons} />
              </Link>
              <Link
                href="https://www.instagram.com/mayankbhagyawani/"
                target="_blank"
              >
                <FaInstagram className={classes.icons} />
              </Link>
            </Grid>
            <Grid item>
              <ExpandMore className={classes.expandIcons} />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Home;

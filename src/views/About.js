import React from "react";
import { Typography, Grid, makeStyles, Link } from "@material-ui/core";
import mb from "./mb.png";
import aboutbg from "./aboutbg.jpg";
const useStyles = makeStyles((theme) => ({
  aboutGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "50px 250px",
    background: `url("https://i.imgur.com/Yj15qi8.png") repeat center center`,
  },
  profilePicGrid: {},
  profilePic: {
    width: "140px",
    borderRadius: "50%",
    transform: "rotate(354deg)",
  },
  contentGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "20px",
  },
  mainGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: "20px 0px",
  },
  content: {
    textAlign: "start",
    fontSize: "14px",
    fontFamily: "'Open Sans', sans-serif",
    lineHeight: "25px",
    fontWeight: 400,
    color: "#333",
    margin: "10px 0px",
  },
  about: {
    fontSize: "23px",
  },
  heading: {
    fontSize: "50px",
  },
}));
function About() {
  const classes = useStyles();
  return (
    <Grid container className={classes.aboutGrid} id="about">
      <Grid item>
        <Typography className={classes.about}>About</Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.heading}>
          Let me introduce myself.
        </Typography>
      </Grid>
      <Grid item>
        <Grid container className={classes.mainGrid}>
          <Grid item xs="3" className={classes.profilePicGrid}>
            <img
              src={mb}
              alt="profile pic"
              className={classes.profilePic}
            ></img>
          </Grid>
          <Grid item xs="9" className={classes.contentGrid}>
            <Typography className={classes.content}>
              {" "}
              People call me Mayank or Manni. I am an epicure and vegetarian.
              Body is made up of 5 elements but this website is made up of many
              elements. This defines me as a Full Stack Web Developer.
              <Typography className={classes.content}>
                {" "}
                Heard a lot about me? Oh well. Don’t worry. It can’t all be
                true. I am{" "}
                <a href="https://www.artofliving.org/">Art of Living</a> (AOL)
                volunteer with vision to be an AOL teacher. I served as a AOL
                student campus coordinator for 3 years during graduation at
                Lovely Professional University.
              </Typography>
              <Typography className={classes.content}>
                {" "}
                I love to take out time to practice Kick-Boxing. I explored
                Karate, Taekwondo, Boxing and Sqay Martial Art. I enjoy
                flexibility therefore I do yoga as well and to manage this all,
                I meditate &#128522;
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;

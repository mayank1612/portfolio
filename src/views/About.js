import React from "react";
import { Typography, Grid, makeStyles, Link } from "@material-ui/core";
import { FaGlobe, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import mb from "./mb.png";

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
    flexWrap: "nowrap",
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
  detailsGrid: { padding: "80px 5px 20px 5px" },
  detailHeading: {
    textAlign: "start",
    fontWeight: 700,
    color: "#333",
    fontSize: "18px",
    fontFamily: "Montserrat",
    textTransform: "uppercase",
  },
  detailContentDiv: {
    textAlign: "start",
    margin: "5px 50px 5px 0px",
    display: "flex",
    alignItems: "center",
  },
  profileDetials: { display: "flex", color: "#333" },
  iconWrapper: { display: "flex", margin: "auto" },
  FaGlobe: {
    color: "#337ab7",
    width: "13px",
    marginRight: "7px",
  },
  FaGraduationCap: {
    color: "#006800",
    width: "15px",
    marginRight: "4px",
  },
  FaBriefcase: {
    color: "#b10000",
    width: "13px",
    marginRight: "9px",
  },
  personalDetailsSection: {
    textAlign: "start",
    margin: "25px 50px 5px 0px",
    alignItems: "center",
  },
  personalDetails: {
    margin: "15px 0px",
  },
  personalKey: {
    color: "#333",
    fontSize: "16px",
    fontWeight: "700",
  },
  personalValue: {
    color: "#333",
    fontSize: "14px",
  },
}));

const personalDetails = [
  { keyName: "Full Name:", value: "Mayank Bhagyawani" },
  { keyName: "Birth Date:", value: "16 December, Every Year" },
  {
    keyName: "Professional Career:",
    value: "Software Engineer Intern (React Developer)",
  },
  {
    keyName: "Email:",
    value: "mayankbhagyawani101@gmail.com",
  },
];
function About() {
  const classes = useStyles();

  const aboutText = [
    () => {
      return (
        <Typography className={classes.content}>
          People call me Mayank or Manni. I am an epicure and vegetarian. Body
          is made up of 5 elements but this website is made up of many elements.
          This defines me as a Full Stack Web Developer.
        </Typography>
      );
    },
    () => {
      return (
        <Typography className={classes.content}>
          Heard a lot about me? Oh well. Don’t worry. It can’t all be true. I am
          <a href="https://www.artofliving.org/">Art of Living</a> (AOL)
          volunteer with vision to be an AOL teacher. I served as a AOL student
          campus coordinator for 3 years during graduation at Lovely
          Professional University.
        </Typography>
      );
    },
    () => {
      return (
        <Typography className={classes.content}>
          I love to take out time to practice Kick-Boxing. I explored Karate,
          Taekwondo, Boxing and Sqay Martial Art I enjoy flexibility therefore I
          do yoga as well and to manage this all, I meditate &#128522;
        </Typography>
      );
    },
  ];

  const profileDetails = [
    {
      icon: <FaGlobe className={classes.FaGlobe} />,
      text: "Web Developer",
    },
    {
      icon: <FaGraduationCap className={classes.FaGraduationCap} />,
      text: "B.Tech, Computer Science, Lovely Professional University, Jalandhar",
    },
    {
      icon: <FaBriefcase className={classes.FaBriefcase} />,
      text: "6+ months experience",
    },
  ];

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
          <Grid item className={classes.profilePicGrid}>
            <img
              src={mb}
              alt="profile pic"
              className={classes.profilePic}
            ></img>
          </Grid>
          <Grid item className={classes.contentGrid}>
            {aboutText.map((AboutItem, index) => {
              return <AboutItem key={index} />;
            })}
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.detailsGrid}>
        <Grid item xs="6">
          <Typography className={classes.detailHeading}>Profile</Typography>
          {profileDetails.map((item, index) => {
            return (
              <div className={classes.detailContentDiv} key={index}>
                <Typography variant="body2" className={classes.profileDetials}>
                  <span className={classes.iconWrapper}>{item.icon}</span>
                  {item.text}
                </Typography>
              </div>
            );
          })}
          <div className={classes.personalDetailsSection}>
            {personalDetails.map((item, index) => {
              return (
                <div key={index} className={classes.personalDetails}>
                  <Typography variant="body2" className={classes.personalKey}>
                    {item.keyName}
                  </Typography>
                  <Typography variant="body2" className={classes.personalValue}>
                    {item.value}
                  </Typography>
                </div>
              );
            })}
          </div>
        </Grid>
        <Grid item xs="6">
          <Typography className={classes.detailHeading}>Skills</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;

import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
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
    overflowX: "hidden",
    width: "100vw",
    [theme.breakpoints.down("xs")]: { padding: "20px" },
  },
  profilePicGrid: {},
  profilePic: {
    width: "140px",
    [theme.breakpoints.down("xs")]: { width: "100px" },
    borderRadius: "50%",
    transform: "rotate(354deg)",
  },
  contentGrid: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "20px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0px",
    },
  },
  mainGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: "20px 0px",
    flexWrap: "nowrap",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      padding: "10px 0px",
    },
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
    [theme.breakpoints.down("xs")]: { fontSize: "20px" },
  },
  heading: {
    fontSize: "50px",
    [theme.breakpoints.down("xs")]: { fontSize: "25px" },
  },
  detailsGrid: {
    padding: "100px 5px 20px 5px",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 5px",
      flexDirection: "column",
    },
  },
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
    [theme.breakpoints.down("xs")]: { margin: "5px" },
  },
  skillsContentDiv: {
    textAlign: "start",
    margin: "5px 50px 5px 0px",
    [theme.breakpoints.down("xs")]: { margin: "5px" },
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
    [theme.breakpoints.down("xs")]: { margin: "5px" },
  },
  personalDetails: {
    margin: "15px 0px",
  },
  skillsPara: {
    marginBottom: "35px",
    [theme.breakpoints.down("xs")]: { marginBottom: "20px" },
  },
  skillsDetails: {
    height: "60px",
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
  skillBarWrapper: { display: "flex", alignItems: "center" },
  skillBar: {
    height: "8px",
    backgroundColor: "#ccc",
    width: "100%",
  },
  skillValue: { fontSize: "14px", marginLeft: "10px" },
  skillGridItem: {
    width: "50%",
    [theme.breakpoints.down("xs")]: { width: "100%", marginTop: "20px" },
  },
  profileDetailsGridItem: {
    width: "50%",
    [theme.breakpoints.down("xs")]: { width: "100%" },
  },
}));

const personalDetails = [
  { keyName: "Full Name:", value: "Mayank Bhagyawani" },
  { keyName: "Birth Date:", value: "16 December, Every Year" },
  {
    keyName: "Professional Career:",
    value: "Software Engineer (React Developer)",
  },
  {
    keyName: "Email:",
    value: "mayankbhagyawani101@gmail.com",
  },
];

const skillsPara =
  "I am a Software Developer. I have a huge passion for developing web applications using React and of course a MERN (MongoDB, ExpressJS, ReactJS, NodeJS) person. I have someplace for Java as well in my heart.";

const skills = [
  { skill: "HTML & CSS, JavaScript", value: "70%" },
  { skill: "React", value: "50%" },
  { skill: "Java", value: "30%" },
  { skill: "GraphQL and Apollo Client", value: "20%" },
  { skill: "Cypress", value: "20%" },
];

function About() {
  const classes = useStyles();

  const aboutText = [
    () => {
      return (
        <Typography className={classes.content}>
          People call me Mayank or Manni. I am an epicure and vegetarian. The
          body is made up of 5 elements but this website is made up of many
          elements. This defines me as a Full Stack Web Developer.
        </Typography>
      );
    },
    () => {
      return (
        <Typography className={classes.content}>
          Heard a lot about me? Oh well. Don’t worry. It can’t all be true. I am
          &nbsp;
          <a href="https://www.artofliving.org/">Art of Living</a> (AOL)
          volunteer with a vision to be an AOL teacher. I served as an AOL
          student campus coordinator for 3 years during graduation at Lovely
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
      text: "1 year + experience",
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
        <Grid item className={classes.profileDetailsGridItem}>
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
        <Grid item className={classes.skillGridItem}>
          <Typography className={classes.detailHeading}>Skills</Typography>
          <div className={classes.skillsContentDiv}>
            <Typography variant="body2" className={classes.skillsPara}>
              {skillsPara}
            </Typography>
            {skills.map((skill, index) => {
              return (
                <div className={classes.skillsDetails} key={index}>
                  <Typography variant="body2">{skill.skill}</Typography>
                  <div className={classes.skillBarWrapper}>
                    <div className={classes.skillBar}>
                      <div
                        style={{
                          height: "8px",
                          background: "black",
                          width: `${skill.value}`,
                        }}
                      ></div>
                    </div>
                    <div className={classes.skillValue}>{skill.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
          {}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;

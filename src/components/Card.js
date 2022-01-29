import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Button from "./Button";
const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "250px",
    border: "1px solid transparent",
    borderRadius: "12px",
    position: "relative",
  },
  cardImage: {
    height: "250px",
    width: "100%",
    border: "1px solid transparent",
    borderRadius: "12px",
    background:
      "url('https://mattfarley.ca/img/projects/wfdesignbuild.png') no-repeat center center",
    backgroundSize: "cover",
  },
  text: { textAlign: "center" },
}));
function Card({ text, buttonText, redirectLink }) {
  const classes = useStyles();
  return (
    <div className={classes.cardContainer}>
      <Typography variant="body1" className={classes.text}>
        {text}
      </Typography>
      <Button redirectLink={redirectLink}>{buttonText}</Button>
      <div className={classes.cardImage}></div>
    </div>
  );
}

export default Card;

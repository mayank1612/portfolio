import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Button from "./Button";

function Card({ text, buttonText, image, redirectLink }) {
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
      background: `url(${image}) no-repeat center center`,
      backgroundSize: "cover",

      transition: "all .3s",
      "&:hover": {
        background: "#141C3A",
        transition: "all .5s linear",
        "& $cardContent": {
          display: "block",
        },
      },
      "& $cardContent": {
        display: "none",
      },
      [theme.breakpoints.down("xs")]: {
        height: "200px",
      },
    },
    cardContent: { display: "block", padding: "20px" },
    text: { textAlign: "center", marginBottom: "20px", color: "#fff" },
  }));
  const classes = useStyles();
  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardContent}>
        <Typography variant="body1" className={classes.text}>
          {text}
        </Typography>
        <Button
          variant="outlined"
          redirectLink={redirectLink}
          style={{
            background: "none",
            borderColor: "#7510F7",
            color: "white",
            padding: "5px 10px",
            textTransform: "none",
            opacity: "1",
            "&:hover": {
              border: "1px solid #7510F7",
              outline: "none",
              background: "#7510F7",
            },
          }}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

export default Card;

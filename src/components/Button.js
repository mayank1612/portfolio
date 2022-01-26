import React from "react";
import { makeStyles, Button as MuiButton } from "@material-ui/core";

function Button({ text, onClick, style: customStyle }) {
  const useStyles = makeStyles((theme) => ({
    button: {
      padding: "10px 30px",
      color: "#fff",
      border: "1px solid #000",
      background: "#000",
      textTransform: "uppercase",
      opacity: ".65",
      ...customStyle,

      "&:hover": {
        border: "1px solid #82b440",
        outline: "none",
        background: "#82b440",
      },
    },
  }));
  const classes = useStyles();
  return (
    <MuiButton className={classes.button} onClick={onClick}>
      {text}
    </MuiButton>
  );
}

export default Button;

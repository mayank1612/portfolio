import React from "react";
import {
  Typography,
  Grid,
  makeStyles,
  TextField,
  Snackbar,
} from "@material-ui/core";
import Button from "../components/Button";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#fff",
    padding: "50px 180px",
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
  form: {
    padding: "30px 250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  textfeild: {
    margin: "10px 0px",

    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#86a55e",
      },
    },
    "& .MuiFormLabel-root": {
      color: "#82b440",
    },
  },

  button: {
    marginTop: "20px",
    background: "red",
  },
}));

function Contact() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function sendMail() {
    const sub = document.getElementById("subject").value;
    const body = document.getElementById("message").value;
    if (sub && body) {
      document.getElementById("message").value = "";
      document.getElementById("subject").value = "";
      window.open(
        `mailto:mayankbhagyawani101@gmail.com?subject=${sub}&body=${body}`
      );
    } else {
      setOpen(true);
    }
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div id="contact" className={classes.contactContainer}>
      <Typography variant="body1" className={classes.heading}>
        Keep in Touch
      </Typography>
      <Typography variant="body2" className={classes.subheading}>
        Speak to me if you have any questions.
      </Typography>
      <div className={classes.form}>
        <TextField
          autoFocus={true}
          placeholder="Subject"
          id="subject"
          fullWidth
          required
          label="Subject"
          variant="outlined"
          className={classes.textfeild}
        />
        <TextField
          placeholder="Message"
          id="message"
          fullWidth
          minRows={10}
          multiline
          required
          label="Message"
          variant="outlined"
          className={classes.textfeild}
        />

        <Button
          text={"submit"}
          onClick={sendMail}
          style={{ marginTop: "10px" }}
        />
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert severity="warning">
            Subject and message field can't be empty!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}

export default Contact;

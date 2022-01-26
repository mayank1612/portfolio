import React from "react";
import { Link, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "sticky",
    zIndex: "500",
    width: "100%",
    top: 0,
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    animation: `$fadein 0.3s`,
  },
  "@keyframes fadein ": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  headerGrid: {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    padding: "20px 70px",
  },
  nameGrid: { display: "flex" },
  name: {
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: "18px",
    color: "#333",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
      color: "#f90",
      transition: "all .3s",
    },
  },
  surname: {
    textTransform: "uppercase",
    fontWeight: "600",
    color: "#f90",
    "&:hover": {
      textDecoration: "none",
    },
  },
  navGrid: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
  },
  navLinks: {
    padding: "10px 5px",
    margin: "0px 10px",
    transition: "all .3s",
    color: "#333",
    textTransform: "uppercase",
    fontSize: "13px",
    fontFamily: "Montserrat",
    "&:hover": {
      textDecoration: "none",
      color: "#82b440",
      transition: "all ease .3s",
      "&::before": { opacity: 1, width: "110%" },
    },
    "&::before": {
      height: "1px",
      background: "black",
      content: "''",
      display: "block",
      position: "relative",
      top: "25px",
      left: "-5%",
      opacity: 0,
      transition: "all ease .3s",
      width: "0%",
    },
  },
}));

const navLinks = ["home", "about", "experience", "projects", "contact"];
function Header() {
  const atBottom = 250;
  const [show, setShow] = React.useState();
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  function handleScroll() {
    setShow(window.pageYOffset >= atBottom);
  }

  const classes = useStyles();
  return show ? (
    <header id="header" className={classes.header}>
      <Grid container className={classes.headerGrid}>
        <Grid item className={classes.nameGrid}>
          <Link className={classes.name}>
            Mayank <span className={classes.surname}>Bhagyawani</span>
          </Link>
        </Grid>
        <Grid item className={classes.navGrid}>
          {navLinks.map((link, index) => {
            return (
              <Link href={`#${link}`} key={index} className={classes.navLinks}>
                {link}
              </Link>
            );
          })}
        </Grid>
      </Grid>
    </header>
  ) : null;
}

export default Header;

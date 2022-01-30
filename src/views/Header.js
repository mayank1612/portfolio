import React from "react";
import { Link, Grid, makeStyles, Popper, Fade } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

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
    [theme.breakpoints.down("xs")]: { padding: "10px 20px" },
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
    [theme.breakpoints.down("xs")]: { fontSize: "14px" },
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
    [theme.breakpoints.down("xs")]: { display: "none" },
  },
  menuIcon: {
    display: "none",
    color: "#333",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: { display: "block" },
  },
  menuLinks: {
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
      "&::before": { opacity: 1, width: "100%" },
    },
    "&::before": {
      height: "1px",
      background: "black",
      content: "''",
      display: "block",
      position: "relative",
      top: "20px",
      opacity: 0,
      transition: "all ease .3s",
      width: "0%",
    },
  },
  popper: {
    zIndex: "9999",
    marginLeft: "-10px",
  },
  paper: {
    background: "#fff",
    width: "100vw",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    boxShadow:
      "2px 3px 1px -1px rgb(0 0 0 / 20%), 4px 3px 1px 0px rgb(0 0 0 / 14%), 1px 5px 3px 0px rgb(0 0 0 / 12%)",
  },
}));

const navLinks = ["home", "about", "experience", "contact"];
function Header() {
  const atBottom = 250;
  const [show, setShow] = React.useState();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const handleClickAway = () => {
    setAnchorEl(false);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  function handleScroll() {
    setShow(window.pageYOffset >= atBottom);
    setAnchorEl(window.pageYOffset < atBottom);
  }
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const classes = useStyles();
  return show ? (
    <header id="header" className={classes.header}>
      <Grid container className={classes.headerGrid}>
        <Grid item className={classes.nameGrid}>
          <Link onClick={scrollTop} className={classes.name}>
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
          <Menu className={classes.menuIcon} onClick={handleClick} />
          <Popper
            open={open}
            anchorEl={anchorEl}
            transition
            className={classes.popper}
            placement="top-end"
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <div className={classes.paper}>
                  {navLinks.map((link, index) => {
                    return (
                      <Link
                        href={`#${link}`}
                        key={index}
                        className={classes.menuLinks}
                        onClick={handleClickAway}
                      >
                        {link}
                      </Link>
                    );
                  })}
                </div>
              </Fade>
            )}
          </Popper>
        </Grid>
      </Grid>
    </header>
  ) : null;
}

export default Header;

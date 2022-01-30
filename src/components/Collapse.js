import React from "react";
import {
  Card as MuiCard,
  CardContent,
  Collapse as MuiCollapse,
  Typography,
  makeStyles,
} from "@material-ui/core";

import { ExpandMore } from "@material-ui/icons";
import PropTypes from "prop-types";

function Collapse(props) {
  const [expanded, setExpanded] = React.useState(false);
  const { heading, subHeading, content } = props;
  const useStyles = makeStyles((theme) => ({
    card: {
      "&::before": {
        height: "1px",
        background: "black",
        content: "''",
        display: "block",
        position: "relative",
        top: "25px",
        left: "-5%",
        width: "0%",
      },
    },
    headerWrapper: {
      textAlign: "left",
      padding: "15px",
    },
    heading: {
      color: "#333",
      fontSize: "18px",
      [theme.breakpoints.down("xs")]: { fontSize: "16px" },
      fontWeight: "700",
    },
    subHeading: {
      color: "#777",
      fontSize: "14px",
    },
    iconWrapper: {
      display: "flex",
      paddingLeft: "90%",
      marginTop: "-25px",
      [theme.breakpoints.down("xs")]: { marginTop: "-20px" },
    },
    icon: {
      cursor: "pointer",
      width: "28px",
      height: "29px",
      background: "#ffd79c",
      color: "#fff",
      borderRadius: "5px",
      [theme.breakpoints.down("xs")]: { width: "20px", height: "20px" },
    },
    iconExpanded: {
      cursor: "pointer",
      transform: "rotate(180deg)",
      width: "28px",
      height: "29px",
      background: "#ffd79c",
      color: "#fff",
      borderRadius: "5px",
      [theme.breakpoints.down("xs")]: { width: "20px", height: "20px" },
    },
    collapseContent: {
      "&.MuiCardContent-root": {
        padding: "0px 15px 15px 15px",
      },
      textAlign: "left",
    },
    content: {
      fontSize: "14px",
      color: "#666",
      lineHeight: "1.6",
    },
  }));

  const classes = useStyles();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <MuiCard className={classes.card}>
      <div onClick={handleExpandClick} className={classes.headerWrapper}>
        <Typography variant="body1" className={classes.heading}>
          {heading}
        </Typography>
        <Typography variant="body1" className={classes.subHeading}>
          {subHeading}
        </Typography>
        <div className={classes.iconWrapper}>
          <ExpandMore
            className={expanded ? classes.iconExpanded : classes.icon}
          />
        </div>
      </div>
      <MuiCollapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.collapseContent}>
          <Typography variant="body2" className={classes.content}>
            {content}
          </Typography>
        </CardContent>
      </MuiCollapse>
    </MuiCard>
  );
}

export default Collapse;
Collapse.propTypes = {
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  subHeading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

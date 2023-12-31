import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Collapse from "../components/Collapse";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@material-ui/lab";
import { FaBriefcase } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const useStyles = makeStyles((theme) => ({
  experienceContainer: {
    background: "#f3f3f3",
    padding: "50px 180px",
    [theme.breakpoints.down("xs")]: { padding: "20px 0px" },
  },
  experience: {
    color: "#333",
    fontSize: "30px",
    fontWeight: "800",
    marginBottom: "10px",
    [theme.breakpoints.down("xs")]: { fontSize: "18px" },
  },
  experienceQuote: {
    fontSize: "16px",
    color: "#808080",
    [theme.breakpoints.down("xs")]: { fontSize: "14px" },
  },
  duration: { color: "#333333", fontSize: "16px" },
  timelineWrapper: {
    margin: "50px 0px",
    [theme.breakpoints.down("xs")]: { display: "none" },
  },
  timelineDot: {
    padding: "15px",
    background: "#ffd79c",
    fontSize: "23px",
    "&.MuiTimelineDot-root": {
      margin: "0px",
    },
  },

  timelineConnector: {
    minHeight: "80px",
    width: "3px",
  },
  timelineConnectorInitial: {
    margin: "auto",
    height: "30px",
    width: "3px",
  },
  timelineOppositeContent: {
    "&.MuiTimelineOppositeContent-root": {
      padding: "18px 16px",
    },
  },

  timelineWrapperMV: {
    margin: "0px",
    display: "none",
    [theme.breakpoints.down("xs")]: { display: "block" },
  },
  timelineItemMV: {
    "&.MuiTimelineItem-missingOppositeContent": {
      "&::before": {
        flex: 0,
        padding: "0px",
      },
    },
  },
  timelineDotMV: {
    padding: "8px",
    background: "#ffd79c",
    fontSize: "20px",
    "&.MuiTimelineDot-root": {
      margin: "0px",
    },
  },
  timelineContentMV: {
    padding: "16px 0px 0px 16px",
  },
}));

const experienceData = [
  {
    heading: "SysCloud Inc.",
    subHeading: "Software Engineer",
    duration: "July 2021 - Present",
    content: `I commenced my journey with the company as an intern in July 2021 and transitioned to a full-time position in August 2022.
    `,
    Icon: () => {
      return <FaBriefcase />;
    },
  },
  {
    heading: "Art of Living",
    subHeading: "Freelancer - Poster designer and video editor",
    duration: "January 2021 - June 2021",
    content: `I utilize Canva for crafting impressive posters and leverage Filmora for proficient video editing. Additionally, I harnessed my proficiency in MS Excel to seamlessly create a WhatsApp group, efficiently importing contacts in bulk and sending messages at once.`,
    Icon: () => {
      return <ImCross />;
    },
  },
];

function Experience() {
  const classes = useStyles();

  return (
    <div id="experience" className={classes.experienceContainer}>
      <Typography variant="body1" className={classes.experience}>
        Experience
      </Typography>
      <Typography variant="body2" className={classes.experienceQuote}>
        Every moment is experience
      </Typography>
      <div className={classes.timelineWrapper}>
        <Timeline align="alternate">
          <TimelineConnector className={classes.timelineConnectorInitial} />
          {experienceData.map((data, index) => {
            const { heading, subHeading, duration, content, Icon } = data;
            return (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  className={classes.timelineOppositeContent}
                >
                  <Typography className={classes.duration} variant="body1">
                    {duration}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot className={classes.timelineDot}>
                    <Icon />
                  </TimelineDot>
                  <TimelineConnector className={classes.timelineConnector} />
                </TimelineSeparator>
                <TimelineContent>
                  <Collapse
                    heading={heading}
                    subHeading={subHeading}
                    content={content}
                  />
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
      <div className={classes.timelineWrapperMV}>
        <Timeline>
          {experienceData.map((data, index) => {
            const { heading, subHeading, duration, content, Icon } = data;
            return (
              <TimelineItem key={index} className={classes.timelineItemMV}>
                <TimelineSeparator>
                  <TimelineDot className={classes.timelineDotMV}>
                    <Icon />
                  </TimelineDot>
                  <TimelineConnector className={classes.timelineConnector} />
                </TimelineSeparator>
                <TimelineContent className={classes.timelineContentMV}>
                  <Collapse
                    heading={heading}
                    subHeading={
                      <>
                        <div>{subHeading}</div>
                        <div>{duration}</div>
                      </>
                    }
                    content={content}
                  />
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    </div>
  );
}

export default Experience;

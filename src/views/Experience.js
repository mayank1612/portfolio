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
  },
  experience: {
    color: "#333",
    fontSize: "30px",
    fontWeight: "800",
    marginBottom: "10px",
  },
  experienceQuote: {
    fontSize: "16px",
    color: "#808080",
  },
  duration: { color: "#333333", fontSize: "16px" },
  timelineWrapper: { margin: "50px 0px" },
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
}));

const experienceData = [
  {
    heading: "SysCloud Inc.",
    subHeading: "Software Engineer Intern, UI Team",
    duration: "July 2021 - Present",
    content:
      "I work on React. I am responsible for creating dummy component specefic to SysCloud, made up of material-ui components and written in TypeScript. We call it as syscloud-ui-component library. Worked on SysCloud Health Dashboard and now working on product application.",
    Icon: () => {
      return <FaBriefcase />;
    },
  },
  {
    heading: "Art of Living",
    subHeading: "Freelancer - Poster designer and video editor",
    duration: "January 2021 - June 2021",
    content:
      "I use Canva to design awesome posters and Filmora for video editing. I used my MS Excel skills to create WhatsApp group by importing contacts all at a time and sending bulk messages.",
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
        EXPERIENCE
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
    </div>
  );
}

export default Experience;

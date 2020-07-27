import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded} onClick={handleChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Bachelor of Engineering
          </Typography>
          <Typography className={classes.secondaryHeading}>
            (2012 - 2016)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5">
            Computer Science and Engineering
            <Typography paragraph>KSR College of Engineering</Typography>
            <Typography paragraph>CGPA - 6.6</Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>HSC</Typography>
          <Typography className={classes.secondaryHeading}>(2012)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5">
            Government Higher Secondary School
            <Typography paragraph>Percentage - 78</Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>SSLC</Typography>
          <Typography className={classes.secondaryHeading}>(2010)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5">
            Government Higher Secondary School
            <Typography paragraph>Percentage - 81</Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import ContactMail from "@material-ui/icons/ContactMail";
import Work from "@material-ui/icons/Work";
import School from "@material-ui/icons/School";
import Code from "@material-ui/icons/Code";
import List from "@material-ui/icons/List";
import SwipeableViews from "react-swipeable-views";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ReactGA from 'react-ga';
import MobStepper from "./components/layouts/common/MobileStepper";
import ProfileComponent from "./components/profile_component";
import SkillsComponent from "./components/skills_component";
import WorkExperience from "./components/work_experience_component";
import Projects from "./components/projects_component";
import Education from "./components/education_component";
import PersonalInfo from "./components/personal_info_component";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createBrowserHistory } from "history";

const useStyles = makeStyles(theme => ({
  mainDiv: {
    display: "flex",
    flexFlow: "column",
    height: "100%",
    width: "100%",
    backgroundColor: "#f5f5f5" // theme.palette.background.paper
  },
  mobStepperOverride: {
    flex: "0 1 40px",
    width: "100%"
  },
  swipeableContainer: {
    height: "100% !important"
  },
  cr: {
    color: "red"
  }
}));

function initializeReactGA() {
  ReactGA.initialize("UA-142421407-1");
  ReactGA.pageview(window.location.pathname);
  ReactGA.event({
    category: 'Visiting',
    action: 'Visted the site',
    label: 'Home Page'
  });
}

initializeReactGA();

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const matches = useMediaQuery('(min-width:600px)');

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Fragment>
      <div className={classes.mainDiv}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            variant={(matches)? "fullWidth" : "scrollable"}
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Gokulakannan T" icon={<PersonPinIcon />} />
            <Tab label="Skills" icon={<Code />} />
            <Tab label="Work Experience" icon={<Work />} />
            <Tab label="Projects" icon={<List />} />
            <Tab label="Education" icon={<School />} />
            <Tab label="personal Info" icon={<ContactMail />} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          className={classes.swipeableContainer}
          enableMouseEvents={true}
          index={value}
          onChangeIndex={index => {
            handleChange(null, index);
          }}
        >
          <ProfileComponent />
          <SkillsComponent />
          <WorkExperience />
          <Projects />
          <Education />
          <PersonalInfo />
        </SwipeableViews>
        <div className={classes.mobStepperOverride}>
          <MobStepper stepValue={value} onChange={handleChange} />
        </div>
      </div>
    </Fragment>
  );
}

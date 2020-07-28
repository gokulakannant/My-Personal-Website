import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import CloudDownload from "@material-ui/icons/CloudDownload";
import PersonIcon from '@material-ui/icons/Person';
import ResumePdf from "../../assets/doc/Gokulakannan.pdf";
import { registerResumeDownloads, registerHireMeClicks } from "../../helpers/GoogleAnalytics";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function DownloadComponent() {
  const classes = useStyles();

  function doDownloadAction() {
    const link = document.createElement("a");
    link.href = ResumePdf;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    registerResumeDownloads();
  }

  function hireMe() {
    const link = document.createElement("a");
    link.href = "mailto:gokulakannanthangaraji@gmail.com";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    registerHireMeClicks();
  }

  return (
    <div>
      <Fab
        variant="extended"
        aria-label="Hire me"
        className={classes.fab}
        onClick={hireMe}
      >
        <PersonIcon color="primary" className={classes.extendedIcon} />
        Hire Me
      </Fab>
      <Fab
        variant="extended"
        aria-label="Get Resume"
        className={classes.fab}
        onClick={doDownloadAction}
      >
        <CloudDownload color="primary" className={classes.extendedIcon} />
        Get Resume
      </Fab>
    </div>
  );
}

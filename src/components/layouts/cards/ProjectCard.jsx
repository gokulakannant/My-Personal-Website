import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  chips: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    }
  },
  cardTitle: {
    textAlign: "center",
    fontWeight: 700
  }
}));

function ProjectCard({ title, description, siteUrl, technologyStack }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={5}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5" className={classes.cardTitle}>
                  {title}
                </Typography>
                {description.split(". ").map((value, index) => {
                  return <Typography paragraph key={index}>{value}</Typography>
                })}
                <div className={classes.chips}>
                  {technologyStack.map((tech, index) => {
                    return <Chip key={index} label={tech} />
                  })}
                </div>
              </Grid>
              <Grid item>
              <Button
                disabled={!siteUrl}
                size="small"
                color="primary"
                onClick={() => {
                  window.open(siteUrl, "_blank");
                }}
              >
                Visit
              </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologyStack: PropTypes.array.isRequired,
  siteUrl: PropTypes.string.isRequired
};

export default ProjectCard;

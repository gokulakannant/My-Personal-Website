import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  root: {
    maxWidth: 150
  },
  media: {
    margin: "0 auto",
    height: 115,
    width: 130,
    backgroundSize: "contain"
  }
});

export default function SkillsCard({name, icon, rating}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={icon}
          title={name}
        />
        <CardContent>
          <Typography component="h5">
            {name}
          </Typography>
        <LinearProgress variant="determinate" value={rating} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

import React from "react";
import ItemGrid from "../grid/ItemGrid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function ProgresserComponent(props) {
  const [completed, setCompleted] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);
  const { classes } = props;

  const progress = React.useRef(() => {});
  React.useEffect(() => {
    progress.current = () => {
      if (completed >= props.maxValue) {
        setCompleted(props.maxValue);
        setBuffer(0);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setCompleted(completed + diff);
        setBuffer(completed + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    function tick() {
      progress.current();
    }
    const timer = setInterval(tick, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <ItemGrid item xs={12} sm={8}>
      <Paper className={classes.paper}>
        <LinearProgress
          color="secondary"
          variant="buffer"
          value={completed}
          valueBuffer={buffer}
        />
      </Paper>
    </ItemGrid>
  );
}
export default withStyles(styles)(ProgresserComponent);

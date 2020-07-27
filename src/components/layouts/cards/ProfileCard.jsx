import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography
} from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Image from "../common/Image";
import profileCardStyle from "../../../assets/jss/react-material-resume/profileCardStyle";
import ReactJsTyping from 'reactjs-typing-effect';

function ProfileCard({ ...props }) {
  const { classes, subtitle, title, description, footer, avatar } = props;
  return (
    <Card className={classes.card}>
      <CardHeader
        classes={{
          root: classes.cardHeader,
          avatar: classes.cardAvatar
        }}
        avatar={<Image src={avatar} alt="..." className={classes.img} />}
      />
      <CardContent className={classes.textAlign}>
      {title !== undefined ? (
          <Typography component="h1" className={classes.cardTitle}>
            {title}
          </Typography>
        ) : null}
        {subtitle !== undefined ? (
          <Typography component="h6" className={classes.cardSubtitle}>
            <ReactJsTyping StringList={subtitle} speed={500}/>
          </Typography>
        ) : null}
        {description !== undefined ? (
          <Typography component="p" className={classes.cardDescription}>
            {description}
          </Typography>
        ) : null}
      </CardContent>
      <CardActions className={classes.textAlign + " " + classes.cardActions}>
        {footer}
      </CardActions>
    </Card>
  );
}

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  description: PropTypes.node,
  footer: PropTypes.node,
  avatar: PropTypes.string
};

export default withStyles(profileCardStyle)(ProfileCard);

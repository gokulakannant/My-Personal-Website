import React from "react";
import { Card, CardActions, CardContent, CardHeader } from "@material-ui/core";
import PropTypes from "prop-types";
import cx from "classnames";
import { withStyles } from "@material-ui/core/styles";
import regularCardStyle from "../../../assets/jss/react-material-resume/regularCardStyle";

class RegularCard extends React.PureComponent {
  render() {
    const {
      classes,
      headerColor,
      plainCard,
      cardTitle,
      cardSubtitle,
      content,
      footer
    } = this.props;

    const plainCardClasses = cx({
      [" " + classes.cardPlain]: plainCard
    });
    const cardPlainHeaderClasses = cx({
      [" " + classes.cardPlainHeader]: plainCard
    });
    return (
      <Card
        style={{ overflow: "unset" }}
        className={classes.card + plainCardClasses}
        raised
      >
        <CardHeader
          classes={{
            root:
              classes.cardHeader +
              " " +
              classes[headerColor + "CardHeader"] +
              cardPlainHeaderClasses,
            title: classes.cardTitle,
            subheader: classes.cardSubtitle
          }}
          title={cardTitle}
          subheader={cardSubtitle}
        />
        <CardContent>{content}</CardContent>
        {footer !== undefined ? (
          <CardActions className={classes.cardActions}>{footer}</CardActions>
        ) : null}
      </Card>
    );
  }
}

RegularCard.defaultProps = {
  headerColor: "purple"
};

RegularCard.propTypes = {
  plainCard: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  headerColor: PropTypes.oneOf(["orange", "green", "red", "blue", "purple"]),
  cardTitle: PropTypes.node,
  cardSubtitle: PropTypes.node,
  content: PropTypes.node,
  footer: PropTypes.node
};

export default withStyles(regularCardStyle)(RegularCard);

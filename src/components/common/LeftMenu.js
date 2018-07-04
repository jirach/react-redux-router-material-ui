import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import blueGrey from "@material-ui/core/colors/blueGrey";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DraftsIcon from "@material-ui/icons/Adb";

const styles = theme => ({
  topLeftLogo: {
    fontSize: 22,
    color: "#CFD8DC",
    textAlign: "center",
    lineHeight: "64px",
    fontWeight: 300,
    backgroundColor: blueGrey[900],
    paddingLeft: 5,
    minHeight: 64
  },
  iconColor: {
    color: "#CFD8DC"
  }
});

class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }
  handleDrawerToggle = () => {
    this.props.handleDrawerToggle();
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.topLeftLogo}>myApartment</div>
        <div>
          <List component="nav">
            <Link
              to="/home"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={this.handleDrawerToggle}
            >
              <ListItem button>
                <ListItemIcon>
                  <DashboardIcon className={classes.iconColor} />
                </ListItemIcon>
                <ListItemText
                  primary="Home"
                  primaryTypographyProps={{ color: "inherit" }}
                />
              </ListItem>
            </Link>
            <Link
              to="/temp"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={this.handleDrawerToggle}
            >
              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon className={classes.iconColor} />
                </ListItemIcon>
                <ListItemText
                  primary="Temp"
                  primaryTypographyProps={{ color: "inherit" }}
                />
              </ListItem>
            </Link>
          </List>
        </div>
      </div>
    );
  }
}

LeftMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LeftMenu);

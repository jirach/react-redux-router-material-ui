import React, { Component } from "react";
import Header from "./components/common/Header";

import HomePage from "./components/pages/HomePage";
import TempPage from "./components/pages/TempPage";

import { Route, HashRouter } from "react-router-dom";

import store from "./util/store";
import { Provider } from "react-redux";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
});

class App extends Component {
  render() {
    const { classes, theme } = this.props;
    return (
      <Provider store={store}>
        <HashRouter>
          <div className={classes.root}>
            <Header />
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <div id={"layoutWrapper"}>
                <Route exact path="/" component={HomePage} />
                <Route path="/home" component={HomePage} />
                <Route path="/temp" component={TempPage} />
              </div>
            </main>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(App);

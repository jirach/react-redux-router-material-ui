import React, { Component } from "react";
import Header from "./components/common/Header";
import { Route, BrowserRouter } from "react-router-dom";
import store from "./util/store";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import HomePage from "./components/pages/HomePage";
import TempPage from "./components/pages/TempPage";

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 'calc(100% - 56px)',
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
    const { classes } = this.props;
    return (
      <Provider store={store}>
        <BrowserRouter>
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
        </BrowserRouter>
      </Provider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(App);

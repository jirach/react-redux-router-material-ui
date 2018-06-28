import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import App from "./App"; 
import registerServiceWorker from "./tool/registerServiceWorker";
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import './asset/css/index.css'

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App/>
    </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();

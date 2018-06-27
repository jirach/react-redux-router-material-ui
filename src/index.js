import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { Route } from "react-router";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter } from "react-router-redux";

import App from "./App";
import HomePage from "./components/pages/HomePage";
import TempPage from "./components/pages/TempPage";

import registerServiceWorker from "./tool/registerServiceWorker";

const store = configureStore();
const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/home" component={HomePage} />
        <Route path="/temp" component={TempPage} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

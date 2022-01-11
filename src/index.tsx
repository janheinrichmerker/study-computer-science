import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { reportWebVitals } from "./reportWebVitals";
import { App } from "./App";
import "./index.scss";

export const Root: FunctionComponent = () => {
  return (
    <React.StrictMode>
      <RootApp />
    </React.StrictMode>
  );
};

export const RootApp: FunctionComponent = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// To measure performance, pass a function to send to an analytics endpoint: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

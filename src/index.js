import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ZipCodeSearch from "./ZipCodeSearch";
import reportWebVitals from "./reportWebVitals";
import CitySearch from "./CitySearch";

ReactDOM.render(
  <React.StrictMode>
    <ZipCodeSearch />
    {/* <CitySearch /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

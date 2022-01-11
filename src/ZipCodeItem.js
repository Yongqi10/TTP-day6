import React, { Fragment } from "react";

function ZipCodeItem(props) {
  return (
    <Fragment>
      <li className="list-group-item">
        <div>State:&nbsp;{props.content.State}</div>
        <div>City: &nbsp;{props.content.City}</div>
        <div>Location:&nbsp;{props.content.Location}</div>
        <div>TotalWages:&nbsp;{props.content.TotalWages}</div>
      </li>
    </Fragment>
  );
}

export default ZipCodeItem;

import React from "react";
import Address from "../.../Address"

const DisplayResults = props => {
  return (
    <div>
      <li>{props.address}</li>
      <li>{props.firstName}</li>
      <li>{props.lastName}</li>
    </div>
  );
};

export default DisplayResults;





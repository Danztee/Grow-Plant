import React from "react";
import classes from "./MiddleText.module.css";

function MiddleText(props) {
  return (
    <div className="mt-5" id={classes.style}>
      {props.text}
    </div>
  );
}

export default MiddleText;

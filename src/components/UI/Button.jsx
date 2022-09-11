import React from "react";
import classes from "./Button.module.css";

function Button(props) {
  return (
    <div>
      <button className={classes.btn} style={props.style}>
        {props.title}
      </button>
    </div>
  );
}

export default Button;

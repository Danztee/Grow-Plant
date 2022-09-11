import React from "react";
import classes from "./Services.module.css";

function Card(props) {
  return (
    <div id={classes.card} className="my-3">
      <div className={classes.center}>
        <img src={`./images/${props.img}`} alt="" style={{ width: "4rem" }} />
        <h3 className="mt-3" style={{ fontWeight: "bold" }}>
          {props.head}{" "}
        </h3>
      </div>
      <p className="mt-3">{props.text}</p>
    </div>
  );
}

export default Card;

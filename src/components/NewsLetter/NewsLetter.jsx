import React from "react";
import classes from "./NewsLetter.module.css";
import Button from "../UI/Button";

function NewsLetter() {
  return (
    <div className="py-5" id={classes.margin}>
      <h3 style={{ textAlign: "center" }}>Subscribe To Our Newsletter</h3>
      <p style={{ textAlign: "center", color: "#282525" }}>
        Be the first to receive the latest information directly from us.
      </p>

      <div className="row" id={classes.box}>
        <div className="col-sm-12 col-md-10">
          <input
            type="email"
            placeholder="Enter email"
            id={classes.input}
          ></input>
        </div>
        <div className="col-sm-12 col-md-2" id={classes.sec}>
          <Button
            title="Subscribe"
            style={{ borderRadius: "0.5rem", padding: "1rem" }}
          />
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;

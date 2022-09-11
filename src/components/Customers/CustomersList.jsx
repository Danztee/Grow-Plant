import React from "react";
import classes from "./Customers.module.css";

function CustomersList(props) {
  return (
    <div id={classes.card} className="my-3">
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ut et
        eu adipiscing. Vel tellus sit vitae morbi ac ut aliquam. Quis sed nisi,
        a pellentesque venenatis magna. Condimentum porttitor tel.
      </p>

      <p className="mt-5">{props.name}</p>
    </div>
  );
}

export default CustomersList;

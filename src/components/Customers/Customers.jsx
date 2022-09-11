import React from "react";
import CustomersList from "./CustomersList";
import classes from "./Customers.module.css";

function Customers() {
  return (
    <div id={classes.something} className="my-3">
      <CustomersList name="John Doe" />
      <CustomersList name="Anna Dotun" />
      <CustomersList name="Princess Andy" />
    </div>
  );
}

export default Customers;

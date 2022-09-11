import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div id={classes.footer}>
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-1"></div>
          <div
            className="col-sm-12 col-md-8 col-lg-4 my-3"
            id={classes.container}
          >
            <h2 style={{ fontWeight: "bold" }}>GrowPLANT</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
              ut et eu ad
            </p>
          </div>
          <div
            className="col-sm-12 col-md-2 col-lg-2 my-3"
            id={classes.container}
          >
            <h5 style={{ fontWeight: "bold" }} id={classes.h5One}>
              {" "}
              SERVICES
            </h5>
            <ul id={classes.ul}>
              <li>Entertainment</li>
              <li>Hotels</li>
              <li>Catering</li>
              <li>Golf </li>
            </ul>
          </div>

          <div
            className="col-sm-12 col-md-8 col-lg-2 my-3"
            id={classes.container}
          >
            <h5 style={{ fontWeight: "bold" }} id={classes.h5Two}>
              {" "}
              ABOUT US
            </h5>
            <ul id={classes.ul}>
              <li>Resort</li>
              <li>Hotel</li>
              <li>Golf</li>
              <li>Wi fi</li>
            </ul>
          </div>
          <div
            className="col-sm-12 col-md-4 col-lg-2 my-3"
            id={classes.container}
          >
            <h5 style={{ fontWeight: "bold" }} id={classes.h5Three}>
              {" "}
              FOLLOW US ON
            </h5>
            <ul id={classes.ul}>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
            </ul>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

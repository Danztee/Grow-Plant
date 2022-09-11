import React from "react";
import classes from "./Header.module.css";
import Button from "../UI/Button";

function Header() {
  return (
    <div>
      <div className="row ">
        <div className="col-sm-12 col-lg-6 mt-3" id={classes.head}>
          <p style={{ fontWeight: "bold" }}>100% real quality</p>

          <h3 style={{ fontWeight: "bold" }}>
            Grow<span style={{ color: "#388525" }}>PLANT</span> Today{" "}
          </h3>
          <p style={{ lineHeight: "28px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, magna
            imperdiet dapibus nibh phasellus nunc. Vitae sagittis dignissim
            molestie nec morbi etiam facilisis gravida fames. Id et eu amet,
            duis. Commodo, egestas senectus senectus sed vestibulum faucibus
            adipiscing posuere tincidunt. Consequat cras integer diam nunc,
            vitae dolor neque. At lectus ultricies ac velit. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Amet, magna im
          </p>
          <div className="btn-container" style={{ display: "flex" }}>
            <Button title="Buy Now" />
            <Button
              title="Contact Us"
              style={{ background: "transparent", color: "#388525" }}
            />
          </div>
        </div>
        <div className="col-sm-12 col-lg-6" id={classes.img}>
          <img
            src="./images/unsplash_T0inbt7nRME.png"
            alt=""
            className="w-75"
          />
        </div>
      </div>
      <div className="mt-3" id={classes.middle}>
        <p>The9tynine</p>
        <p>Facebook</p>
        <p>Sparosite</p>
        <p>Ecobank</p>
        <p>Simha’s Touch</p>
      </div>
    </div>
  );
}

export default Header;

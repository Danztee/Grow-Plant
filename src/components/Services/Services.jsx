import React from "react";
import MiddleText from "../UI/MiddleText";
import Card from "./Card";
import classes from "./Services.module.css";

function Services() {
  const contents = [
    {
      id: 1,
      img: "image1.png",
      head: "Free Shipping",
      text: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Amet, magna imperdiet dapibus nibh phasellus nunc.",
    },
    {
      id: 2,
      img: "image3.png",
      head: "Easy Refund",
      text: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Amet, magna imperdiet dapibus nibh phasellus nunc.",
    },
    {
      id: 3,
      img: "image4.png",
      head: "Discounts",
      text: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Amet, magna imperdiet dapibus nibh phasellus nunc.",
    },
  ];

  return (
    <div className="my-5">
      <MiddleText text="services" />
      <div className="mb-3" id={classes.head}>
        What We Offer
      </div>
      <div className={classes.something}>
        {contents.map((content) => (
          <Card
            key={content.id}
            img={content.img}
            head={content.head}
            text={content.text}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;

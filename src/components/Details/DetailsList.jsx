import React, { useState, useEffect } from "react";

import classes from "./Details.module.css";
import Button from "../UI/Button";
import MiddleText from "../UI/MiddleText";
import { StyledCard } from "./Detailed.styled";
import { StyledImage } from "./Detailed.styled";

function DetailsList(props) {
  const [backgroundColor, setBackgroundColor] = useState();

  useEffect(() => {
    setBackgroundColor(props.id % 2 === 0);
  }, [props]);

  return (
    <section style={{ background: backgroundColor ? "#F9F9F9" : "" }}>
      <div className="container pb-3">
        <StyledCard
          className="row"
          layout={props.id % 2 === 0 && "row-reverse"}
        >
          <StyledImage
            className="col-sm-12 col-lg-6"
            id={classes.img}
            justify={props.id % 2 === 0 && "end"}
          >
            <img src={`./images/${props.image}`} alt="" className="w-75" />
          </StyledImage>

          <div className="col-sm-12 col-lg-6" id={classes.head}>
            <MiddleText text="Details" />
            <h3 style={{ fontWeight: "bold" }} className="my-3">
              {props.title}
            </h3>
            <p style={{ lineHeight: "28px" }}>{props.body}</p>
            <div className="btn-container" style={{ display: "flex" }}>
              <Button title="Read More" />
            </div>
          </div>
        </StyledCard>
      </div>
    </section>
  );
}

export default DetailsList;

import React from "react";
import classes from "./Car.module.css";

const Car = ({ vin, manufacturer, model, color }) => (
  <div className={classes.root}>
    <div
      className={classes.color}
      style={{
        backgroundColor: color
      }}
    />
    <div className={classes.content}>
      <p>VIN: {vin}</p>
      <p>
        {manufacturer} {model}
      </p>
    </div>
  </div>
);

export default Car;

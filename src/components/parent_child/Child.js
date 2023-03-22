import React from "react";
import "./Home.css";

const Child = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default Child;

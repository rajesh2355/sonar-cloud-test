import React from "react";
import Child from "./Child";
import "./Home.css";

const Parent = (props) => {
  return (
    <div>
      <div>
        <h1>Parent Component</h1>
        <Child
          title="Child Title"
          content="This is the child component content."
        />
      </div>
    </div>
  );
};

export default Parent;

import React from "react";

interface Props {
  count: number;
}

const ChildComponent1 = (props: Props) => {
  return (
    <div>
      <h2>Child Component 1</h2>
      <p>Count: {props.count}</p>
    </div>
  );
};

export default ChildComponent1;

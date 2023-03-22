import React from "react";

interface Props {
  incrementCount: () => void;
}

const ChildComponent2: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>Child Component 2</h2>
      <button onClick={props.incrementCount}>Increment Count</button>
    </div>
  );
};

export default ChildComponent2;

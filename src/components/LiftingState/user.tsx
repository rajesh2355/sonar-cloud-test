import React, { useState } from "react";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const Parent = () => {
  const [count, setCount] = useState<number>(0);

  function incrementCount(): void {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <ChildComponent1 count={count} />
      <ChildComponent2 incrementCount={incrementCount} />
    </div>
  );
};

export default Parent;

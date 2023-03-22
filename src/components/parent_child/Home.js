import React from "react";
import Child from "./Child";
import Parent from "./Parent";

const Home = () => {
  return (
    <div>
      <div>
        <Parent />
      </div>

      <div>
        <Child />
      </div>
    </div>
  );
};

export default Home;

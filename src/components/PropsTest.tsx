import React from "react";

type Props = {
  name: string;
};

const PropsTest = ({ name }: Props): JSX.Element => {
  return <div>Hello My name is {name}</div>;
};

export default PropsTest;

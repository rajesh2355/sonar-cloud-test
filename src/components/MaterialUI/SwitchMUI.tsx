import React from "react";
import { Switch } from "@mui/material";
const SwitchMUI = () => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <div>
      <div>
        <Switch {...label} defaultChecked  />
        <Switch />
        <Switch {...label} disabled defaultChecked />
        <Switch {...label} disabled />
      </div>
    </div>
  );
};

export default SwitchMUI;

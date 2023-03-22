import React from "react";
import { Autocomplete, TextField } from "@mui/material";

const AutoCompleteMUI = () => {
  const cold_drink = [
    { label: "Coca Cola" },
    { label: "Mountain Dew" },
    { label: "Sprite" },
    { label: "Pepsi" },
    { label: "Thums Up" },
  ];

  return (
    <div className="mui">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={cold_drink}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Cold Drinks" />}
      />
    </div>
  );
};

export default AutoCompleteMUI;

import React, { useState } from "react";
import { Slider } from "@mui/material";

const SliderMUI: React.FC = () => {
  const [value, setValue] = useState<number>(50);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue(newValue);
      console.log("Slider Value : " + newValue);
    }
  };

  return (
    <div>
      <Slider
        defaultValue={50}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={handleSliderChange}
        value={value}
      />
    </div>
  );
};

export default SliderMUI;
